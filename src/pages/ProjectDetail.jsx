import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects, artemisFeatures } from '../data/content';
import './ProjectDetail.css';

import itineraryMainVideo from '../assets/itinerary-main.mp4';
import itineraryMain1 from '../assets/itinerary-main1.png';
import itineraryMain2 from '../assets/itinerary-mian2.png';
import itineraryRestVideo from '../assets/itinerary-rest.mp4';
import itineraryRest1 from '../assets/itinerary-rest1.png';
import itineraryRest2 from '../assets/itinerary-rest2.png';
import tagVideo from '../assets/tag.mp4';
import tag1 from '../assets/tag1.png';
import tag2 from '../assets/tag2.png';
import foodVideo from '../assets/food.mp4';
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import introVideo from '../assets/intro.mp4';
import intro1 from '../assets/intro1.png';
import intro2 from '../assets/intro2.png';

const artemisTargetUsers = [
  '年轻女性（18-35岁）',
  '喜欢自由行、Citywalk',
  '高频使用小红书、抖音获取攻略',
  '注重效率与出片效果',
];

const artemisAlgorithm = [
  '基于**贪心策略的最近邻算法**进行路径优化，按照地理距离由近到远排列景点',
  '基于**时间片分配**：每日游玩时长8-10小时，选取3-5个景点，合理分配停留时长',
  '**餐饮插入策略**：早餐靠近出发地点、午餐在路线中点、晚餐靠近住宿或返程点',
  '综合平衡**路径最优**、**时间合理**与**体验舒适**三个维度',
];

const artemisUserFlow = [
  '首页 → 输入信息',
  '选择景点/导入攻略',
  '选择餐饮',
  '生成路线',
  '行程详情 → 调整行程',
];

const artemisReflection = {
  intro: '该项目在开发过程中，我从单纯的功能实现逐步转向对产品体验、信息结构与用户路径的系统性思考。',
  sections: [
    {
      title: '1. 景点路线规划与地图交互',
      points: [
        '路线规划不仅是距离计算问题，更是**用户体验设计问题**，在设计过程中逐步从"功能实现"转向"体验优化"',
      ],
      subSections: [
        {
          subTitle: '路线设计上：',
          subPoints: [
            '**同区域聚合出发**：强化**同区域景点聚合**，减少跨区跳跃，提升路线连贯性',
            '**随机分配到均衡日程**：引入**每日2–3个景点约束**，避免行程过密或过空，使节奏更加稳定',
            '**路径生成到体验优化**：加入**时间维度（白天/夜景）**与**路线折返控制**，使整体行程更符合真实旅行体验',
          ],
        },
        {
          subTitle: '实现方式上：',
          subPoints: [
            '采用"先路线逻辑，后地图交互"的**分阶段开发策略**，避免在核心逻辑未稳定时直接引入地图渲染导致系统复杂度上升',
          ],
        },
        {
          subTitle: '交互设计上：',
          subPoints: [
            '以降低**用户认知成本**为目标，简化操作流程，使用户能够更直观理解整体行程结构',
          ],
        },
      ],
    },
    {
      title: '2. 小红书导入解析模块复盘',
      points: [
        '从**关键词提取**升级为**结构化信息识别**，支持**景点、食物、城市及自定义地点**抽取，并尽量保留未识别信息以减少信息损失',
        '从**固定解析**升级为**用户意图驱动解析**，可识别**时间表达（上午/下午/晚上）**与**顺序表达（先/然后/接着）**，并优先保留用户原始结构',
        '从**单一输入格式**升级为**多格式解析系统**，支持**自然文本、Day行程结构及箭头路径**等不同输入方式，并适配对应解析逻辑',
      ],
    },
    {
      title: '3. Debug 与 Prompt 驱动开发过程',
      points: [
        '通过**inspect报错 + 截图分析**结合AI辅助定位问题，并按可能性逐步排查，避免盲目修改代码',
        '将复杂问题拆解为小步骤逐一验证，并结合清晰的错误上下文，提高调试效率与定位准确性',
        '采用**Prompt驱动开发**方式，约束AI仅进行小范围修改并优先分析问题，避免大规模改动导致系统不稳定',
      ],
    },
  ],
};

function parseBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function InfoCard({ title, children, isActive, onClick }) {
  return (
    <div 
      className={`info-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <h3 className="info-card-title">{title}</h3>
      <div className="info-card-content">{children}</div>
    </div>
  );
}

function ImageModal({ src, onClose }) {
  return (
    <div className="image-modal" onClick={onClose}>
      <button className="image-modal-close" onClick={onClose}>×</button>
      <img src={src} alt="" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function FeatureItem({ feature }) {
  const [modalImg, setModalImg] = useState(null);

  const getMediaSrc = (src) => {
    if (src === 'itinerary-main.mp4') return itineraryMainVideo;
    if (src === 'itinerary-main1.png') return itineraryMain1;
    if (src === 'itinerary-mian2.png') return itineraryMain2;
    if (src === 'itinerary-rest.mp4') return itineraryRestVideo;
    if (src === 'itinerary-rest1.png') return itineraryRest1;
    if (src === 'itinerary-rest2.png') return itineraryRest2;
    if (src === 'tag.mp4') return tagVideo;
    if (src === 'tag1.png') return tag1;
    if (src === 'tag2.png') return tag2;
    if (src === 'food.mp4') return foodVideo;
    if (src === 'food1.png') return food1;
    if (src === 'food2.png') return food2;
    if (src === 'intro.mp4') return introVideo;
    if (src === 'intro1.png') return intro1;
    if (src === 'intro2.png') return intro2;
    return src;
  };

  if (feature.modes) {
    return (
      <div className="feature-item">
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-desc">{feature.description}</p>
        <div className="mode-list">
          {feature.modes.map((mode, idx) => (
            <div key={idx} className="mode-block">
              <h4 className="mode-title">{mode.title}</h4>
              <div className="mode-grid">
                {mode.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="mode-media">
                    {item.type === 'video' ? (
                      <video src={getMediaSrc(item.src)} controls />
                    ) : (
                      <img 
                        src={getMediaSrc(item.src)} 
                        alt="" 
                        onClick={() => setModalImg(getMediaSrc(item.src))}
                      />
                    )}
                  </div>
                ))}
                {modalImg && <ImageModal src={modalImg} onClose={() => setModalImg(null)} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="feature-item">
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.description}</p>
      {feature.items && (
        <div className="mode-grid">
            {feature.items.map((item, idx) => (
              <div key={idx} className="mode-media">
                {item.type === 'video' ? (
                  <video src={getMediaSrc(item.src)} controls />
                ) : (
                  <img 
                    src={getMediaSrc(item.src)} 
                    alt="" 
                    onClick={() => setModalImg(getMediaSrc(item.src))}
                  />
                )}
              </div>
            ))}
            {modalImg && <ImageModal src={modalImg} onClose={() => setModalImg(null)} />}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
    setTimeout(() => setActiveCard(null), 1000);
  };

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <Link to="/projects">← 返回项目</Link>
      </div>
    );
  }

  const features = project.id === 'artemis' ? artemisFeatures : project.features;

  return (
    <div className="project-detail">
      <div className="back-link">
        <Link to="/projects">← 返回项目</Link>
      </div>

      <header className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        {project.links?.demo && (
          <div className="project-demo">
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
              Live Demo ↗ <span className="vpn-notice-inline">* 因引入地图服务（Leaflet），访问网站可能需要科学上网</span>
            </a>
          </div>
        )}
      </header>

      {project.id === 'artemis' && (
        <>
          {project.background && (
            <section className="detail-section">
              <InfoCard title="项目背景" isActive={activeCard === 'background'} onClick={() => handleCardClick('background')}>
                <div className="bg-grid">
                  <div className="bg-item">
                    <h4>用户痛点</h4>
                    <p>自由行用户（尤其是<strong>年轻女性</strong>与Citywalk人群）在旅行规划中面临<strong>信息过载</strong>问题，需要在小红书、抖音等多个平台反复筛选攻略，信息呈现<strong>高度碎片化</strong>。</p>
                    <p>同时，行程规划过程复杂，需要兼顾路线合理性、时间安排与餐饮选择，整体<strong>规划效率较低</strong>。</p>
                  </div>
                  <div className="bg-item">
                    <h4>产品概述</h4>
                    <p>构建一个<strong>以地图为核心</strong>的智能行程规划系统，通过<strong>结构化信息处理</strong>与<strong>路径优化算法</strong>，帮助用户快速生成高质量旅行路线，并具备向真实产品落地扩展的能力。</p>
                  </div>
                </div>
              </InfoCard>
            </section>
          )}

          <section className="detail-section">
            <InfoCard title="目标用户" isActive={activeCard === 'targetUsers'} onClick={() => handleCardClick('targetUsers')}>
              <ul className="card-list">
                {artemisTargetUsers.map((u, i) => (
                  <li key={i}>{u}</li>
                ))}
              </ul>
            </InfoCard>
          </section>

          <section className="detail-section">
            <h2>核心功能</h2>
            <div className="features-list">
              {features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
          </section>

          <section className="detail-section">
            <InfoCard title="核心算法逻辑" isActive={activeCard === 'algorithm'} onClick={() => handleCardClick('algorithm')}>
              <ul className="card-list">
                {artemisAlgorithm.map((a, i) => (
                  <li key={i}>{parseBold(a)}</li>
                ))}
              </ul>
            </InfoCard>
          </section>

          <section className="detail-section">
            <InfoCard title="用户流程" isActive={activeCard === 'userFlow'} onClick={() => handleCardClick('userFlow')}>
              <div className="flow-steps">
                {artemisUserFlow.map((step, i) => (
                  <span key={i} className="flow-step">{step}</span>
                ))}
              </div>
            </InfoCard>
          </section>

          <section className="detail-section">
            <InfoCard title="项目反思与复盘" isActive={activeCard === 'reflection'} onClick={() => handleCardClick('reflection')}>
              <p className="reflection-intro">{artemisReflection.intro}</p>
              <div className="reflection-sections">
                {artemisReflection.sections.map((section, i) => (
                  <div key={i} className="reflection-section">
                    <h3 className="reflection-title">{section.title}</h3>
                    {section.points.map((point, j) => (
                      <p key={j} className="reflection-main-point">{parseBold(point)}</p>
                    ))}
                    {section.subSections && section.subSections.map((sub, k) => (
                      <div key={k} className="reflection-subsection">
                        <p className="reflection-sub-title">{sub.subTitle}</p>
                        <ul className="reflection-sub-points">
                          {sub.subPoints.map((sp, l) => (
                            <li key={l}>{parseBold(sp)}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </InfoCard>
          </section>
        </>
      )}

      {project.features && project.id !== 'artemis' && (
        <section className="detail-section">
          <h2>功能特点</h2>
          <ul className="feature-list">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="detail-section">
        <h2>相关链接</h2>
        <div className="project-links">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              演示地址
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
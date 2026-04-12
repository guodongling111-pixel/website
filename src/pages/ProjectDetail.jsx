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
  '基于地理距离排序（路径优化）',
  '时间分配（上午/下午/晚上结构）',
  '餐饮插入策略（早餐/午餐/晚餐/外卖场景）',
];

const artemisUserFlow = [
  '首页 → 输入信息',
  '选择景点/导入攻略',
  '选择餐饮',
  '生成路线',
  '行程详情 → 调整行程',
];

const artemisFuture = [
  'AI个性化推荐',
  '用户收藏与复用行程',
  '社交分享（生成行程卡片）',
  '多城市扩展',
];

function InfoCard({ title, children }) {
  return (
    <div className="info-card">
      <h3 className="info-card-title">{title}</h3>
      <div className="info-card-content">{children}</div>
    </div>
  );
}

function FeatureItem({ feature }) {
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
                      <video src={getMediaSrc(item.src)} controls onClick={(e) => e.stopPropagation()} />
                    ) : (
                      <img 
                        src={getMediaSrc(item.src)} 
                        alt="" 
                        onClick={(e) => e.preventDefault()} 
                      />
                    )}
                  </div>
                ))}
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
                  <video src={getMediaSrc(item.src)} controls onClick={(e) => e.stopPropagation()} />
                ) : (
                  <img 
                    src={getMediaSrc(item.src)} 
                    alt="" 
                    onClick={(e) => e.preventDefault()} 
                  />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

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
      </header>

      {project.id === 'artemis' && (
        <>
          {project.background && (
            <section className="detail-section">
              <InfoCard title="项目背景">
                <div className="bg-grid">
                  <div className="bg-item">
                    <h4>用户痛点</h4>
                    <p>{project.background.problem}</p>
                  </div>
                  <div className="bg-item">
                    <h4>产品概述</h4>
                    <p>{project.background.goal}</p>
                  </div>
                </div>
              </InfoCard>
            </section>
          )}

          <section className="detail-section">
            <InfoCard title="目标用户">
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
            <InfoCard title="核心算法逻辑">
              <ul className="card-list">
                {artemisAlgorithm.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </InfoCard>
          </section>

          <section className="detail-section">
            <InfoCard title="用户流程">
              <div className="flow-steps">
                {artemisUserFlow.map((step, i) => (
                  <span key={i} className="flow-step">{step}</span>
                ))}
              </div>
            </InfoCard>
          </section>

          <section className="detail-section">
            <InfoCard title="未来迭代方向">
              <ul className="card-list">
                {artemisFuture.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
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
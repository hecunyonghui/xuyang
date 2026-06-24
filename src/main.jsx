import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const navItems = [
  ['首页', '#hero'],
  ['作品', '#works'],
  ['视频', '#videos'],
  ['生活', '#life'],
  ['联系', '#footer'],
]

const profile = {
  name: '柳畅',
  title: '自媒体编导 / AI 创作者',
  description:
    '把内容策划、视频叙事、AI 影像和个人表达整理成一套持续更新的作品系统。',
  intro:
    '你好，这里是柳畅。我长期关注内容叙事、AIGC 影像、视觉表达与智能体工作流，习惯把选题、脚本、剪辑、生成和发布放在同一条创作链路里思考。',
  note:
    '我想做的不是一个堆满效果的网站，而是一个足够安静、足够清楚、能让作品自己说话的个人展示空间。',
  email: '2740504648@qq.com',
  phone: '18957808835',
  location: '上海市松江区',
  school: '上海工程技术大学',
}

const works = [
  {
    title: 'AI短剧与影像实验',
    category: '作品方向',
    image: '/assets/portrait-photo.png',
    text: '围绕 AI 短剧、角色设定、分镜结构与成片输出建立完整的展示入口。',
    featured: true,
  },
  {
    title: '自媒体内容策划',
    category: '内容方向',
    image: '/assets/project-brand-system.svg',
    text: '整理选题思路、账号表达方式、脚本节奏与实际发布案例。',
  },
  {
    title: 'AI视觉设计',
    category: '视觉方向',
    image: '/assets/project-digital-experience.svg',
    text: '展示海报、封面、KV 与风格探索，保留提示词与视觉方法论。',
  },
]

const videoCards = [
  {
    title: '短视频剪辑作品',
    text: '混剪、口播、活动视频与信息流内容，强调节奏、镜头组织和传播效率。',
  },
  {
    title: 'AI短片实验',
    text: '从概念、脚本、生成到成片的完整流程，用真实案例展示能力边界。',
  },
  {
    title: '视频账号运营',
    text: '把内容发布、反馈复盘和持续迭代一起纳入作品展示，而不只放结果图。',
  },
]

const lifeTags = ['内容策划', '影像表达', 'AI创作', '智能体工作流']

const contacts = [
  ['邮箱', profile.email, `mailto:${profile.email}`],
  ['电话', profile.phone, `tel:${profile.phone}`],
  ['地区', profile.location, null],
  ['学校', profile.school, null],
]

function App() {
  return (
    <main className="siteShell">
      <BackgroundGlow />
      <Header />
      <Hero />
      <About />
      <Works />
      <Videos />
      <Life />
      <Footer />
    </main>
  )
}

function BackgroundGlow() {
  return (
    <div className="backgroundGlow" aria-hidden="true">
      <span className="glow glowA" />
      <span className="glow glowB" />
      <span className="gridLines" />
    </div>
  )
}

function Header() {
  return (
    <header className="topNav">
      <div className="sectionContainer navInner">
        <a className="brandMark" href="#hero">
          <span className="brandInitial">L</span>
          <span className="brandName">LIU CHANG</span>
        </a>
        <nav className="navLinks" aria-label="主导航">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="heroSection" id="hero">
      <div className="sectionContainer heroGrid">
        <div className="heroCopy">
          <p className="eyebrow">PORTFOLIO / 2026</p>
          <h1 className="heroTitle">
            柳畅
            <span>{profile.title}</span>
          </h1>
          <p className="heroLead">{profile.description}</p>
          <p className="heroBody">{profile.note}</p>
          <div className="heroActions">
            <a className="primaryButton" href="#works">
              查看作品
            </a>
            <a className="secondaryButton" href="#footer">
              联系我
            </a>
          </div>
        </div>

        <aside className="heroAside cardPanel">
          <div className="portraitWrap">
            <img src="/assets/portrait-photo.png" alt="柳畅个人照片" />
          </div>
          <div className="heroAsideCopy">
            <p className="miniLabel">ABOUT</p>
            <p>{profile.intro}</p>
            <div className="tagRow">
              {lifeTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="contentSection" id="about">
      <div className="sectionContainer splitSection">
        <div>
          <p className="sectionKicker">关于我</p>
          <h2 className="sectionTitle">一个把内容、影像与 AI 放进同一套表达系统里的人</h2>
        </div>
        <div className="sectionText">
          <p>{profile.intro}</p>
          <p>{profile.note}</p>
        </div>
      </div>
    </section>
  )
}

function Works() {
  return (
    <section className="contentSection" id="works">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <div>
            <p className="sectionKicker">作品</p>
            <h2 className="sectionTitle">像参考站一样安静，但内容完全属于你自己</h2>
          </div>
          <p className="sectionSubtitle">先用清晰的大卡片组织重点方向，后续再逐步替换为真实项目封面与成片截图。</p>
        </div>

        <div className="worksGrid">
          {works.map((item) => (
            <article className={`workCard cardPanel ${item.featured ? 'isFeatured' : ''}`} key={item.title}>
              <div className="workMedia">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="workCopy">
                <p className="miniLabel">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Videos() {
  return (
    <section className="contentSection" id="videos">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <div>
            <p className="sectionKicker">视频</p>
            <h2 className="sectionTitle">把“会剪、会做、会发布”拆成更容易理解的三个入口</h2>
          </div>
        </div>
        <div className="tripleGrid">
          {videoCards.map((item) => (
            <article className="infoCard cardPanel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Life() {
  return (
    <section className="contentSection" id="life">
      <div className="sectionContainer lifeLayout">
        <article className="quoteCard cardPanel">
          <p className="sectionKicker">生活</p>
          <blockquote>
            我想让作品集保留一点情绪和呼吸感，而不是只有简历和参数。好的内容，应该让人感到你是一个真实的人。
          </blockquote>
        </article>

        <div className="contactGrid">
          {contacts.map(([label, value, href]) => (
            <article className="contactCard cardPanel" key={label}>
              <p className="miniLabel">{label}</p>
              {href ? <a href={href}>{value}</a> : <strong>{value}</strong>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footerSection" id="footer">
      <div className="sectionContainer footerInner">
        <div>
          <p className="sectionKicker">联系</p>
          <h2 className="sectionTitle">如果你想让我继续把它打磨成完整作品集，我们可以从真实案例开始。</h2>
        </div>
        <div className="footerMeta">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.phone}</span>
          <span>柳畅作品集 2026</span>
        </div>
      </div>
    </footer>
  )
}

createRoot(document.getElementById('root')).render(<App />)

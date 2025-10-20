import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>사회적협동조합 가치로운</h1>
          <p className="hero-subtitle">함께 만드는 가치, 더불어 사는 세상</p>
          <p className="hero-description">
            장애인 활동지원사업을 통해 지역사회의 사회적 가치를 실현하고, 
            협동조합의 정신으로 모든 구성원이 존중받는 사회를 만들어갑니다.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10년+</span>
              <span className="stat-label">경험과 신뢰</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500명+</span>
              <span className="stat-label">서비스 이용자</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">고객 만족도</span>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="#services" className="btn btn-primary">
              사업 안내 보기
            </a>
            <a href="#volunteer" className="btn btn-secondary">
              봉사 신청하기
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>사회적협동조합 가치로운</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
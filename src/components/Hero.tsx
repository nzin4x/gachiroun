import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>'같이'의 가치, 사회적협동조합 가치로운</h1>
          <p className="hero-subtitle">더불어 함께 살아가는 사회적 가치 실현</p>
          <p>지역 내 장애인 및 저소득 가정을 위해 물품 나눔, 장애인 자조모임과 힐링여행, 서울 디딤돌 사업 거점기관 수행, 지역사회와 연계하여 다양한 나눔 행사 등을 수행하고 있습니다.</p>
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
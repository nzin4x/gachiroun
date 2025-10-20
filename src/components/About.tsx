import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>✨ 가치로운이란?</h2>
        
        {/* 가치로운 의미 섹션 */}
        <div className="meaning-section">
          <div className="meaning-card">
            <h3>💛 의미</h3>
            <p>
              '가치로운'은 <strong>'가치'와 '같이'</strong>의 결합으로,<br/>
              사람과 지역이 함께 성장하는 동행의 마음을 담습니다.
            </p>
          </div>
          
          <div className="meaning-card">
            <h3>🌿 상징</h3>
            <p>
              초성 ㄱ과 ㅊ은 사람의 형상으로,<br/>
              함께함과 연결을 뜻합니다.<br/>
              🧡은 열정, 💛은 희망과 즐거움을 상징합니다.
            </p>
          </div>
        </div>

        <div className="philosophy-vision">
          <div className="philosophy-card">
            <h3>🌼 철학</h3>
            <p className="philosophy-quote">"우리 같이 가치롭게"</p>
            <p>모두가 존중받으며 살아가는 세상을 만듭니다.</p>
          </div>
          
          <div className="vision-card">
            <h3>🌻 비전</h3>
            <p>
              어르신 → 장애인 → 아동·청소년 → 지역사회로 이어지는<br/>
              복지 순환 구조로 상생과 배려의 공동체를 실현합니다
            </p>
          </div>
        </div>

        {/* 순환구조 핵심 섹션 */}
        <div className="cycle-core-section">
          <h3>🔄 복지 순환구조의 핵심</h3>
          <div className="cycle-model">
            <img src="/images/cycle-model.png" alt="가치로운의 순환구조" className="cycle-image" />
          </div>
        </div>

        {/* 3대 주요 사업 */}
        <div className="main-services">
          <h3>🏠 3개의 주요 사업</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👴</div>
              <h4>재가방문요양 사업</h4>
              <p>어르신들의 일상생활을 지원하여<br/>건강하고 안전한 노후를 돕습니다</p>
              <img src="/images/business-1-adult.png" alt="재가방문요양" className="service-image" />
            </div>
            
            <div className="service-card">
              <div className="service-icon">♿</div>
              <h4>장애인활동지원 사업</h4>
              <p>장애인의 자립생활과 사회참여를<br/>적극적으로 지원합니다</p>
              <img src="/images/business-unabled.png" alt="장애인활동지원" className="service-image" />
            </div>
            
            <div className="service-card">
              <div className="service-icon">👶</div>
              <h4>아동청소년 성장지원 사업</h4>
              <p>미래 세대의 건강한 성장과<br/>교육 기회를 제공합니다</p>
              <img src="/images/business-children.png" alt="아동청소년 성장지원" className="service-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
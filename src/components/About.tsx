import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>가치로운 소개</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>사회적협동조합 가치로운</h3>
            <div className="mission-vision">
              <div className="mission">
                <h4>🎯 미션</h4>
                <p>존중받는 활동지원사, 만족하는 이용자, 함께하는 지역사회</p>
              </div>
              <div className="vision">
                <h4>🌟 비전</h4>
                <p>개인별 맞춤서비스, 중등장애인 지역사회 자립, 지역사회 네트워크</p>
              </div>
            </div>
            <p>
              사회적협동조합 가치로운은 지역사회 내 장애인과 저소득 가정을 위한 
              다양한 사회적 가치를 실현하는 사회적협동조합입니다.
            </p>
            <p>
              물품 나눔, 장애인 자조모임, 힐링여행, 서울 디딤돌 사업 거점기관 운영 등 
              지역사회와 함께하는 활동을 통해 더불어 사는 사회적 가치를 실현해가고 있습니다.
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span>가치로운 활동 사진</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
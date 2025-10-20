import './Services.css'

const Services = () => {
  const services = [
    {
      title: "중증장애인 활동지원사업",
      description: "장애인활동지원법에 따라 신체적·정신적 장애로 혼자서 일상생활과 사회생활을 하기 어려운 장애인에게 활동지원급여를 제공",
      icon: "🤝",
      details: ["신변처리 지원", "가사활동 지원", "사회활동 지원", "의사소통 지원"]
    },
    {
      title: "협동조합 컨설팅",
      description: "사회적경제 조직의 설립과 운영을 위한 전문 컨설팅 서비스 제공",
      icon: "💼",
      details: ["조합 설립 지원", "운영 컨설팅", "사업 개발", "네트워킹 지원"]
    },
    {
      title: "교육 및 인력양성",
      description: "활동지원사 양성교육과 사회적경제 인재 육성 프로그램 운영",
      icon: "📚",
      details: ["활동지원사 교육", "보수교육", "전문성 향상", "역량강화"]
    },
    {
      title: "청소년 지원사업",
      description: "지역사회 청소년들의 건전한 성장과 자립을 위한 종합 지원 서비스",
      icon: "👥",
      image: "/images/business-children.png",
      details: ["진로상담", "교육지원", "문화활동", "자립프로그램"]
    },
    {
      title: "장애인 지원사업", 
      description: "장애인의 사회참여와 자립생활을 위한 맞춤형 지원 서비스",
      icon: "🤝",
      image: "/images/business-unabled.png",
      details: ["활동지원", "사회참여", "직업훈련", "생활지원"]
    },
    {
      title: "사회적 가치 창출",
      description: "지역사회 내 취약계층을 위한 다양한 사회적 가치 실현 활동",
      icon: "💝",
      details: ["물품 나눔", "문화활동", "힐링여행", "자조모임"]
    },
    {
      title: "지역사회 네트워킹",
      description: "지역 내 다양한 기관과의 협력을 통한 통합적 서비스 제공",
      icon: "🌍",
      details: ["복지관 연계", "병원 협력", "교육기관 연계", "지자체 협력"]
    },
    {
      title: "조합원 복리증진",
      description: "조합원들의 경제적·사회적 지위 향상과 복리증진을 위한 다양한 사업",
      icon: "⭐",
      details: ["복리후생", "역량개발", "경제활동 지원", "권익보호"]
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>사업 안내</h2>
        <p className="services-subtitle">
          사회적협동조합 가치로운의 전문적이고 체계적인 사업 영역
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.image ? (
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              ) : (
                <div className="service-icon">{service.icon}</div>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.details && (
                <div className="service-details">
                  <ul>
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
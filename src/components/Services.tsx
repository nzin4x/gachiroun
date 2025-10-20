import './Services.css'

const Services = () => {
  const services = [
    {
      title: "활동지원 서비스",
      description: "장애인의 일상생활과 사회활동을 지원하는 개인별 맞춤 서비스",
      icon: "🤝"
    },
    {
      title: "물품 나눔 사업",
      description: "지역 내 저소득 가정과 장애인을 위한 생활용품 나눔",
      icon: "💝"
    },
    {
      title: "자조모임 운영",
      description: "장애인 당사자들의 자립과 사회참여를 위한 모임 지원",
      icon: "👥"
    },
    {
      title: "힐링 여행",
      description: "장애인과 가족을 위한 휴식과 치유의 여행 프로그램",
      icon: "✈️"
    },
    {
      title: "디딤돌 사업",
      description: "서울시 디딤돌 사업 거점기관으로서 지역사회 연계 서비스",
      icon: "�"
    },
    {
      title: "지역사회 연계",
      description: "복지관, 문화센터 등과 협력하여 다양한 나눔 행사 기획",
      icon: "🌍"
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>사업 안내</h2>
        <p className="services-subtitle">
          지역사회와 함께하는 사회적 가치 실현을 위한 다양한 사업을 운영하고 있습니다
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
import './Resources.css'

const Resources = () => {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2>가치로운 정보</h2>
        <p className="resources-subtitle">
          사회적협동조합 가치로운의 주요 정보와 가치를 한눈에 확인하세요
        </p>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon">🏢</div>
            <h3>조직도</h3>
            <p>사회적협동조합 가치로운의 체계적인 조직 구성과 각 부서별 역할을 한눈에 확인할 수 있습니다.</p>
            <div className="org-chart-preview">
              <img src="/images/조직도.png" alt="조직도" />
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">�</div>
            <h3>가치의 정의</h3>
            <p>협동조합이 추구하는 핵심 가치와 철학, 사회적 사명에 대한 명확한 정의를 제시합니다.</p>
            <div className="values-preview">
              <img src="/images/가치의 정의.png" alt="가치의 정의" />
            </div>
          </div>

          <div className="resource-card">
            <div className="resource-icon">🔄</div>
            <h3>순환구조</h3>
            <p>어르신, 장애인, 아동·청소년, 지역사회로 이어지는 복지 순환구조를 시각적으로 보여줍니다.</p>
            <div className="cycle-preview">
              <img src="/images/cycle-model.png" alt="순환구조" />
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">�</div>
            <h3>연락처 정보</h3>
            <p>궁금한 사항이나 협력 문의는 언제든지 연락주시기 바랍니다.</p>
            <div className="contact-info">
              <p><strong>📞</strong> 032-123-4567</p>
              <p><strong>📧</strong> info@gachiroun.org</p>
              <p><strong>📍</strong> 인천광역시 서구 가정로 198</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
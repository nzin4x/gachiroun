import './Resources.css'

const Resources = () => {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2>자료실</h2>
        <p className="resources-subtitle">
          사회적협동조합 가치로운에 대한 자세한 정보를 확인하실 수 있습니다
        </p>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon">📋</div>
            <h3>조합 소개글</h3>
            <p>사회적협동조합 가치로운의 설립 목적, 조직 구성, 주요 사업 등을 상세히 안내하는 공식 소개 자료입니다.</p>
            <a href="/doc/가치로운 소개글.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              다운로드
            </a>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">📊</div>
            <h3>사업 제안서</h3>
            <p>협동조합의 비전과 미션, 구체적인 사업 계획 및 운영 방안이 담긴 공식 제안서입니다.</p>
            <a href="/doc/250320 가치로운 제안서-ver5(공백추가).pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              다운로드
            </a>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">🏢</div>
            <h3>조직도</h3>
            <p>사회적협동조합 가치로운의 체계적인 조직 구성과 각 부서별 역할을 한눈에 확인할 수 있습니다.</p>
            <div className="org-chart-preview">
              <img src="/images/조직도.png" alt="조직도" />
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">💎</div>
            <h3>가치의 정의</h3>
            <p>협동조합이 추구하는 핵심 가치와 철학, 사회적 사명에 대한 명확한 정의를 제시합니다.</p>
            <div className="values-preview">
              <img src="/images/가치의 정의.png" alt="가치의 정의" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
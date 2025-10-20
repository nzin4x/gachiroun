import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>사회적협동조합 가치로운</h3>
            <p>더불어 함께 살아가는 사회적 가치 실현</p>
            <div className="social-links">
              <a href="#" aria-label="카카오톡">💬</a>
              <a href="#" aria-label="유튜브">📺</a>
              <a href="#" aria-label="페이스북">📘</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>빠른 링크</h4>
            <ul>
              <li><a href="#about">가치로운 소개</a></li>
              <li><a href="#services">사업 안내</a></li>
              <li><a href="#volunteer">봉사 신청</a></li>
              <li><a href="#contact">오시는 길</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>연락처</h4>
            <p>📞 010-6549-8765</p>
            <p>📧 nzin4x@gmail.com</p>
            <p>📍 서울 강남구 테헤란로 406</p>
            <p>샹제리제타워 A동 C111호</p>
          </div>
          
          <div className="footer-section">
            <h4>운영시간</h4>
            <p>평일: 09:00 - 18:00</p>
            <p>토요일: 09:00 - 13:00</p>
            <p>일요일, 공휴일: 휴무</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/policy">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
            <a href="/copyright">저작권안내</a>
          </div>
          
          <div className="copyright">
            <p>Copyright ⓒ {currentYear} 사회적협동조합 가치로운 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
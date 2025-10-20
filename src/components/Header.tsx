import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/main-logo.png" alt="사회적협동조합 가치로운" />
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 토글"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#home">홈</a></li>
            <li><a href="#about">가치로운 소개</a></li>
            <li><a href="#services">사업안내</a></li>
            <li><a href="#resources">자료실</a></li>
            <li><a href="#volunteer">봉사신청</a></li>
            <li><a href="#contact">오시는길</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
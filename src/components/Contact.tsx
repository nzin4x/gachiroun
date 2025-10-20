import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>연락처 & 오시는 길</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>📞 연락처</h3>
              <p>
                <strong>전화:</strong> <a href="tel:010-6549-8765">010-6549-8765</a>
              </p>
              <p>
                <strong>이메일:</strong> <a href="mailto:nzin4x@gmail.com">nzin4x@gmail.com</a>
              </p>
            </div>
            
            <div className="info-item">
              <h3>📍 주소</h3>
              <p>서울 강남구 테헤란로 406</p>
              <p>샹제리제타워 A동 C111호</p>
            </div>
            
            <div className="info-item">
              <h3>👨‍💼 조합 정보</h3>
              <p>사회적협동조합 가치로운</p>
              <p>대표: 전승호</p>
            </div>
            
            <div className="info-item">
              <h3>🕒 운영시간</h3>
              <p>평일: 09:00 - 18:00</p>
              <p>토요일: 09:00 - 13:00</p>
              <p>일요일, 공휴일: 휴무</p>
            </div>
          </div>
          
          <div className="contact-map">
            <h3>🗺️ 오시는 길</h3>
            <img src="/images/map.png" alt="오시는 길 지도" className="map-image" />
            <div className="map-info">
              <p><strong>지하철:</strong> 2호선 강남역 12번 출구 도보 5분</p>
              <p><strong>버스:</strong> 강남역 정류장 하차</p>
              <p><strong>주차:</strong> 건물 지하 주차장 이용 가능</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>문의하기</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">연락처</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">문의 내용</label>
                <textarea id="message" name="message" rows={4} required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
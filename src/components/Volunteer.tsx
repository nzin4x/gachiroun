import './Volunteer.css'

const Volunteer = () => {
  return (
    <section className="volunteer" id="volunteer">
      <div className="container">
        <h2>봉사 신청</h2>
        <p className="volunteer-subtitle">
          함께 만드는 사회적 가치, 여러분의 따뜻한 마음을 기다립니다
        </p>
        
        <div className="volunteer-content">
          <div className="volunteer-info">
            <h3>🌟 봉사활동 안내</h3>
            <div className="volunteer-types">
              <div className="volunteer-type">
                <h4>정기 봉사</h4>
                <p>매주 정기적으로 참여하는 장기 봉사활동</p>
                <ul>
                  <li>활동지원 보조</li>
                  <li>사무업무 지원</li>
                  <li>프로그램 운영 도움</li>
                </ul>
              </div>
              
              <div className="volunteer-type">
                <h4>일회성 봉사</h4>
                <p>특별 행사나 이벤트 시 참여하는 봉사활동</p>
                <ul>
                  <li>나눔 행사 도움</li>
                  <li>힐링여행 동행</li>
                  <li>문화행사 지원</li>
                </ul>
              </div>
              
              <div className="volunteer-type">
                <h4>전문 봉사</h4>
                <p>개인의 전문 역량을 활용한 봉사활동</p>
                <ul>
                  <li>IT/디자인 지원</li>
                  <li>교육 프로그램</li>
                  <li>상담 및 치료</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="volunteer-form">
            <h3>봉사 신청서</h3>
            <form>
              <div className="form-group">
                <label htmlFor="vol-name">이름</label>
                <input type="text" id="vol-name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="vol-age">나이</label>
                <input type="number" id="vol-age" name="age" min="14" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="vol-phone">연락처</label>
                <input type="tel" id="vol-phone" name="phone" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="vol-email">이메일</label>
                <input type="email" id="vol-email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="vol-type">희망 봉사 유형</label>
                <select id="vol-type" name="type" required>
                  <option value="">선택해주세요</option>
                  <option value="regular">정기 봉사</option>
                  <option value="event">일회성 봉사</option>
                  <option value="professional">전문 봉사</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="vol-time">가능한 시간대</label>
                <textarea id="vol-time" name="time" rows={2} placeholder="예: 주중 오후, 주말 오전 등"></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="vol-motivation">봉사 동기</label>
                <textarea id="vol-motivation" name="motivation" rows={3} placeholder="봉사를 하고 싶은 이유를 알려주세요"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                봉사 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Volunteer
import React from 'react'
import './MoneyUsage.css'

function MoneyUsage() {
  return (
    <section className="money-usage">
      <div className="money-usage-container">
        <h2 className="section-title">
          📝 Tôi Sẽ Dùng Tiền Vào Đâu?
        </h2>
        
        <div className="usage-list">
          <div className="usage-item">
            <span className="usage-percent">40%</span>
            <span className="usage-desc">- Ăn uống (Cơm, mì tôm, trứng, rau. KHÔNG có tôm hùm!)</span>
          </div>
          
          <div className="usage-item">
            <span className="usage-percent">20%</span>
            <span className="usage-desc">- Điện nước internet (Để sao kê cho anh chị)</span>
          </div>
          
          <div className="usage-item">
            <span className="usage-percent">15%</span>
            <span className="usage-desc">- Thuê nhà (Phòng trọ 15m², không phải penthouse)</span>
          </div>
          
          <div className="usage-item">
            <span className="usage-percent">10%</span>
            <span className="usage-desc">- Y tế (Thuốc cảm, vitamin C, khẩu trang)</span>
          </div>
          
          <div className="usage-item">
            <span className="usage-percent">10%</span>
            <span className="usage-desc">- Học tập nâng cao (Sách, khóa học online để sao kê tốt hơn)</span>
          </div>
          
          <div className="usage-item">
            <span className="usage-percent">5%</span>
            <span className="usage-desc">- Giải trí (Netflix? Không! Chỉ Youtube miễn phí thôi!)</span>
          </div>
        </div>
        
        <div className="chart-notice">
          📊 Biểu đồ chi tiết cập nhật hàng tuần trên website!
        </div>
        
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/aBAq6NWlEAk"
            title="Tôi nuôi cô. Châu Tinh Trì"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default MoneyUsage


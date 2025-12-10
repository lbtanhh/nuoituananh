import React from 'react'
import './Commitment.css'

function Commitment() {
  return (
    <section className="commitment">
      <div className="commitment-container">
        <h2 className="section-title">
          🏠 Cam Kết Vàng Của Tôi:
        </h2>
        
        <ul className="commitment-list">
          <li>
            <span className="check-icon">✓</span>
            <span className="commitment-text">
              <strong>Sao kê mỗi ngày:</strong> Cập nhật lúc 6h sáng, đều như vắt chanh! (Kể cả Chủ Nhật & Lễ)
            </span>
          </li>
          
          <li>
            <span className="check-icon">✓</span>
            <span className="commitment-text">
              <strong>Không giấu giếm:</strong> Từ tô phở 50k đến hộp sữa chua 8k đều được ghi chép tỉ mỉ!
            </span>
          </li>
          
          <li>
            <span className="check-icon">✓</span>
            <span className="commitment-text">
              <strong>Có hóa đơn chứng từ:</strong> Chụp hình bill, quét mã vạch, lưu biên lai đầy đủ!
            </span>
          </li>
          
          <li>
            <span className="check-icon">✓</span>
            <span className="commitment-text">
              <strong>Livestream cuộc sống:</strong> Muốn xem tôi đang làm gì? Bật camera lên! 📹
            </span>
          </li>
          
          <li>
            <span className="check-icon">✓</span>
            <span className="commitment-text">
              <strong>Hoàn tiền nếu không hài lòng:</strong> Trong vòng 30 ngày đầu tiên! (Có điều khoản*)
            </span>
          </li>
        </ul>
        
        <div className="commitment-footer">
          <p className="footer-note">
            * Điều khoản: Bạn phải chứng minh được tôi đã mua siêu xe hoặc biệt thự. Nếu không thì tiền không hoàn! 😄
          </p>
        </div>
      </div>
    </section>
  )
}

export default Commitment


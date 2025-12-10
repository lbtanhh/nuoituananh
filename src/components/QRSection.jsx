import React from 'react'
import './QRSection.css'
import qrImage from '../asset/qr.jpg'

function QRSection() {
  return (
    <section className="qr-section">
      <div className="qr-container">
        <h2 className="section-title">
          📱 Quét Mã QR Để Ủng Hộ 📱
        </h2>
        
        <p className="qr-description">
          Bạn có thể hỗ trợ tôi ngay bây giờ bằng cách quét mã QR dưới đây!
        </p>
        
        <div className="qr-card">
          <div className="qr-image-wrapper">
            <img src={qrImage} alt="QR Code để ủng hộ" className="qr-image" />
          </div>
          
          <div className="qr-info">
            <div className="qr-badge">
              💳 Quét & Chuyển Khoản
            </div>
            <p className="qr-instruction">
              Mở app ngân hàng → Chọn quét QR → Quét mã trên → Nhập số tiền → Xác nhận
            </p>
            <div className="qr-amount-suggestions">
              <span className="amount-label">Gợi ý:</span>
              <div className="amount-chips">
                <span className="chip">20K</span>
                <span className="chip">50K</span>
                <span className="chip">100K</span>
                <span className="chip">500K</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="qr-thank-you">
          <p>
            🙏 <strong> Công đức vô lượng!</strong> 💖
          </p>
        </div>
      </div>
    </section>
  )
}

export default QRSection


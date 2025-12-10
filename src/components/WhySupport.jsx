import React from 'react'
import './WhySupport.css'

function WhySupport() {
  return (
    <section className="why-support">
      <div className="why-support-container">
        <h2 className="section-title">
          🎯 Tại Sao Nên Nuôi Tôi?
        </h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Sao Kê Realtime</h3>
            <p className="feature-desc">
              Cập nhật từng giây! Còn nhanh hơn cả tốc độ bạn chuyển tiền!
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Minh Bạch 300%</h3>
            <p className="feature-desc">
              Hơn cả 100%! Tôi còn báo cáo cả việc mua ly trà sữa!
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💵</div>
            <h3 className="feature-title">Chi Tiêu Hợp Lý</h3>
            <p className="feature-desc">
              Không mua xe hơi, nhà cửa. Chỉ ăn cơm với mì tôm thôi!
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">App Tracking</h3>
            <p className="feature-desc">
              Theo dõi 24/7 tôi ăn gì, uống gì, đi đâu. Như "Big Brother" vậy!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySupport


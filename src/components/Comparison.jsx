import React from 'react'
import './Comparison.css'

function Comparison() {
  return (
    <section className="comparison">
      <div className="comparison-container">
        <h2 className="section-title">
          💰 So Sánh Với "Người Khác"
        </h2>
        
        <div className="comparison-grid">
          <div className="comparison-card bad">
            <h3 className="card-title">❌ Người Khác:</h3>
            <ul className="comparison-list">
              <li>✓ Sao kê sau 3 năm (hoặc không bao giờ)</li>
              <li>✓ File Excel blur mờ như ảnh ma</li>
              <li>✓ Số liệu "làm tròn" theo kiểu 1 + 1 = 3</li>
              <li>✓ Block người hỏi nhanh như chớp</li>
            </ul>
          </div>
          
          <div className="comparison-card good">
            <h3 className="card-title">✅ Nuôi Tôi:</h3>
            <ul className="comparison-list">
              <li>✓ Sao kê trước khi tiêu (dễ ảnh chị duyệt)</li>
              <li>✓ File Excel 4K Ultra HD, có chữ ký điện tử</li>
              <li>✓ Số liệu chính xác đến từng đồng</li>
              <li>✓ Trả lời inbox nhanh hơn cả chatbot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison


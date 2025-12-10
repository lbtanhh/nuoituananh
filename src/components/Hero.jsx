import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="logo">
          <div className="logo-circle">
            <span className="logo-text">Nuôi Tuấn Anh Đi</span>
          </div>
        </div>
        
        <h1 className="hero-title">
          🌱 NUÔI TÔI 🌱
        </h1>
        
        <button className="cta-button">
          HÃY NUÔI TÔI
          <div className="cta-subtitle">
            Tôi hứa sao kê đầy đủ! 💯
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero


# 🌱 Website Nuôi Tôi 🌱

Website ReactJS đơn giản với giao diện đẹp mắt và hiện đại, lấy cảm hứng từ các meme về sao kê và minh bạch tài chính.

## ✨ Tính Năng

- 🎨 Giao diện gradient đẹp mắt với màu sắc bắt mắt
- 📱 Responsive Design - hoạt động tốt trên mọi thiết bị
- 🎯 5 Section chính:
  - Hero với logo và CTA button
  - So sánh "Người Khác" vs "Nuôi Tôi"
  - Phân bổ chi tiêu chi tiết
  - 4 tính năng nổi bật
  - Cam kết vàng với người dùng

## 🚀 Cài Đặt và Chạy

### Yêu Cầu

- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Các Bước

1. **Cài đặt dependencies:**

```bash
npm install
```

2. **Chạy development server:**

```bash
npm run dev
```

3. **Mở trình duyệt:**

Truy cập `http://localhost:5173` để xem website

4. **Build cho production:**

```bash
npm run build
```

## 📁 Cấu Trúc Dự Án

```
nuoi_em/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Component trang đầu
│   │   ├── Hero.css
│   │   ├── Comparison.jsx    # So sánh Người Khác vs Nuôi Tôi
│   │   ├── Comparison.css
│   │   ├── MoneyUsage.jsx    # Phân bổ chi tiêu
│   │   ├── MoneyUsage.css
│   │   ├── WhySupport.jsx    # Tại sao nên nuôi tôi
│   │   ├── WhySupport.css
│   │   ├── Commitment.jsx    # Cam kết vàng
│   │   └── Commitment.css
│   ├── App.jsx               # Component chính
│   ├── App.css
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Công Nghệ Sử Dụng

- **React 18** - Thư viện UI
- **Vite** - Build tool cực nhanh
- **CSS3** - Styling với gradient và animations

## 🌈 Tính Năng Nổi Bật

- **Gradient Backgrounds:** Màu sắc chuyển động mượt mà
- **Hover Effects:** Hiệu ứng tương tác đẹp mắt
- **Responsive Design:** Tự động điều chỉnh trên mobile/tablet/desktop
- **Modern UI:** Thiết kế hiện đại với border-radius, shadows, và transitions

## 📝 Tùy Chỉnh

### Thay Đổi Màu Sắc

Chỉnh sửa các file CSS trong `src/components/` để thay đổi màu gradient và theme.

### Thêm Nội Dung

Chỉnh sửa các component trong `src/components/` để thay đổi nội dung hiển thị.

### Thay Video

Trong `MoneyUsage.jsx`, thay đổi URL của iframe để nhúng video khác:

```jsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Tạo issue hoặc pull request nếu bạn muốn cải thiện dự án.

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🎉 Lời Cảm Ơn

Cảm ơn bạn đã quan tâm đến dự án "Nuôi Tôi"! Nhớ sao kê minh bạch nhé! 💯

---

Made with ❤️ and ReactJS


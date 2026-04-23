
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Studio intro */}
      <section className="max-w-3xl mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">About the Studio</p>
        <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-8">
          We design spaces<br />that tell stories.
        </h1>
        <p className="text-stone-600 leading-relaxed text-base mb-4">
          Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế và thi công nội thất, ORANGE MOON DECOR tự hào là đơn vị mang đến giải pháp không gian sống và làm việc tối ưu - nơi thẩm mỹ hòa quyện cùng công năng. Chúng tôi chuyên cung cấp dịch vụ thiết kế, thi công nội thất trọn gói cho nhà phố, căn hộ, biệt thự, showroom, văn phòng… theo yêu cầu riêng biệt của từng khách hàng.
        </p>
        <p className="text-stone-600 leading-relaxed text-base mb-4">
          Chúng tôi luôn đặt uy tín - chất lượng - tiến độ lên hàng đầu, cam kết sử dụng vật liệu chính hãng, thi công đúng bản vẽ và bảo hành công trình dài hạn. Đội ngũ kiến trúc sư, kỹ sư và thợ lành nghề tại Phan Dũng không ngừng sáng tạo, cập nhật xu hướng để mang đến không gian sống tinh tế, hiện đại và tiện nghi.
        </p>
        <p className="text-stone-600 leading-relaxed text-base">
         Hãy để ORANGE MOON DECOR đồng hành cùng bạn kiến tạo tổ ấm - nơi mỗi chi tiết đều phản ánh cá tính và phong cách sống riêng của gia chủ.</p>
      </section>

      {/* Values */}
      <section className="mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-8">Our Values</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Context', desc: 'Every site has a story. We begin by listening to the land, the climate and the community before a single line is drawn.' },
            { title: 'Craft', desc: 'We take pride in details. The quality of a joint, the texture of a wall, the weight of a door handle — these are what make a space memorable.' },
            { title: 'Collaboration', desc: 'Our best work happens when clients are genuine partners in the process. We build long relationships, not just buildings.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border-t border-stone-200 pt-6">
              <h3 className="text-lg font-medium text-stone-900 mb-3">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

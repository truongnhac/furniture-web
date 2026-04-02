export default function ChiPhiPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">Dịch Vụ</p>
      <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight max-w-2xl mb-10">
        Chi Phí Thiết Kế
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {[
          {
            title: 'Kiến Trúc',
            desc: 'Phí thiết kế kiến trúc được tính theo tổng diện tích sàn xây dựng, bao gồm hồ sơ thiết kế cơ sở và thiết kế kỹ thuật thi công.',
            price: 'Liên hệ để báo giá',
          },
          {
            title: 'Nội Thất',
            desc: 'Phí thiết kế nội thất bao gồm phối cảnh 3D, bản vẽ kỹ thuật chi tiết và hỗ trợ giám sát thi công hoàn thiện.',
            price: 'Liên hệ để báo giá',
          },
          {
            title: 'Cảnh Quan',
            desc: 'Thiết kế cảnh quan tổng thể, bao gồm mặt bằng trồng cây, hệ thống tưới và các hạng mục tiểu cảnh.',
            price: 'Liên hệ để báo giá',
          },
        ].map(({ title, desc, price }) => (
          <div key={title} className="border-t border-stone-200 pt-6">
            <h3 className="text-lg font-medium text-stone-900 mb-3">{title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">{desc}</p>
            <p className="text-xs tracking-widest uppercase text-stone-400">{price}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-stone-200 pt-10 max-w-2xl">
        <p className="text-stone-500 text-sm leading-relaxed">
          Mọi chi tiết về biểu phí vui lòng liên hệ trực tiếp với studio để được tư vấn cụ thể theo từng dự án.
        </p>
        <a
          href="mailto:defdesignvn@gmail.com"
          className="inline-block mt-6 px-8 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors"
        >
          Liên Hệ Ngay
        </a>
      </div>
    </div>
  );
}

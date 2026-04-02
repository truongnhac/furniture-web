export default function BaoGiaPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">Thi Công</p>
      <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight max-w-2xl mb-10">
        Báo Giá Thi Công
      </h1>

      <div className="max-w-3xl">
        <p className="text-stone-600 leading-relaxed text-base mb-8">
          DEF Design Studio cung cấp dịch vụ báo giá thi công trọn gói, bao gồm phần thô và phần hoàn thiện.
          Chúng tôi làm việc với các đơn vị thi công uy tín và đảm bảo chất lượng theo đúng hồ sơ thiết kế.
        </p>

        <div className="space-y-6">
          {[
            { step: '01', title: 'Tiếp nhận hồ sơ', desc: 'Gửi hồ sơ thiết kế hoặc yêu cầu — chúng tôi sẽ xem xét và phản hồi trong vòng 48 giờ.' },
            { step: '02', title: 'Khảo sát thực địa', desc: 'Đội ngũ kỹ thuật sẽ đến khảo sát hiện trạng công trình để lập bảng khối lượng chính xác.' },
            { step: '03', title: 'Lập báo giá chi tiết', desc: 'Báo giá chi tiết từng hạng mục, vật liệu và nhân công — minh bạch và rõ ràng.' },
            { step: '04', title: 'Ký hợp đồng & thi công', desc: 'Ký kết hợp đồng, tiến hành thi công và giám sát chặt chẽ theo đúng tiến độ cam kết.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-6 border-t border-stone-200 pt-6">
              <span className="text-3xl font-light text-stone-200 shrink-0 w-10">{step}</span>
              <div>
                <h3 className="font-medium text-stone-900 mb-1">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="mailto:defdesignvn@gmail.com"
            className="inline-block px-8 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors"
          >
            Yêu Cầu Báo Giá
          </a>
        </div>
      </div>
    </div>
  );
}

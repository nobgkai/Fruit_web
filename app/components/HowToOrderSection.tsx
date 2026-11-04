const steps = [
  {
    id: "step-01",
    number: "01",
    title: "เลือกแบบที่ชอบ",
    desc: "เลือกจากสินค้าที่มี หรือบอกเราถึงโอกาสและงบที่ต้องการ แล้วเราจะแนะนำ",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: "step-02",
    number: "02",
    title: "ทัก LINE แจ้งรายละเอียด",
    desc: "บอกวันที่ต้องการรับ ที่อยู่จัดส่ง และข้อความในการ์ด (ถ้าต้องการ)",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
      </svg>
    ),
  },
  {
    id: "step-03",
    number: "03",
    title: "ชำระเงินและรอรับ",
    desc: "โอนชำระ รับยืนยัน แล้วรอรับของขวัญสวยงามที่หน้าบ้านได้เลย",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const LINE_URL = "https://line.me/ti/p/~@buphachat";

export default function HowToOrderSection() {
  return (
    <section id="how-to-order" className="py-20 md:py-28 bg-[#7f1d1d]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#f0c672] text-sm font-semibold tracking-widest uppercase mb-3">
            วิธีสั่งซื้อ
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            สั่งง่าย 3 ขั้นตอน
          </h2>
          <p className="text-white/70 mt-3">ไม่ต้องสมัครสมาชิก ไม่ต้องกรอกฟอร์ม ทักหาเราได้เลย</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-[#d4a853]/30" />

          {steps.map((step, idx) => (
            <div key={step.id} id={step.id} className="flex flex-col items-center text-center relative">
              {/* Step number */}
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-full bg-[#d4a853] flex items-center justify-center text-white shadow-lg shadow-[#d4a853]/30">
                  {step.icon}
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-[#b91c1c] text-xs font-bold flex items-center justify-center shadow"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-white font-bold text-lg mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>

              {/* Arrow between steps (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-16 translate-x-1/2 -translate-y-1/2 text-[#d4a853]/60">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="how-to-order-line-cta"
            className="inline-flex items-center gap-3 bg-[#00B900] hover:bg-[#009900] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl line-btn-glow"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
            </svg>
            เริ่มสั่งซื้อผ่าน LINE
          </a>
          <p className="text-white/50 text-sm mt-3">สอบถามรายละเอียดและคิวจัดทำได้โดยตรงทาง LINE</p>
        </div>
      </div>
    </section>
  );
}

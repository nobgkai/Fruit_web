import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fdf8f0] px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold tracking-widest text-[#b91c1c]">404</p>
        <h1 className="mt-3 text-3xl font-bold text-[#1c1008]">ไม่พบหน้าที่คุณกำลังค้นหา</h1>
        <p className="mt-4 leading-relaxed text-[#7f5c48]">ลิงก์อาจไม่ถูกต้อง หรือหน้านี้อาจถูกย้ายแล้ว</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-[#b91c1c] px-6 py-3 font-semibold text-white hover:bg-[#7f1d1d]">
            กลับหน้าแรก
          </Link>
          <a
            href="https://line.me/ti/p/~@buphachat"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#00B900] px-6 py-3 font-semibold text-white hover:bg-[#009900]"
          >
            ติดต่อทาง LINE
          </a>
        </div>
      </div>
    </main>
  );
}

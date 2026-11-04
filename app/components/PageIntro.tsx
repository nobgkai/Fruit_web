export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-10 text-center">
      <p className="mb-3 text-sm font-semibold tracking-widest text-[#b91c1c]">
        {eyebrow}
      </p>
      <h1
        className="text-3xl font-bold text-[#1c1008] md:text-4xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#7f5c48]">
        {description}
      </p>
    </header>
  );
}

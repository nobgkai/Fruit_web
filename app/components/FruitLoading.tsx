export default function FruitLoading({
  compact = false,
  progress,
}: {
  compact?: boolean;
  progress?: number;
}) {
  const completedProgress =
    progress === undefined ? undefined : Math.min(100, Math.max(0, progress));

  return (
    <div
      className={`fruit-loading${compact ? " fruit-loading--compact" : ""}${completedProgress !== undefined ? " fruit-loading--complete" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={
        completedProgress === undefined
          ? "กำลังเตรียมหน้าเว็บไซต์"
          : `โหลดเสร็จแล้ว ${completedProgress}%`
      }
    >
      <div className="fruit-loading__art" aria-hidden="true">
        <div className="fruit-loading__orbit">
          <span className="fruit-loading__fruit fruit-loading__fruit--red" />
          <span className="fruit-loading__fruit fruit-loading__fruit--gold" />
          <span className="fruit-loading__fruit fruit-loading__fruit--green" />
        </div>
        <svg
          className="fruit-loading__basket"
          viewBox="0 0 120 96"
          fill="none"
        >
          <path
            d="M25 42C28 19 42 8 60 8s32 11 35 34"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="m13 40 10 43c1 5 5 8 10 8h54c5 0 9-3 10-8l10-43H13Z"
            fill="#B91C1C"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M25 54h70M29 69h62"
            stroke="#FDF8F0"
            strokeWidth="3"
            strokeLinecap="round"
            opacity=".8"
          />
          <path
            d="m20 43 7 30m73-30-7 30"
            stroke="#FDF8F0"
            strokeWidth="3"
            strokeLinecap="round"
            opacity=".8"
          />
        </svg>
      </div>
      <p className="fruit-loading__brand">BUPHACHAT</p>
      <p className="fruit-loading__message">
        {completedProgress === undefined
          ? "กำลังจัดตะกร้าความสุขให้คุณ"
          : "จัดตะกร้าความสุขเรียบร้อยแล้ว"}
      </p>
      <div
        className="fruit-loading__track"
        role={completedProgress === undefined ? undefined : "progressbar"}
        aria-label={completedProgress === undefined ? undefined : "ความคืบหน้าการโหลด"}
        aria-valuemin={completedProgress === undefined ? undefined : 0}
        aria-valuemax={completedProgress === undefined ? undefined : 100}
        aria-valuenow={completedProgress}
        aria-hidden={completedProgress === undefined ? true : undefined}
      >
        <span
          className={completedProgress === undefined ? undefined : "fruit-loading__track-fill"}
          style={
            completedProgress === undefined
              ? undefined
              : { width: `${completedProgress}%` }
          }
        />
      </div>
      {completedProgress !== undefined && (
        <p className="fruit-loading__percentage">{completedProgress}%</p>
      )}
    </div>
  );
}

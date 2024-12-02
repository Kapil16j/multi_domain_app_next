import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function University() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid place-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className="text-3xl font-bold">Welcome to University</h1>
    </div>
  );
}

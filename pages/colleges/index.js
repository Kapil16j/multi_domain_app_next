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

export default function Colleges() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid place-items-center min-h-screen bg-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">
          Welcome to the Colleges
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Discover a variety of colleges offering diverse courses and programs that cater to every field of interest.
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Explore Programs
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Engineering</h2>
          <p className="mt-4 text-gray-500">
            Build the future with cutting-edge technology and engineering programs.
          </p>
        </div>
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Business</h2>
          <p className="mt-4 text-gray-500">
            Shape the business world with our extensive business administration courses.
          </p>
        </div>
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Arts</h2>
          <p className="mt-4 text-gray-500">
            Unlock your creative potential through our arts and design programs.
          </p>
        </div>
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Science</h2>
          <p className="mt-4 text-gray-500">
            Explore the world of discovery through our scientific research-based courses.
          </p>
        </div>
      </div>
    </div>
  );
}

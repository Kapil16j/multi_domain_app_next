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
    className={`${geistSans.variable} ${geistMono.variable} grid place-items-center min-h-screen bg-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
  >
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">
          Welcome to the University
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          We are committed to offering a dynamic learning environment that encourages creativity, collaboration, and innovation.
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Apply Now
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Academics</h2>
          <p className="mt-4 text-gray-500">
            Explore a wide range of academic programs and specialized courses.
          </p>
        </div>
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Research</h2>
          <p className="mt-4 text-gray-500">
            Join cutting-edge research projects and advance knowledge in your field.
          </p>
        </div>
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Campus Life</h2>
          <p className="mt-4 text-gray-500">
            Experience vibrant student life with clubs, activities, and events.
          </p>
        </div>
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-600">Admissions</h2>
          <p className="mt-4 text-gray-500">
            Learn about our application process and start your journey today.
          </p>
        </div>
      </div>
    </div>
  );
}

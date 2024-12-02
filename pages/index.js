import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              pages/index.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

       
        
        {/* Featured Universities Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-16">
          <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all">
            {/* <Image
              className="w-full h-48 object-cover"
              src="/university1.jpg" // Replace with actual image source
              alt="University 1"
              width={500}
              height={300}
            /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                University of Excellence
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                A top-tier university offering world-class education and innovative research programs.
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all">
            {/* <Image
              className="w-full h-48 object-cover"
              src="/university2.jpg" // Replace with actual image source
              alt="University 2"
              width={500}
              height={300}
            /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Global College of Arts
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                A vibrant institution focused on creativity, arts, and culture, providing a platform for future artists.
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

// pages/index.js
import Image from 'next/image';

export default function University() {
  return (
    <>
      <div>
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>

                  <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>

                  <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex shrink-0 items-center">
                  <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </div>
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">

                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">
                    Reappear Student Admit Card</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Student Result</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Revaluation Result</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Pre-Admission Registration</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Registration</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Active Student Account</a>
                    
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-yellow-400 text-purple-800 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all">Log In</button>
              


               
              </div>
            </div>
          </div>


          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">

              <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
          </div>
        </nav>
        {/* <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white py-6 px-6 sm:px-8 md:px-12 flex items-center justify-between shadow-md"> */}

      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        

        {/* Main Content Section */}
        <section className="py-16 px-6 sm:px-8 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight mb-6">
                Welcome to Chaudhary Devi Lal University, Sirsa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Established in 2000, Chaudhary Devi Lal University in Sirsa was recognized as a full-fledged university in April 2003. The university has been awarded eligibility for Central Assistance under Section 12(B) of the UGC Act and has expanded with several facilities, including hostels and a guest house.
              </p>
              <a href="#" className="inline-block text-purple-600 text-lg font-semibold border-b-2 border-purple-600 hover:text-purple-800 transition-colors">
                Learn More
              </a>
            </div>
            <div className="relative">
              <Image
                src="/images/university.jpg" // Ensure the image is placed correctly in the public folder
                alt="Chaudhary Devi Lal University"
                width={700}
                height={400}
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Particulars Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Important Particulars</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                <span className="text-lg text-gray-700">Registration and Online Payment Process</span>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">View</a>
              </div>
              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                <span className="text-lg text-gray-700">Migration Instructions</span>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">View</a>
              </div>
              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                <span className="text-lg text-gray-700">Fee Structure and Payment Instructions</span>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">View</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg">© 2024 Chaudhary Devi Lal University. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

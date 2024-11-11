'use client'
import Image from 'next/image'
import { Sidebar } from "../sidebar"

export default function Rates() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPath="/admin/rates/" />
      <main className="flex-1 px-4 md:px-4 pt-16 md:pt-2 bg-[#f3f4f6] relative overflow-hidden">
        {/* Centered background image */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-evenly items-center space-y-2 md:space-y-0 space-x-2">
            <Image
                src="/images/logo_elsal.png" // Path relative to the public directory
                alt="Background Logo"
                width={330}
                height={330}
                className="opacity-30"
            />
            <Image
                src="/images/logo.png" // Path relative to the public directory
                alt="Background Logo"
                width={300}
                height={300}
                className="opacity-30"
            />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 overflow-y-auto h-full">
          <h1 className="text-xl font-bold mb-4">Rates</h1>
        </div>
      </main>
    </div>
  )
}
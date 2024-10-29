'use client'
import Image from 'next/image'
import { Sidebar } from "../sidebar"

export default function Employees() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPath="/admin/employees/" />
      <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8 bg-[#f3f4f6] relative overflow-hidden">
        {/* Centered background image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/images/logo.png" // Path relative to the public directory
            alt="Background Logo"
            width={300}
            height={300}
            className="opacity-30"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          <h1 className="text-xl font-bold mb-4">Employees</h1>
        </div>
      </main>
    </div>
  )
}
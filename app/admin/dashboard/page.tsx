'use client'
import {
    Card,
    CardContent
} from "@/components/ui/card"
import Image from 'next/image'
import { Sidebar } from "../sidebar"

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPath="/admin/dashboard/" />
      <main className="flex-1 px-4 md:px-4 pt-16 md:pt-2 bg-[#f3f4f6] relative overflow-auto md:overflow-hidden h-screen">
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
            <h1 className="text-xl font-bold mb-4">Dashboard</h1>
            <Card className="bg-[#16a34a] w-48 h-12 text-white">
                <CardContent className="p-2">
                    <p>Select Branch</p>
                </CardContent>
            </Card>
            <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-24 text-white">
                        <CardContent className="p-4">
                        <p>Total Employees </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-24 text-white">
                        <CardContent className="p-4">
                        <p>Total Consumers</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-24 text-white">
                        <CardContent className="p-4">
                        <p>Total Water Consumed</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-24 text-white">
                        <CardContent className="p-4">
                        <p>Total Payments</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-24 text-white">
                        <CardContent className="p-4">
                        <p>Total Balance</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-24 text-white">
                        <CardContent className="p-4">
                        <p>Total zones</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="flex-none w-full md:w-1/2 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Activity Log Content</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/4 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Online</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/4 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Calendar</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

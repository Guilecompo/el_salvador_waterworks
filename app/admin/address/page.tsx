'use client'
import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import { Sidebar } from "../sidebar"

export default function Address() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPath="/admin/address/" />
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
          <h1 className="text-xl font-bold mb-4">Address</h1>
          <Tabs defaultValue="barangay" className="w-[400px] md:w-full ">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="barangay" className="bg-background">Barangay</TabsTrigger>
              <TabsTrigger value="zone" className="bg-background">Zone</TabsTrigger>
            </TabsList>
            <TabsContent value="barangay">
              <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="flex-none w-full md:w-2/3 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Barangay List Table</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Add Barangay Form</p>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="zone">
              <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="flex-none w-full md:w-2/3 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Zone List Table</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-none w-full md:w-1/3 py-1">
                    <Card className="bg-[#16a34a] h-72 md:h-96 text-white">
                        <CardContent className="p-4">
                            <p>Add Zone Form</p>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
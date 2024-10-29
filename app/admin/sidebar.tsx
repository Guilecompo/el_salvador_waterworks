'use client'

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Banknote, BookOpen, Building2, ChevronDown, FileBarChart, Home, LayoutDashboard, List, LogOut, MapPin, Menu, Target, User, UserCircle, Users, UserSquare } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const sidebarItems = [
  { name: 'Dashboard', href: '/admin/dashboard/', icon: LayoutDashboard },
  { name: 'Employees', href: '/admin/employees/', icon: Users },
  { name: 'Consumers', href: '/admin/consumers/', icon: UserCircle },
  { name: 'Reader Assignment', href: '/admin/reader-assignment/', icon: BookOpen },
  { name: 'Branch', href: '/admin/branch/', icon: Building2 },
  { name: 'Reports', href: '/admin/reports/', icon: FileBarChart },
  {
    name: 'Master List',
    icon: List,
    subItems: [
      { name: 'Barangays', href: '/admin/master/barangays/', icon: MapPin },
      { name: 'Zones', href: '/admin/master/zones/', icon: Target },
      { name: 'Consumer Type', href: '/admin/master/consumer-type/', icon: UserSquare },
      { name: 'Positions', href: '/admin/master/positions/', icon: Users },
      { name: 'Rates', href: '/admin/master/rates/', icon: Banknote },
      { name: 'Property Type', href: '/admin/master/propertytype/', icon: Home },
    ],
  },
]

export function Sidebar({ currentPath }: { currentPath: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const SidebarContent = () => (
    <div className="h-full bg-[#15803c] text-white p-4 flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Waterworks</h1>
      </div>
      <nav className="space-y-2 flex-grow">
        {sidebarItems.map((item) => (
          item.subItems ? (
            <Collapsible key={item.name}>
              <CollapsibleTrigger className="flex items-center w-full p-2 rounded hover:bg-[#16a34a] transition-colors">
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
                <ChevronDown className="ml-auto h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className={cn(
                      "flex items-center text-sm p-2 rounded hover:bg-[#16a34a] transition-colors",
                      currentPath === subItem.href && "bg-[#16a34a]"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <subItem.icon className="mr-2 h-5 w-5" />
                    {subItem.name}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center text-sm p-2 rounded hover:bg-[#16a34a] transition-colors",
                currentPath === item.href && "bg-[#16a34a]"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </Link>
          )
        ))}
      </nav>
      <div className="mt-auto">
        <Separator className="my-4 bg-white/20" />
        <Link
          href="/profile"
          className={cn(
            "flex items-center text-sm p-2 rounded hover:bg-[#16a34a] transition-colors",
            currentPath === '/profile' && "bg-[#16a34a]"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <User className="mr-2 h-5 w-5" />
          Profile
        </Link>
        <Link
          href="/logout"
          className={cn(
            "flex items-center text-sm p-2 rounded hover:bg-[#16a34a] transition-colors",
            currentPath === '/logout' && "bg-[#16a34a]"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-screen">
        <SidebarContent />
      </div>
    </>
  )
}
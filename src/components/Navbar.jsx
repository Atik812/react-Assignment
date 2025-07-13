import React from 'react'
import { Bell, MoreVertical, ChevronRight } from 'lucide-react'
import { CiSearch } from 'react-icons/ci'
const Navbar = () => {
  return (
      <div className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm h-20px w-15px border-gray-300">
          {/* Left: Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 space-x-1">
              <div className="w-[20px] h-[14px] border-[2px] border-[rgb(67,101,74)] rounded-sm flex items-center justify-start">
                  <div className="w-[8px] h-full bg-[rgb(67,101,74)]" />
              </div>
              <span className="text-gray-500">Workspace</span>
              <ChevronRight size={14} />
              <span className="text-gray-500">Folder 2</span>
              <ChevronRight size={14} />
              <span className="text-black font-medium">Spreadsheet 3</span>
              <MoreVertical size={14} className="text-gray-400 ml-1" />
          </div>

          {/* Right: Search + Bell + Profile */}
          <div className="flex items-center space-x-4">
              {/* Search box */}
              <input
                  type="text"
                  placeholder= "⌕ Search within sheet"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />

              {/* Notification icon */}
              <div className="relative">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute -top-1 -right-2 bg-green-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                      2
                  </span>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-2">
                  <img
                      src="https://i.pravatar.cc/32?img=5"
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                  />
                  <div className="leading-tight">
                      <p className="text-sm font-medium text-gray-800">John Doe</p>
                      <p className="text-xs text-gray-400">john.doe...</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar
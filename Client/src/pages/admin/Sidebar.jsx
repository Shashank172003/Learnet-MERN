import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 bg-[#f0f0f0] dark:bg-[#0a0a0a] p-5 pt-20">
        <div className="space-y-4">
          <Link
            to="dashboard"
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
          >
            <ChartNoAxesColumn size={22} />
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </Link>
          <Link
            to="course"
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
          >
            <SquareLibrary size={22} />
            <h1 className="text-lg font-semibold">Courses</h1>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pt-20"> {/* <-- Add pt-20 to push content below navbar */}
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { School, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "@/DarkMode";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth); // ✅ Corrected selector usage
  const [logoutUser, { data, isSuccess, isError, error }] =
    useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser(); // Triggers API call
  };

  // ✅ Handle logout side effects here
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Logout successful!");
      navigate("/login");
    }
    if (isError) {
      toast.error(error?.data?.message || "Logout failed.");
    }
  }, [isSuccess, isError, data, error, navigate]);

  return (
    <div className="h-16 dark:bg-[#0a0a0a] bg-white border-b dark:border-gray-800 border-gray-200 fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <School size={30} />
        <Link to="/">
        <h1 className="hidden md:block font-extrabold text-2xl">LEARNET</h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="User Profile"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 mt-2 bg-white shadow-lg rounded-md border dark:bg-gray-900">
              <Link to="/">
              <DropdownMenuLabel className="px-4 py-2 text-gray-700 dark:text-gray-200">
                My Account
              </DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/my-learning">My Learning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/profile">Edit Profile</Link>
              </DropdownMenuItem>

              {user.role === "instructor" && (
                <>
                  {" "}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logoutHandler}
                className="text-red-600 cursor-pointer"
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline">Signup</Button>
            </Link>
          </div>
        )}

        {/* Dark Mode Toggle */}
        <DarkMode className="ml-2" />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <MobileNavbar logoutHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default Navbar;

// ✅ Mobile Navbar Component
const MobileNavbar = ({ logoutHandler }) => {
  const role = "instructor"; // Replace with actual role if needed

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="flex items-center justify-between">
          <SheetTitle>LEARNET</SheetTitle>
          <div className="py-4">
            <DarkMode />
          </div>
        </SheetHeader>

        <nav className="flex flex-col gap-2 px-4 py-2">
          <Link to="/my-learning">My Learning</Link>
          <Link to="/profile">Edit Profile</Link>
          <button onClick={logoutHandler} className="text-red-600 text-left">
            Log out
          </button>
        </nav>

        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" variant="secondary">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

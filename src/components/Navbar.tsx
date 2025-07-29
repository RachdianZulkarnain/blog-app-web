"use client";

import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();

  return (
    <nav className="container mx-auto p-4 flex justify-between items-center">
      <Link href="/">
        <p className={`text-2xl font-bold ${lato.className}`}>BlogGo .</p>
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/write">Write</Link>
            <Button variant="destructive" onClick={clearAuth}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/sign-in">Sign in</Link>
            <Link href="/sign-up">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

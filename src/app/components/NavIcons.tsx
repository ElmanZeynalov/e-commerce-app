"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CardModal from "@/app/components/CardModal";

const NavIcons = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsOpenProfile((prev) => !prev);
  };

  return (
    <div className="flex items-center xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />

      {isOpenProfile && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="">logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
      />

      <div className="cursor-pointer">
        <Image
          src="/cart.png"
          alt="profile"
          width={22}
          height={22}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-2 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>

      {isCartOpen && <CardModal />}
    </div>
  );
};

export default NavIcons;

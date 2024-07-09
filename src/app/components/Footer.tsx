import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 mt-24 text-sm">
      {/*{top}*/}
      <div className="flex justify-between flex-col md:flex-row  gap-16">
        {/*{left}*/}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>

          <p>Az1096 Azerbaycan Baki Lorem ipsum dolor sit amet.</p>
          <span className="font-semibold">elman.zeynalov@gmail.com</span>
          <span className="font-semibold">+994-55-555-55-55</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="x" width={16} height={16} />
            <Image src="/instagram.png" alt="x" width={16} height={16} />
            <Image src="/youtube.png" alt="x" width={16} height={16} />
            <Image src="/pinterest.png" alt="x" width={16} height={16} />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/*{center}*/}
        <div className=" hidden lg:flex justify-between w-1/3">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className=" hidden lg:flex justify-between w-1/3">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All products</Link>
            </div>
          </div>
        </div>

        <div className=" hidden lg:flex justify-between w-1/3">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Costumer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/*{right}*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="text-lg font-medium">SUBSCRIBE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            quam?
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email adress"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-pink-400 text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image
              src="/discover.png"
              alt={"discover"}
              width={40}
              height={20}
            />
            <Image src="/skrill.png" alt={"skrill"} width={40} height={20} />
            <Image src="/paypal.png" alt={"paypall"} width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt={"mastercard"}
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt={"vise"} width={40} height={20} />
          </div>
        </div>
      </div>
      {/*{buttom}*/}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-24">
        <div className="">© 2024 Lama Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span>United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">USD $</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

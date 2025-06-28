import React, { useState } from "react";
import {
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="font-sans text-[#1c2434] overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-400">
              <img src="data:image/png;base64,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" alt="" />
            </div>
            <span className="text-lg font-semibold">
              Yes<span className="text-[#f59e0b]">Go</span>Bus
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {["Bus", "Tours & Travel", "Contact Us"].map((item) => (
              <a key={item} href="#" className="hover:text-[#f59e0b]">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <button className="flex items-center gap-1 text-sm hover:text-[#f59e0b]">
              <QuestionMarkCircleIcon className="h-5 w-5" /> Help
            </button>
            <button className="flex items-center gap-1 text-sm hover:text-[#f59e0b]">
              <UserCircleIcon className="h-5 w-5" /> Profile
            </button>
            <button className="rounded-md bg-[#f59e0b] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#d97706]">
              Logout
            </button>
          </div>

          <button
            onClick={() => setOpenNav(!openNav)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {openNav && (
          <div className="lg:hidden bg-white shadow-md">
            <nav className="flex flex-col gap-4 px-6 py-4">
              {["Bus", "Tours & Travel", "Contact Us"].map((item) => (
                <a key={item} href="#" className="py-1 text-gray-700 hover:text-[#f59e0b]" onClick={() => setOpenNav(false)}>
                  {item}
                </a>
              ))}
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#f59e0b]">
                <QuestionMarkCircleIcon className="h-5 w-5" /> Help
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#f59e0b]">
                <UserCircleIcon className="h-5 w-5" /> Profile
              </button>
              <button className="mt-2 self-start rounded-md bg-[#f59e0b] px-4 py-1.5 text-white hover:bg-[#d97706]">
                Logout
              </button>
            </nav>
          </div>
        )}
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Book Bus Tickets Online<br className="hidden md:block" /> With <span className="text-[#f59e0b]">YesGoBus</span>
            </h1>
            <p className="mt-5 text-gray-600">
              India’s largest online bus ticketing platform, trusted by over 6 million Indians.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-md bg-[#0d6efd] px-6 py-3 text-sm font-medium text-white hover:bg-[#0a58ca]">
                Bus App
              </button>
              <button className="rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-medium text-white hover:bg-[#d97706]">
                Travel App
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl lg:h-80">
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=60"
                alt="Explore India"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold">Explore India by Bus</h3>
                <p className="mt-1 text-sm text-gray-300">Discover amazing destinations at affordable prices.</p>
                <button className="mt-4 rounded-md bg-[#f59e0b] px-4 py-2 text-sm font-medium hover:bg-[#d97706]">
                  See Popular Routes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-1 px-4 sm:px-6 m">
        <div className="mx-auto w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <h2 className="mb-6 text-xl font-semibold">Book Your Bus Tickets</h2>
          <form className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Source</label>
              <input type="text" placeholder="Enter source city" className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[#f59e0b]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Destination</label>
              <input type="text" placeholder="Enter destination city" className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[#f59e0b]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Date</label>
              <div className="relative flex items-center">
                <input type="date" className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 outline-none focus:border-[#f59e0b]" />
                <CalendarDaysIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-md bg-[#f59e0b] px-6 py-2.5 font-medium text-white hover:bg-[#d97706]">
              Search
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-24 bg-[#0f172a] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold">YesGoBus</h4>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-300">
              Your trusted partner for online bus ticket booking. Enjoy a seamless and comfortable journey with us.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {["About Us", "Contact Us", "Terms & Conditions", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-4 flex gap-4">
              <a href="#" className="hover:text-white">
                <FaFacebook className="h-6 w-6 text-gray-300" />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter className="h-6 w-6 text-gray-300" />
              </a>
              <a href="#" className="hover:text-white">
                <FaGithub className="h-6 w-6 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-400">
          © 2025 YesGoBus. All rights reserved. Designed with <span className="text-pink-500">♥</span>
        </p>
      </footer>
    </div>
  );
}

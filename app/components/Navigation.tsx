"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./Logo";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-indigo-600" href="/">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      className={`${
                        pathname === item.href
                          ? "text-gray-900 font-medium"
                          : "text-gray-500 transition hover:text-gray-500/75"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const leftNavItems = [
  { name: 'MENU', href: '/menu' },
  { name: 'SIGNATURE', href: '/about' },
  { name: 'CONCEPT', href: '/care' },
  { name: 'PROJECTS', href: '/projects' },
];

const rightNavItems = [
  { name: 'GALLERY', href: '/search' },
  { name: 'ACCOUNT', href: '/account' },
  { name: 'CART (0)', href: '/cart' },
];

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[1.8rem] border border-white/65 px-6 py-5 text-white">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <nav className="hidden lg:flex items-center gap-8">
                {leftNavItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                        active ? 'text-white' : 'text-white/92 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/"
                className="justify-self-center text-[18px] sm:text-[22px] font-semibold uppercase tracking-[0.18em]"
              >
                NORI CORE
              </Link>

              <nav className="hidden lg:flex items-center justify-end gap-8">
                {rightNavItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                        active ? 'text-white' : 'text-white/92 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden justify-self-end inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="mt-4 border-t border-white/20 pt-4 lg:hidden">
                <div className="grid gap-2">
                  {[...leftNavItems, ...rightNavItems].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-xl px-3 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white/90 hover:bg-white/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
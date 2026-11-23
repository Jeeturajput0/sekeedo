"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { navItems } from "@/lib/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-line shadow-[0_8px_30px_rgba(22,27,25,0.06)]" : "border-transparent",
      )}
    >
      <nav className="container-page" aria-label="Primary navigation">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-[60px]" : "h-[68px]",
          )}
        >
          <Link href="/" aria-label="Home" className="flex items-center gap-2 bg-charcoal px-1">
            <Image src="/images/logo/logo.png" alt="SEKEEDO Safety Footwear" width={2048} height={576} priority className="h-9 w-auto object-contain" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors",
                        active ? "text-brand" : "text-charcoal/75 hover:text-brand",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          openDropdown === item.label && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-0 top-full w-[290px] border border-line bg-white p-2 shadow-[0_24px_50px_rgba(22,27,25,0.12)]"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group block px-3 py-2.5 transition-colors hover:bg-offwhite"
                            >
                              <span className="block text-[13px] font-semibold text-charcoal group-hover:text-brand">
                                {child.label}
                              </span>
                              {child.description ? (
                                <span className="mt-0.5 block text-[11px] text-muted">
                                  {child.description}
                                </span>
                              ) : null}
                            </Link>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-[13px] font-medium transition-colors",
                    active ? "text-brand" : "text-charcoal/75 hover:text-brand",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-3 -bottom-[2px] h-px bg-brand" aria-hidden="true" />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/products#product-search" aria-label="Search products" className="hidden h-10 items-center gap-2 px-2 text-sm text-charcoal/70 transition-colors hover:text-brand md:inline-flex">
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only xl:not-sr-only">Search</span>
            </Link>
            <Link href="/contact?enquiry=quote" className="btn-primary hidden sm:inline-flex">
              Request a Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center border border-line text-charcoal transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-page max-h-[calc(100vh-104px)] overflow-y-auto py-4">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <div key={item.label} className="border-b border-line last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={cn(
                          "flex-1 py-3.5 text-sm font-semibold",
                          active ? "text-brand" : "text-charcoal hover:text-brand",
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.children ? (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={openDropdown === `mobile-${item.label}`}
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === `mobile-${item.label}` ? null : `mobile-${item.label}`,
                            )
                          }
                          className="grid h-9 w-9 place-items-center text-muted"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              openDropdown === `mobile-${item.label}` && "rotate-180",
                            )}
                          />
                        </button>
                      ) : null}
                    </div>
                    {item.children && openDropdown === `mobile-${item.label}` ? (
                      <div className="space-y-1 pb-3 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block border-l border-line py-2 pl-4 text-[13px] text-muted hover:border-brand hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <Link href="/products#product-search" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand">
                <Search className="h-4 w-4" aria-hidden="true" />Search products
              </Link>
              <Link href="/contact?enquiry=quote" className="btn-primary mt-5 w-full">
                Request a Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

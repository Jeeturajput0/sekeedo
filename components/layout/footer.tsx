import Link from "next/link";
import {
  ArrowUp,
  Camera,
  Globe,
  Play,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { footerGroups, legalLinks, siteConfig } from "@/lib/data/site";

const socialIcons = [Globe, Camera, Play];

// Static year keeps the layout compatible with prerendering / Cache Components.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#111111] text-white">
      <div className="container-page py-8 lg:py-9">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_2fr] lg:gap-12">
          <div>
            <Logo showTagline />
            <p className="mt-3 max-w-sm text-[11px] leading-5 text-white/65">
              SEKEEDO supplies industrial safety footwear to businesses, contractors, factories and
              distributors. We focus on reliable products, practical guidance and wholesale support.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {siteConfig.socials.map((social, index) => {
                const Icon = socialIcons[index] ?? Globe;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-8 w-8 place-items-center border border-white/25 text-white/70 transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-[11px] font-semibold text-white">
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-1.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[11px] text-white/65 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-white/60">
            © {COPYRIGHT_YEAR} SEKEEDO. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] text-white/60 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/faq"
              className="text-[10px] text-white/60 transition-colors hover:text-brand"
            >
              FAQ
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-[10px] text-white/60 transition-colors hover:text-brand"
            >
              Back to top
              <ArrowUp className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

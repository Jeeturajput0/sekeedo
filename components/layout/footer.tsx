import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Camera,
  Globe,
  Mail,
  MapPin,
  Phone,
  Play,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { footerGroups, legalLinks, siteConfig } from "@/lib/data/site";

const socialIcons = [Globe, Camera, Play];

// Static year keeps the layout compatible with prerendering / Cache Components.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-line bg-white text-charcoal">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr] lg:gap-16">
          <div>
            <Logo showTagline />
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              SEKEEDO supplies industrial safety footwear to businesses, contractors, factories and
              distributors. We focus on reliable products, practical guidance and wholesale support.
            </p>
            <div className="mt-7 space-y-3 text-sm text-charcoal/70">
              <a
                href={`mailto:${siteConfig.contact.wholesaleEmail}`}
                className="flex items-center gap-3 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.wholesaleEmail}
              </a>
              <a
                href={`mailto:${siteConfig.contact.distributorEmail}`}
                className="flex items-center gap-3 transition-colors hover:text-brand"
              >
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.distributorEmail}
              </a>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.phone}
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {siteConfig.contact.address}
              </p>
            </div>
            <div className="mt-7 flex items-center gap-2">
              {siteConfig.socials.map((social, index) => {
                const Icon = socialIcons[index] ?? Globe;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center border border-line text-muted transition-colors hover:border-brand hover:text-brand"
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-brand"
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

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {COPYRIGHT_YEAR} SEKEEDO. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/faq"
              className="text-xs text-muted transition-colors hover:text-brand"
            >
              FAQ
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-brand"
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

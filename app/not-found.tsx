import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-paper py-28">
      <div className="container-page max-w-2xl">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-charcoal">
          This page is off the map.
        </h1>
        <p className="mt-6 text-base leading-8 text-muted">
          The page you are looking for may have moved. Explore the product catalogue or return to
          the homepage to continue.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/products" className="btn-outline">
            Explore products
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

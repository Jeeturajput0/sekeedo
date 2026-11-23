import Link from "next/link";
import { Boxes, Handshake, Phone, ArrowUpRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-white text-charcoal">
      <div className="container-page flex h-[29px] items-center justify-between gap-2 text-[9px] font-semibold text-charcoal sm:text-[10px]">
        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-1.5 sm:inline-flex"><Boxes className="h-3 w-3 text-brand" /> Wholesale & Bulk Orders</span>
          <span className="hidden h-3 w-px bg-line md:block" />
          <Link href="/become-a-distributor" className="hidden items-center gap-1.5 sm:inline-flex"><Handshake className="h-3 w-3 text-brand" /> Distributor Enquiries</Link>
        </div>
        <Link href="/contact?enquiry=bulk" className="inline-flex items-center gap-1.5 text-brand"> <Phone className="h-3 w-3" /> Business Enquiries <ArrowUpRight className="h-3 w-3" aria-hidden="true" /></Link>
      </div>
    </div>
  );
}

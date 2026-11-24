import Image from "next/image";
import { cn } from "@/lib/utils";

type ShoeSpriteProps = { position: number; className?: string };

export function ShoeSprite({ position, className }: ShoeSpriteProps) {
  const cell = ((position % 8) + 8) % 8;
  const column = cell % 4;
  const row = Math.floor(cell / 4);

  return (
    <div className={cn("overflow-hidden bg-white", className)} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 aspect-square h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white">
        <Image
          src="/images/clawz-shoes-sheet.png"
          alt=""
          width={1774}
          height={886}
          sizes="100vw"
          className="absolute max-w-none"
          style={{ width: "416%", height: "208%", left: `${column * -104}%`, top: `${row * -104}%` }}
        />
      </div>
    </div>
  );
}

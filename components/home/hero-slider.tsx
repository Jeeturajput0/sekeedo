

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const shoes = [
  {
    src: "/images/footerup/fshoes1.png",
    alt: "SEKEEDO industrial safety shoe",
  },
  {
    src: "/images/footerup/fshoes2.png",
    alt: "SEKEEDO protective safety footwear",
  },
  {
    src: "/images/footerup/fshoes3.png",
    alt: "SEKEEDO premium industrial shoe",
  },
];

type Phase = "enter" | "hold" | "exit";

const shoeVariants = {
  hidden: {
    y: "-150%",
    x: 0,
    opacity: 0,
    scale: 0.8,
  },
  enter: {
    y: "0%",
    x: 0,
    opacity: 1,
    scale: 1,
  },
  hold: {
    y: "0%",
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    y: "0%",
    x: "150%",
    opacity: 0,
    scale: 0.92,
  },
};

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("enter");
  const [showDust, setShowDust] = useState(false);

  const reduceMotion = useReducedMotion();

  // Shoe animation sequence
  useEffect(() => {
    if (reduceMotion) return;

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "enter") {
      timer = setTimeout(() => {
        setPhase("hold");
      }, 700);
    } else if (phase === "hold") {
      timer = setTimeout(() => {
        setPhase("exit");
      }, 1600);
    } else {
      timer = setTimeout(() => {
        setShowDust(false);
        setActiveIndex((current) => (current + 1) % shoes.length);
        setPhase("enter");
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [phase, reduceMotion]);

  // Hide old dust when a new shoe starts
  useEffect(() => {
    if (phase === "enter") {
      setShowDust(false);
    }
  }, [phase, activeIndex]);

  const currentShoe = shoes[activeIndex];

  return (
    <section
      className="relative isolate overflow-hidden bg-[#111] bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-9"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(10,10,10,0.28) 0%,
            rgba(10,10,10,0.12) 50%,
            rgba(10,10,10,0.08) 100%
          ),
          url('/images/footer-quotation-banner.png')
        `,
      }}
    >
      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      {/* Orange background glow */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#F4512C]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4512C]/30 bg-[#F4512C]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#FF704D] backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#F4512C]" />
            GET A QUOTATION
          </span>

          <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Looking for Safety Footwear in{" "}
            <span className="text-[#F4512C]">Bulk?</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
            Get reliable industrial safety footwear for your workforce.
            Connect with our team for bulk orders, product specifications,
            and business enquiries.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact?enquiry=bulk"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#F4512C] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#F4512C]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6A00] hover:shadow-xl hover:shadow-[#F4512C]/30"
            >
              Request Bulk Quotation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/30 bg-black/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#F4512C] hover:bg-white/10"
            >
              <Phone
                size={17}
                className="text-[#F4512C] transition-transform group-hover:rotate-12"
              />
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT SHOE ANIMATION */}
        <div className="relative z-10 mx-auto flex w-full max-w-[700px] items-center justify-center">
          <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px] lg:h-[460px]">

            {/* Background orange glow */}
            <div className="pointer-events-none absolute left-1/2 top-[55%] h-[250px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4512C]/15 blur-[90px]" />

            {/* Ground shadow */}
            <motion.div
              animate={{
                opacity: phase === "hold" ? 0.75 : 0,
                scaleX: phase === "hold" ? 1 : 0.5,
              }}
              transition={{ duration: 0.35 }}
              className="pointer-events-none absolute bottom-[12%] left-1/2 z-10 h-10 w-[75%] -translate-x-1/2 rounded-[100%] bg-black/90 blur-xl"
            />

            {/* Landing glow */}
            <motion.div
              animate={{
                opacity: phase === "hold" ? [0, 0.8, 0.45] : 0,
                scale: phase === "hold" ? [0.6, 1.3, 1] : 0.6,
              }}
              transition={{ duration: 0.7 }}
              className="pointer-events-none absolute bottom-[12%] left-1/2 z-10 h-24 w-[75%] -translate-x-1/2 rounded-full bg-[#F4512C]/30 blur-3xl"
            />

            {/* =================================
                NATURAL SCATTERED DUST
                All particles behind the shoe
            ================================== */}
            {!reduceMotion && showDust && (
              <div
                key={`natural-dust-${activeIndex}`}
                className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
              >
                {/* 180 scattered dust particles */}
                {Array.from({ length: 180 }).map((_, index) => {
                  const angle = (index / 180) * Math.PI * 2;
                  const distance = 45 + ((index * 37) % 180);

                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance * 0.55;

                  const size = 2 + (index % 5) * 1.4;

                  return (
                    <motion.span
                      key={`particle-${index}`}
                      initial={{
                        opacity: 0,
                        x: 0,
                        y: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: [0, 0.9, 0.65, 0],
                        x: x + (index % 2 === 0 ? -25 : 25),
                        y: y - (index % 4) * 12,
                        scale: [0, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2 + (index % 6) * 0.18,
                        delay: (index % 20) * 0.025,
                        ease: "easeOut",
                      }}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "58%",
                        width: size,
                        height: size,
                      }}
                      className="rounded-full bg-[#DCC0A8] shadow-[0_0_8px_rgba(220,192,168,0.55)]"
                    />
                  );
                })}

                {/* 24 soft natural dust wisps */}
                {Array.from({ length: 24 }).map((_, index) => (
                  <motion.span
                    key={`wisp-${index}`}
                    initial={{
                      opacity: 0,
                      scale: 0.3,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: [0, 0.28, 0.16, 0],
                      scale: [0.3, 1, 1.4],
                      x:
                        (index % 2 === 0 ? -1 : 1) *
                        (35 + index * 5),
                      y: -15 - (index % 6) * 12,
                    }}
                    transition={{
                      duration: 1.5 + (index % 4) * 0.2,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                    style={{
                      position: "absolute",
                      left: `${35 + (index % 7) * 5}%`,
                      top: `${48 + (index % 5) * 5}%`,
                      width: 18 + (index % 4) * 9,
                      height: 8 + (index % 3) * 5,
                    }}
                    className="rounded-full bg-[#D6B69D]/35 blur-md"
                  />
                ))}
              </div>
            )}

            {/* =================================
                SHOE IMAGE
            ================================== */}
            <motion.div
              key={`shoe-${activeIndex}`}
              variants={shoeVariants}
              initial={reduceMotion ? "hold" : "hidden"}
              animate={reduceMotion ? "hold" : phase}
              onAnimationComplete={(definition) => {
                if (definition === "enter" && !reduceMotion) {
                  setShowDust(true);
                }
              }}
              transition={
                phase === "enter"
                  ? {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }
                  : phase === "exit"
                    ? {
                        duration: 0.5,
                        ease: [0.7, 0, 0.84, 0],
                      }
                    : {
                        duration: 0.3,
                        ease: "easeOut",
                      }
              }
              className="absolute inset-0 z-30 flex items-center justify-center"
            >
              {/* Shoe floating movement */}
              <motion.div
                animate={
                  phase === "hold" && !reduceMotion
                    ? {
                        y: [0, -5, 0],
                        rotate: [0, -0.5, 0],
                      }
                    : {
                        y: 0,
                        rotate: 0,
                      }
                }
                transition={{
                  duration: 1.4,
                  repeat:
                    phase === "hold" && !reduceMotion ? Infinity : 0,
                  ease: "easeInOut",
                }}
                className="relative h-[250px] w-[370px] sm:h-[300px] sm:w-[470px] lg:h-[370px] lg:w-[570px]"
              >
                <Image
                  src={currentShoe.src}
                  alt={currentShoe.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 370px, (max-width: 1024px) 470px, 570px"
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

 
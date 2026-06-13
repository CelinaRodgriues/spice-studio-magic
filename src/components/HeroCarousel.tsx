import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import dehyugLogo from "@/assets/dehyug-logo.png";
import pulavProduct from "@/assets/pulav-masala.png.asset.json";
import rajmaProduct from "@/assets/rajma-masala.png.asset.json";
import packTurmeric from "@/assets/pack-turmeric.jpg";
import packGaram from "@/assets/pack-garam.jpg";
import packFlakes from "@/assets/pack-flakes.jpg";

const heroProducts = [
  {
    name: "Turmeric Powder",
    image: packTurmeric,
    angle: "-rotate-[10deg]",
    offset: "md:translate-y-10",
    shadow: "0 18px 40px rgba(0,0,0,0.18)",
  },
  {
    name: "Pulav Masala",
    image: pulavProduct.url,
    angle: "-rotate-[4deg]",
    offset: "md:translate-y-4",
    shadow: "0 24px 56px rgba(0,0,0,0.22)",
  },
  {
    name: "Rajma Masala",
    image: rajmaProduct.url,
    angle: "rotate-[1deg]",
    offset: "md:-translate-y-2",
    shadow: "0 30px 60px rgba(0,0,0,0.24)",
  },
  {
    name: "Garam Masala",
    image: packGaram,
    angle: "rotate-[6deg]",
    offset: "md:translate-y-6",
    shadow: "0 20px 46px rgba(0,0,0,0.18)",
  },
  {
    name: "Chilli Flakes",
    image: packFlakes,
    angle: "rotate-[11deg]",
    offset: "md:translate-y-12",
    shadow: "0 18px 40px rgba(0,0,0,0.18)",
  },
] as const;

export function HeroCarousel() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #22b8c9 0%, #1aa9bc 54%, #b8e6ea 54.5%, #9ed8de 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55) 0, transparent 34%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.3) 0, transparent 28%), radial-gradient(circle at 50% 65%, rgba(255,255,255,0.18) 0, transparent 30%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-[44%] h-px bg-white/28" aria-hidden="true" />

      <div className="relative z-10 container-luxury flex min-h-[calc(100vh-6rem)] flex-col items-center justify-between pb-8 text-center md:pb-12">
        <div className="pt-4 md:pt-6">
          <motion.img
            src={dehyugLogo}
            alt="Dehyug Masala"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto h-22 w-auto max-w-[260px] object-contain sm:max-w-[320px] md:max-w-[380px]"
          />
        </div>

        <div className="mx-auto max-w-3xl px-2 pt-6 md:pt-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.26em] text-white/90 md:text-[11px]"
          >
            Since 1960 • Premium Indian Spice Craft
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-6xl"
          >
            Direct-sourced masalas and spices, crafted for unforgettable Indian kitchens.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/88 md:mt-5 md:text-base"
          >
            Inspired by your reference, this hero puts the Dehyug identity front and center with a
            bold product lineup and clean FMCG presence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-7"
          >
            <Link
              to="/products"
              className="inline-flex min-w-[152px] items-center justify-center bg-charcoal px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-clay"
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-w-[152px] items-center justify-center border border-white/55 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
            >
              Make Inquiry
            </Link>
          </motion.div>
        </div>

        <div className="relative mt-10 flex w-full items-end justify-center gap-2 overflow-visible px-1 pb-2 sm:gap-3 md:mt-12 md:gap-4 md:px-0">
          {heroProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex-shrink-0 ${product.angle} ${product.offset}`}
            >
              <div className="absolute inset-x-5 bottom-2 h-6 rounded-full bg-black/18 blur-2xl" />
              <img
                src={product.image}
                alt={product.name}
                loading={index > 1 ? "lazy" : "eager"}
                className="relative h-[120px] w-[80px] rounded-[10px] object-cover object-center sm:h-[160px] sm:w-[108px] md:h-[240px] md:w-[152px] md:rounded-[14px]"
                style={{ boxShadow: product.shadow }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import dehyugLogo from "@/assets/dehyug-logo.png";
import pulavProduct from "@/assets/pulav-masala.png.asset.json";
import rajmaProduct from "@/assets/rajma-masala.png.asset.json";
import teaProduct from "@/assets/tea-masala.png.asset.json";
import sambharProduct from "@/assets/sambhar-masala.png.asset.json";
import chilliProduct from "@/assets/reshampatti-chilli-powder.png.asset.json";

const marqueeProducts = [
  { name: "Pulav Masala", image: pulavProduct.url, angle: "rotate-[-10deg]", tone: "bg-[#f5efe7]" },
  { name: "Rajma Masala", image: rajmaProduct.url, angle: "rotate-[-4deg]", tone: "bg-[#efe7db]" },
  { name: "Tea Masala", image: teaProduct.url, angle: "rotate-[2deg]", tone: "bg-[#f0e7dc]" },
  {
    name: "Sambhar Masala",
    image: sambharProduct.url,
    angle: "rotate-[8deg]",
    tone: "bg-[#eee4d4]",
  },
  {
    name: "Chilli Powder",
    image: chilliProduct.url,
    angle: "rotate-[12deg]",
    tone: "bg-[#efe7db]",
  },
  { name: "Pulav Masala", image: pulavProduct.url, angle: "rotate-[-10deg]", tone: "bg-[#f5efe7]" },
  { name: "Rajma Masala", image: rajmaProduct.url, angle: "rotate-[-4deg]", tone: "bg-[#efe7db]" },
  { name: "Tea Masala", image: teaProduct.url, angle: "rotate-[2deg]", tone: "bg-[#f0e7dc]" },
  {
    name: "Sambhar Masala",
    image: sambharProduct.url,
    angle: "rotate-[8deg]",
    tone: "bg-[#eee4d4]",
  },
  {
    name: "Chilli Powder",
    image: chilliProduct.url,
    angle: "rotate-[12deg]",
    tone: "bg-[#efe7db]",
  },
] as const;

export function HeroCarousel() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0d3d2d] pt-24 text-cream md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#07291d] via-[#0b3325]/90 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[120rem] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.img
          src={dehyugLogo}
          alt="Dehyug Masala"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 h-auto w-full max-w-[160px] object-contain sm:max-w-[190px] md:max-w-[230px]"
        />

        <div className="mx-auto mt-6 max-w-3xl md:mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl"
          >
            Discover the premium harmony of <br className="hidden md:block" /> Dehyug Masala.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base"
          >
            A refined hero inspired by your reference, with product packs flowing continuously from
            right to left.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-cream/20 bg-cream/8 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-colors hover:bg-cream/16"
            >
              Shop All →
            </Link>
          </motion.div>
        </div>

        <div className="relative mt-auto w-[120vw] max-w-none overflow-hidden pb-8 pt-10 md:pb-10 md:pt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#0d3d2d] via-[#0d3d2d]/90 to-transparent md:w-44" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#0d3d2d] via-[#0d3d2d]/90 to-transparent md:w-44" />

          <motion.div
            className="flex w-max items-end gap-5 md:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {marqueeProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className={`flex-shrink-0 ${product.angle} ${index % 2 === 0 ? "translate-y-0" : "translate-y-5 md:translate-y-7"}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[24px] border border-white/10 ${product.tone} p-4 shadow-[0_26px_70px_rgba(0,0,0,0.35)] md:p-5`}
                >
                  <div className="absolute inset-x-4 bottom-2 h-5 rounded-full bg-black/20 blur-2xl" />
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="relative h-[220px] w-[150px] object-contain sm:h-[250px] sm:w-[170px] md:h-[320px] md:w-[210px]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

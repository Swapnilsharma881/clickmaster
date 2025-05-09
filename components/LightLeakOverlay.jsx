import { motion } from "framer-motion";

export default function LightLeakOverlay({ isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isActive ? { opacity: 1, scale: 50 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-black text-4xl font-bold"
        style={{
          maskImage: "url('/publi/light.jpg')", // Path to your light image (sun flare or light leak)
          WebkitMaskImage: "url('/publi/light.jpg')", // For Safari support
          maskSize: "cover",
          WebkitMaskSize: "cover", // For Safari support
          maskPosition: "center",
          WebkitMaskPosition: "center", // For Safari support
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat", // For Safari support
        }}
      >
        hello
      </motion.div>
    </motion.div>
  );
}

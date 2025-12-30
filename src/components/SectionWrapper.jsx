// src/components/SectionWrapper.jsx
import { motion } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    <motion.div
      style={{
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",        // <-- add this
}}

      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

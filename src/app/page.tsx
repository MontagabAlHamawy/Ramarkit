'use client'

import { motion } from "framer-motion"


export default function Home() {

  return (
    <div className="flex justify-center items-center h-screen w-full">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center mb-8 w-full"
      >
        <h1 className="text-5xl md:text-6xl font-meow-script font-extrabold bg-clip-text text-primary tracking-widest">
          Ra<span className="text-main">M</span>arkit
        </h1>
        <p className="text-muted-foreground mt-2 text-sm tracking-wide uppercase md:w-[80%] lg:w-[50%] italic font-roboto-mono text-center">
          Ramarkit is a revolutionary accounting system that makes a big difference in managing your store{"'"}s finances.
        </p>
      </motion.div>


    </div>
  );
}

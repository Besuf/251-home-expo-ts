import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactChild;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-screen flex-col relative text-white "
    >
      <div className="flex-grow">
        <header>
          <Header />
        </header>
        <main className="z-10">{props.children}</main>
      </div>

      <footer className="z-20 bg-black">
        <Footer />
      </footer>
    </motion.div>
  );
};

export default Layout;

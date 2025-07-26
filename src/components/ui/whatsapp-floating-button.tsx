import { motion } from "framer-motion";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { phoneLinks } from "@/constant/content";

export const WhatsAppFloatingButton = () => {
  const IMAGES = {
    WHATSAPP_ICON: "images/whatsapp-icon.svg",
  };

  return (
    <div className="rounded-full p-1 shadow-lg bg-accent-background border-primary-background fixed bottom-5 right-5 z-50">
      <motion.div
        className="rounded-full"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(255, 107, 53, 0.4)",
            "0 0 0 20px rgba(255, 107, 53, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Link href={phoneLinks} target="_blank">
          <Button className=" rounded-full md:w-20 md:h-20 w-16 h-16 p-3 shadow-lg transition-all duration-300 bg-transparent hover:bg-white/10 text-inverse-text">
            {/* <MessageCircle className="w-7 h-7" /> */}
            <Image
              src={IMAGES.WHATSAPP_ICON}
              alt={"Whatsapp Icon"}
              width={400}
              height={400}
            />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

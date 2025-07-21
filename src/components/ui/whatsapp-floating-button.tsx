import { motion } from "framer-motion";
import { Button } from "./button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export const WhatsAppFloatingButton = () => {
  const IMAGES = {
    WHATSAPP_ICON: "images/whatsapp-icon.svg",
  };
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 rounded-full"
      animate={{
        y: [-10, 10, -10],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: ["easeInOut"],
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="rounded-full p-1 shadow-lg bg-accent-background border-primary-background ">
        <motion.div
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
          <Button className=" rounded-full w-20 h-20 shadow-lg transition-all duration-300 bg-transparent text-inverse-text">
            {/* <MessageCircle className="w-7 h-7" /> */}
            <Image
              src={IMAGES.WHATSAPP_ICON}
              alt={"Whatsapp Icon"}
              width={400}
              height={400}
            />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

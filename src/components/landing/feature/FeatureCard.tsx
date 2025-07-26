import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/constant/style.constant";
import { FeatureItemInterface } from "@/constant/type";
import { motion } from "framer-motion";

interface FeatureCardProps extends FeatureItemInterface {
  index: number;
}

export const FeatureCard = ({
  title,
  description,
  index,
  icon,
}: FeatureCardProps) => {
  const IconComponent = icon;
  return (
    <motion.div
      key={title}
      variants={fadeInUp}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group h-full bg-primary-background border-primary-border">
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl transition-colors bg-primary-background"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
          }}
        />
        <CardContent className="p-0 relative">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative transition-colors bg-secondary-background"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <IconComponent className="w-8 h-8 text-accent-background" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-background"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.3,
              }}
            />
          </motion.div>
          <h3 className="text-xl font-semibold mb-4 group-hover:transition-colors text-primary-text">
            {title}
          </h3>
          <p className="leading-relaxed text-secondary-text">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

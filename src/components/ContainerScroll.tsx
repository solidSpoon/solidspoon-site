import React, {useRef} from "react";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {cn} from "@site/src/utils/cn";

export const ContainerScroll = ({
                                    header,
                                    children,
                                    mobile
                                }: {

    header: React.ReactNode;
    children: React.ReactNode;
    mobile?: boolean;
}) => {
    const containerRef = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scaleDimensions = () => {
        return mobile ? [0.7, 0.9] : [1.05, 1];
    };
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    const rotate = useTransform(scrollYProgress, [0, 0.33], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
    const translatePic = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <div
            className="h-[120vh] md:h-[150vh]  max-h-[2000px] relative"
            ref={containerRef}
        >
            <div
                className="w-full h-full"
                style={{
                    perspective: "1000px",
                }}
            >
                <motion.div
                    style={{
                        translateY: mobile ? 0 : translate,
                    }}
                    className="h-[60%] div max-w-8xl mx-auto"
                >
                    {header}
                </motion.div>
                <motion.div
                    style={{
                        translateY: mobile ? -translatePic : translatePic,
                        rotateX: rotate, // rotate in X-axis
                        scale,
                    }}
                    className={cn("max-w-8xl -mt-12 mx-auto h-[40%] w-full",
                    )}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

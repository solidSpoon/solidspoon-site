import React, {useRef} from "react";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {cn} from "@site/src/utils/cn";
export const ContainerScroll = ({
                                    header,
                                    children,
                                }: {

    header: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const containerRef = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <div
            className=" flex  items-start justify-center relative pb-40"
            ref={containerRef}
        >
            <div
                className="w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <motion.div
                    style={{
                        translateY: translate,
                    }}
                    className="div max-w-8xl mx-auto text-center"
                >
                    {header}
                </motion.div>
                <motion.div
                    style={{
                        rotateX: rotate, // rotate in X-axis
                        scale,
                    }}
                    className={cn("max-w-8xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full",
                    )}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

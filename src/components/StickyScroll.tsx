import React, {useRef} from "react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {cn} from "@site/src/utils/cn";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StickyScroll = ({
                          content,
                          mobile
                      }: {
    content: {
        title: string;
        description: string;
        image?: string;
    }[];
    mobile: boolean;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const itemsRef = useRef<number[]>(content.map(() => 0));
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const length = itemsRef.current.reduce((a, b) => a + b, 0);
        const cardsBreakpoints = content.map((_, index) => {
            const prev = itemsRef.current.slice(0, index).reduce((a, b) => a + b, 0);
            return prev / length;
        });
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest >= breakpoint && latest <= breakpoint + 0.25) {
                setActiveCard(() => index);
            }
        });
    });
    return (
        <div
            className="flex justify-center relative px-10 max-w-6xl"
            ref={ref}
        >
            <div className={cn("div relative flex flex-col items-start px-4", !mobile && "py-[30vh]")}>
                {content.map((item, index) => (
                    <div
                        ref={(el) => {
                            //length of each card
                            if (el) {
                                itemsRef.current[index] = el.offsetHeight;
                            }
                        }}
                        key={item.title + index} className="my-20 flex flex-col items-start justify-center">
                        <motion.h2
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-2xl font-bold"
                        >
                            {item.title}
                        </motion.h2>
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-kg mt-10 max-w-lg"
                        >
                            {item.description}
                        </motion.p>

                        <motion.img
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className={cn('object-contain', !mobile && 'hidden')}
                            alt="screen capture" src={useBaseUrl(content[index].image)}
                        />
                    </div>
                ))}
            </div>
            <div
                className={cn("h-screen w-[50vw] rounded-md transform flex items-center justify-center",
                    mobile && 'hidden'
                )}
                style={{position: 'sticky', top: '0'}}
            >
                <img
                    className={cn('object-contain')}
                    alt="screen capture" src={useBaseUrl(content[activeCard].image)}
                />
            </div>
        </div>
    );
};

export default StickyScroll;
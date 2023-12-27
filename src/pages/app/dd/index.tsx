"use client";
import React, {useRef} from "react";
import {useScroll, useTransform, motion, useMotionValueEvent} from "framer-motion";
import {twMerge} from "tailwind-merge";
import useFooter from "@site/src/hooks/useFooter";
import Layout from "@theme/Layout";
import {ContainerScroll} from "@site/src/components/ContainerScroll";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {cn} from "@site/src/utils/cn";

const maxWidth = 'max-w-8xl';


export const StickyScroll = ({
                                 content,
                             }: {
    content: {
        title: string;
        description: string;
        image?: string;
    }[];
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        console.log("Card scroll: ", latest)
        console.log("Card scroll: ", cardsBreakpoints)
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest >= breakpoint && latest <= breakpoint + 0.25) {
                setActiveCard(() => index);
            }
        });
    });

    const backgroundColors = [
        "rgb(15 23 42)",
        "rgb(0 0 0)",
        "rgb(23 23 23)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, rgb(6 182 212), rgb(6 212 182))",
        "linear-gradient(to bottom right, rgb(255 45 85), rgb(255 149 0))",
        "linear-gradient(to bottom right, rgb(255 204 0), rgb(255 45 85))",
    ];
    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="flex justify-center relative rounded-md px-10"
            ref={ref}
        >
            <div className="div relative flex flex-col items-start px-4">
                {content.map((item, index) => (
                    <div key={item.title + index} className="my-20 h-screen flex flex-col items-start justify-center">
                        <motion.h2
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-2xl font-bold text-slate-100"
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
                            className="text-kg text-slate-300 mt-10 max-w-lg"
                        >
                            {item.description}
                        </motion.p>
                    </div>
                ))}
            </div>
            <div
                className="h-fit w-[40vw] rounded-md transform -translate-y-1/2 top-1/2 flex items-center justify-center"
                style={{position: 'sticky', top: '50%'}}
            >
                <motion.img
                    className={cn('object-contain')}
                    alt="screen capture" src={useBaseUrl(content[activeCard].image)}
                />
            </div>
        </motion.div>
    );
};

const images = [
    '/img/dashplayer/theme.png',
    '/img/dashplayer/history.png',
    '/img/dashplayer/translation.png',
    '/img/dashplayer/hidesubtitle.png',
    '/img/dashplayer/shortcut.png',

]
const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        image: images[0],
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        image: images[1],
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        image: images[2],
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        image: images[3],
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        image: images[4],
    },
];
const Page = () => {
    useFooter();
    return (
        <Layout>
            <div
                className={'w-full py-[500px] flex flex-col items-center'}>
                <ContainerScroll
                    header={
                        <h1 className={twMerge('text-8xl text-gray-500 font-bold text-center')}>DashPlayer</h1>
                    }
                >
                    <img
                        className={twMerge('w-full md:max-w-screen-xl rounded-lg drop-shadow-xl shadow-black')}
                        alt="screen capture" src={useBaseUrl('/img/dashplayer/screencapture.png')}/>
                </ContainerScroll>
                <StickyScroll content={content}/>
            </div>
        </Layout>

    )
}

export default Page;
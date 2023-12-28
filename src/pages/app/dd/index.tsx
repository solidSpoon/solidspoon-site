"use client";
import React, {useRef} from "react";
import {useScroll, useTransform, motion, useMotionValueEvent} from "framer-motion";
import {twMerge} from "tailwind-merge";
import useFooter from "@site/src/hooks/useFooter";
import Layout from "@theme/Layout";
import {ContainerScroll} from "@site/src/components/ContainerScroll";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {cn} from "@site/src/utils/cn";
import Link from "@docusaurus/Link";
import StickyScroll from "@site/src/components/StickyScroll";

const maxWidth = 'max-w-8xl';



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

      return (
        <Layout>
            <div
                className={'w-full flex flex-col items-center'}>
                <ContainerScroll
                    mobile={isMobile}
                    header={
                        <div className={twMerge('w-full h-full flex flex-col items-center justify-center gap-6')}>
                            <div className={twMerge('w-24 h-24 md:w-32 md:h-32 p-4 dark:bg-white rounded-3xl')}>
                                <img
                                    className={twMerge('w-full drop-shadow-2xl shadow-black')}
                                    src={useBaseUrl('/img/dashplayer/logo.png')} alt={'logo'}/>
                            </div>
                            <h2 className={twMerge('text-2xl font-bold text-center')}>
                                一款专为英语学习打造的视频播放器
                            </h2>
                            <div className={twMerge('flex gap-2')}>
                                <Link
                                    className="button button--primary button--lg"
                                    to="/docs/dash-player/installation">
                                    Download
                                </Link>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/docs/dash-player/intro">
                                    Docs
                                </Link>
                            </div>
                            <h1 className={twMerge('text-4xl md:text-8xl font-bold text-center')}>DashPlayer</h1>
                        </div>
                    }
                >
                    <img
                        className={twMerge('w-full md:max-w-screen-xl rounded-lg drop-shadow-xl shadow-black')}
                        alt="screen capture" src={useBaseUrl('/img/dashplayer/screencapture.png')}/>
                </ContainerScroll>
                <StickyScroll
                    mobile={isMobile}
                    content={content}/>
            </div>
        </Layout>

    )
}

export default Page;
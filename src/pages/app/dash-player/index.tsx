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
import {FollowerPointerCard} from "@site/src/components/flowable-pointer";
import Image from "@docusaurus/plugin-ideal-image/lib/theme/IdealImage";
const maxWidth = 'max-w-7xl';

const content = [
    {
        title: "主页展示播放历史",
        description:
            "启动页会展示您最近播放的视频，随时可继续观看。",
        image: '/img/dashplayer/home-page.png',
    },
    {
        title: "单词翻译与字幕翻译",
        description:
            "机器翻译直接明了，易于理解。鼠标悬停在单词上，即可看到翻译，点击单词则可听到发音。",
        image: '/img/dashplayer/translation.png',
    },
    {
        title: "随时隐藏字幕",
        description:
            "觉得字幕影响学习？随时可将其隐藏。",
        image: '/img/dashplayer/hidesubtitle.png',
    },
    {
        title: "文件浏览器中切换视频",
        description:
            "点击右下角的按钮，即可查看播放项目并随时切换。",
        image: '/img/dashplayer/file-browser.png',
    },
    {
        title: "快捷键操作常用功能",
        description:
            "通过快捷键，您可以使用常用功能，如跳转句子，单句循环，隐藏字幕等。所有快捷键可在设置界面查看。",
        image: '/img/dashplayer/shortcut.png',
    },
    {
        title: "内置深浅色主题",
        description:
            "内置深色和浅色主题，完美适应您的学习环境。",
        image: '/img/dashplayer/theme.png',
    },
    {
        title: "控制中心管理播放器状态",
        description:
            "忘记快捷键也不用担心，点击控制中心即可管理播放器状态。",
        image: '/img/dashplayer/control-center.png',
    },
    {
        title: "单词管理（开发中）",
        description:
            "在播放器中，您可以管理单词，更新单词状态，如已掌握，未掌握，已忽略等。",
        image: '/img/dashplayer/word-management.png',
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
                                <Image
                                    className={twMerge('w-full drop-shadow-2xl shadow-black')}
                                    img={useBaseUrl('/img/dashplayer/logo.png')} alt={'logo'}/>
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
                        alt="screen capture" src={useBaseUrl('/img/dashplayer/screen-capture.png')}/>
                </ContainerScroll>
                <StickyScroll
                    mobile={isMobile}
                    content={content}/>
                <div className={twMerge('flex gap-2 -translate-y-20', isMobile && '-translate-y-10')}>
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
                <Image
                    className={twMerge('w-full max-w-7xl')}
                    alt="screen capture" img={useBaseUrl('/img/dashplayer/overview.png')}/>
            </div>
        </Layout>

    )
}

export default Page;
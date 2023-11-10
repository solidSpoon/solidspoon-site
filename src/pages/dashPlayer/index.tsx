import Layout from "@theme/Layout";
import React from "react";
import Link from "@docusaurus/Link";
import {twMerge} from "tailwind-merge";
import {
    FeatureTitle,
    FeatureItemWrapper,
    FeatureDescription, FeatureImage
} from "@site/src/components/featureWrapper/FeatureItemWrapper";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Footer from '@theme/Footer';

const DashPlayer = () => {
    return (
        <Layout
            title={`DashPlayer`}
            description="Description will go into a meta tag in <head />">
            <main className={twMerge('w-full flex flex-col items-center gap-28 px-8')}>
                <div className={twMerge('w-full flex flex-col items-center gap-6')}>
                    <div className={twMerge('w-24 h-24 md:w-32 md:h-32 p-4 mt-24 dark:bg-white rounded-3xl')}>
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
                            to="/docs/dash-player/intro">
                            Download
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/dash-player/intro">
                            Docs
                        </Link>
                    </div>
                    <h1 className={twMerge('text-4xl font-bold text-center')}>DashPlayer</h1>
                    <img
                        className={twMerge('w-full md:max-w-screen-lg rounded-lg drop-shadow-xl shadow-black')}
                        alt="screen capture" src={useBaseUrl('/img/dashplayer/screencapture.png')}/>
                </div>
                <FeatureItemWrapper>
                    <FeatureTitle>多种亮度不同的主题</FeatureTitle>
                    <FeatureDescription>
                        内置多款不同亮度的主题，完美适应您的学习环境。
                    </FeatureDescription>
                    <FeatureImage
                        src={useBaseUrl('/img/dashplayer/theme.png')}
                        alt="DashPlayer Theme"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>播放历史记录</FeatureTitle>
                    <FeatureDescription>
                        启动页面会展示您最近播放的视频，您可以随时继续观看。
                    </FeatureDescription>
                    <FeatureImage
                        src={useBaseUrl('/img/dashplayer/history.png')}
                        alt="DashPlayer History"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>字幕翻译和单词翻译</FeatureTitle>
                    <FeatureDescription>
                        支持有道查词和腾讯字幕翻译。字幕翻译相较于人工翻译更忠于原意，无论您的字幕是否包含人工翻译，DashPlayer
                        都会为您展示机器字幕。
                    </FeatureDescription>
                    <FeatureImage
                        src={useBaseUrl('/img/dashplayer/translation.png')}
                        alt="translation"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>可以隐藏字幕</FeatureTitle>
                    <FeatureDescription>
                        启动页面会展示您最近播放的视频，您可以随时继续观看。
                    </FeatureDescription>
                    <FeatureImage
                        src={useBaseUrl('/img/dashplayer/hidesubtitle.png')}
                        alt="DashPlayer History"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>全面的快捷键</FeatureTitle>
                    <FeatureDescription>
                        常用的快捷键都有，您可以在设置页面查看所有快捷键。
                    </FeatureDescription>
                    <FeatureImage
                        src={useBaseUrl('/img/dashplayer/shortcut.png')}
                        alt="DashPlayer History"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>支持的视频 / 字幕格式</FeatureTitle>
                    <FeatureDescription>
                        <div className={twMerge('flex flex-wrap gap-3 max-w-md mx-auto text-center justify-center')}>
                            {['MP4', 'WebM', 'WAV', 'srt'].map((item, index) => (
                                <span
                                    className={twMerge('uppercase bg-neutral-300 text-neutral-700 px-2 py-1 rounded-lg font-medium')}
                                    key={index}>{item}</span>
                            ))}
                        </div>
                    </FeatureDescription>
                </FeatureItemWrapper>
                <div className={twMerge('w-full h-12')}/>
            </main>
            <Footer/>
        </Layout>
    );

}

export default DashPlayer;
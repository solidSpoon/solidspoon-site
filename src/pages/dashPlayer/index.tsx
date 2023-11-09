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
                        alt="screen capture" src="https://github.com/solidSpoon/DashPlayer/assets/39454841/95bef2b3-b4f2-4a3e-b884-e5987a2ee4d6"/>
                </div>
                <FeatureItemWrapper>
                    <FeatureTitle>多种亮度不同的主题</FeatureTitle>
                    <FeatureDescription>
                        内置多款不同亮度的主题，完美适应您的学习环境。
                    </FeatureDescription>
                    <FeatureImage
                        src="https://github.com/solidSpoon/DashPlayer/assets/39454841/75f9a9fc-ef1c-4141-80e4-0aa6c38fd70b"
                        alt="DashPlayer Theme"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>播放历史记录</FeatureTitle>
                    <FeatureDescription>
                        启动页面会展示您最近播放的视频，您可以随时继续观看。
                    </FeatureDescription>
                    <FeatureImage
                        src="https://github.com/solidSpoon/DashPlayer/assets/39454841/aebb2661-0079-4ffb-b07f-0c5f531468ea"
                        alt="DashPlayer History"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>字幕翻译和单词翻译</FeatureTitle>
                    <FeatureDescription>
                        字幕翻译相较于人工翻译更忠于原意，无论您的字幕是否包含人工翻译，DashPlayer 都会为您展示机器字幕。
                    </FeatureDescription>
                    <FeatureImage
                        src="https://github.com/solidSpoon/DashPlayer/assets/39454841/0198d8c6-65f6-487c-ba65-e3b7b6cc1598"
                        alt="translation"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>可以隐藏字幕</FeatureTitle>
                    <FeatureDescription>
                        启动页面会展示您最近播放的视频，您可以随时继续观看。
                    </FeatureDescription>
                    <FeatureImage
                        src="https://github.com/solidSpoon/DashPlayer/assets/39454841/e9e7f41b-946f-426d-bab8-e1264cbac06b"
                        alt="DashPlayer History"/>
                </FeatureItemWrapper>
                <FeatureItemWrapper>
                    <FeatureTitle>支持常见的视频格式</FeatureTitle>
                    <FeatureDescription>
                        <div className={twMerge('flex flex-wrap gap-3 max-w-md mx-auto text-center justify-center')}>
                            {['MP4', 'WebM', 'TS', 'MP3'].map((item, index) => (
                                <span
                                    className={twMerge('uppercase bg-neutral-300 text-neutral-700 px-2 py-1 rounded-lg font-medium')}
                                    key={index}>{item}</span>
                            ))}
                        </div>
                    </FeatureDescription>
                </FeatureItemWrapper>
                <div className={twMerge('w-full h-12')}/>
            </main>
        </Layout>
    );

}

export default DashPlayer;
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useFooter from "@site/src/hooks/useFooter";
import Image from "@docusaurus/plugin-ideal-image/lib/theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {twMerge} from "tailwind-merge";
import styles from './index.module.css';
import {useEffect, useRef} from "react";
import ThemedImage from '@theme/ThemedImage';
function HomepageMain() {
    useFooter();
    const headerRef = useRef<HTMLHeadElement>();
    useEffect(() => {
        const adjusetHeight = () => {
            // @ts-ignore
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            console.log(navbarHeight);
            headerRef.current.style.height = 'calc(100vh - ' + navbarHeight + 'px)';
        }
        adjusetHeight();
    }, []);
    const {siteConfig} = useDocusaurusContext();
    return (
        <main
            ref={headerRef}
            className={clsx('w-full grid grid-cols-7 grid-rows-5')}>
            <div
                className={twMerge('col-start-3 row-start-2 col-end-7 row-end-3 ',
                    'md:col-start-3 md:row-start-2 md:col-end-6  md:row-end-5 flex flex-col justify-center')}>
                <div className={twMerge('w-full h-full flex flex-col items-end md:items-start justify-start gap-20')}>
                    <div className={twMerge('text-6xl md:text-8xl font-bold')}>
                        哈哈哈
                    </div>
                    <div className={twMerge('text-3xl')}>
                        哈哈哈
                    </div>
                </div>
            </div>
            <div className={twMerge(
                'col-start-1 row-start-3 col-end-7  row-end-6',
                'md:col-start-5 md:row-start-2 md:col-end-8 md:row-end-6')}>
                <div className={twMerge('w-full h-full flex flex-col items-center justify-center')}>
                    <ThemedImage
                        sources={{
                            dark: useBaseUrl('/img/StrollingDoodleDark.svg'),
                            light: useBaseUrl('/img/StrollingDoodle.svg'),
                        }}
                        alt={'logo'}/>
                </div>

            </div>
        </main>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageMain/>
        </Layout>
    );
}

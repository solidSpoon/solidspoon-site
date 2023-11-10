import clsx from 'clsx';
import Layout from '@theme/Layout';
import useFooter from "@site/src/hooks/useFooter";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {twMerge} from "tailwind-merge";
import {useLayoutEffect, useRef} from "react";
import ThemedImage from '@theme/ThemedImage';

function HomepageHeader() {
    const headerRef = useRef<HTMLHeadElement>();
    useLayoutEffect(() => {
        const adjustHeight = () => {
            // @ts-ignore
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            console.log(navbarHeight);
            headerRef.current.style.height = 'calc(100vh - ' + navbarHeight + 'px)';
        }
        adjustHeight();
    }, []);
    return (
        <header
            ref={headerRef}
            className={clsx('w-full grid grid-cols-7 grid-rows-6')}>
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
                'col-start-1 row-start-4 col-end-7  row-end-7',
                'md:col-start-5 md:row-start-2 md:col-end-8 md:row-end-7')}>
                <div className={twMerge('w-full h-full flex flex-col items-center justify-center')}>
                    <ThemedImage
                        sources={{
                            dark: useBaseUrl('/img/StrollingDoodleDark.svg'),
                            light: useBaseUrl('/img/StrollingDoodle.svg'),
                        }}
                        alt={'logo'}/>
                </div>
            </div>
        </header>
    );
}


function HomepageMain() {
    return (
        <main
            className={clsx('w-full flex flex-col items-center justify-center gap-4  md:flex-row bg-gray-200 dark:bg-gray-600 py-20 border-[0.5px]')}>
            <div className={twMerge('h-32 flex flex-col items-center justify-end')}>
                <ThemedImage
                    height={'100%'}
                    sources={{
                        dark: useBaseUrl('/img/chillingDark.svg'),
                        light: useBaseUrl('/img/chilling.svg'),
                    }}
                    alt={'logo'}/>
            </div>
            <div className={twMerge('h-full flex flex-col items-center md:items-start gap-4')}>
                <div className={twMerge('text-xl')}>
                    方向是比速度更重要的追求
                </div>
                <div
                    style={{
                        color: 'var(--ifm-color-primary)',
                    }}
                    className={twMerge('font-bold')}>
                    solidSpoon
                </div>
            </div>
        </main>
    );
}

export default function Home(): JSX.Element {
    useFooter();
    return (
        <Layout
            title={`Hide`}
            description="solidSpoon's site">
            <HomepageHeader/>
            <HomepageMain/>
        </Layout>
    );
}

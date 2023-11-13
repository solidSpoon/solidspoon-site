import React, {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {useVisibleBlogSidebarItems} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import {twMerge} from "tailwind-merge";
import {useLocation} from "@docusaurus/router";

export default function BlogSidebarDesktop({sidebar}) {
    const location = useLocation();
    const outsideRef = React.useRef();
    const currentRef = React.useRef();
    console.log('useRouteContext1', location);
    useEffect(() => {
        if (outsideRef.current && currentRef.current) {
            outsideRef.current.scrollTo({
                top: currentRef.current.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    }, [sidebar])
    const items = useVisibleBlogSidebarItems(sidebar.items);
    return (
        <aside className="col col--3">
            <nav
                className={twMerge(clsx(styles.sidebar), 'flex flex-col')}
                aria-label={translate({
                    id: 'theme.blog.sidebar.navAriaLabel',
                    message: 'Blog recent posts navigation',
                    description: 'The ARIA label for recent posts in the blog sidebar',
                })}>
                <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
                    {sidebar.title}
                </div>
                <div
                    ref={outsideRef}
                    className={twMerge('w-full flex-1 overflow-y-auto thin-scrollbar')}>
                    <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
                        {items.map((item) => {
                                const isActive = location.pathname === item.permalink;
                                return <li key={item.permalink} className={styles.sidebarItem}>
                                    <Link
                                        ref={isActive ? currentRef : undefined}
                                        isNavLink
                                        to={item.permalink}
                                        className={styles.sidebarItemLink}
                                        activeClassName={styles.sidebarItemLinkActive}>
                                        {item.title}
                                    </Link>
                                </li>
                            }
                        )}
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

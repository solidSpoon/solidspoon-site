import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="solidSpoon/solidSpoon.github.io"
            repoId="R_kgDOKrU8nQ"
            category="Comments"
            categoryId="DIC_kwDOKrU8nc4Ca5uP"  // E.g. id of "General"
            mapping="pathname"                        // Important! To map comments to URL
            term="Welcome to @giscus/react component!"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
        />
    );
}
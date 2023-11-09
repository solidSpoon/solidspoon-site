import Layout from "@theme/Layout";
import React from "react";
import Link from "@docusaurus/Link";

const DashPlayer = () => {
    return (
        <Layout
            title={`DashPlayer`}
            description="Description will go into a meta tag in <head />">
            <main>
                <div className={"w-24 h-96 bg-green-600"}/>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/dash-player/intro">
                    Documentation
                </Link>
            </main>
        </Layout>
    );

}

export default DashPlayer;
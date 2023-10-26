/* Make an about page for this site */

import React from "react";
import Head from "next/head";
import Header from "../components/header";
import GifEmbed from "@/components/gifEmbed";

export default function Blog() {
    return (
        <>
        <Head>
            <title>The magic of coumpound interests</title>
            <meta name="Explore the Financial Magic of Compound Interest - Unveiling the Investment Secrets for a Prosperous Future. 
            Discover why Albert Einstein hailed compound interest as the 'eighth wonder of the world' and learn how it can supercharge your financial goals.
             Dive into the fascinating world of investments, wealth growth, and financial wisdom. Start your journey towards a secure and prosperous future today." 
             content="Learn about the power of compound interest." />
            <link rel="icon" href="../public/logo.png" />
        </Head>
        <div>
            <Header />
        </div>
        <main>
            <h1>The Hidden Treasure of Compound Interest: Start Investing Today</h1>
                <p className="blog-content">
                In a world filled with instant gratification and quick fixes, investing may seem like a daunting and distant concept. 
                </p>

        </main>
        </>
    )
}
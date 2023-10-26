/* Make an about page for this site */

import React from "react";
import Head from "next/head";
import Header from "../components/header";
import GifEmbed from "@/components/gifEmbed";

export default function Blog() {
    return (
        <>
        <Head>
            <title>Blog</title>
            <meta name="description" content="Blog" />
            <link rel="icon" href="../public/logo.png" />
        </Head>
        <div>
            <Header />
        </div>
        <main>
            <h1>Blog</h1>
            <p>This site is still under construction, we are working on it !!!</p>
    
            <GifEmbed />
        </main>
    </>
    )
}
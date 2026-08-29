import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = "website",
}) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:url"
                content={url}
            />

            <meta
                property="og:type"
                content={type}
            />
            
            <meta property="og:image:width" content="2880" />
            <meta property="og:image:height" content="1384" />

            <meta
                property="twitter:title"
                content={title}
            />

            <meta
                property="twitter:description"
                content={description}
            />

            <meta
                property="twitter:image"
                content={image}
            />

            <meta
                property="twitter:card"
                content="summary_large_image"
            />

            <link
                rel="canonical"
                href={url}
            />
        </Helmet>
    );
};


export default SEO;
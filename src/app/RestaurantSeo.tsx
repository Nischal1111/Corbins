interface RestaurantSEOProps {
  restaurantName?: string;
  description?: string;
  address?: string;
  phone?: string;
  cuisine?: string;
  openingHours?: string[];
  images?: string[];
}

interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  address: {
    "@type": string;
    streetAddress: string;
  };
  telephone: string;
  servesCuisine: string;
  openingHours: string[];
  image: string[];
  acceptsReservations: string;
}

interface SocialTags {
  title: string;
  description: string;
  image: string | undefined;
  url: string;
}

import React from 'react';
import Head from 'next/head';

const RestaurantSEO: React.FC<RestaurantSEOProps> = ({ 
    restaurantName = "Corbins - Fine dine and bar",
    description = "Experience fine dining at Corbins. We offer a carefully curated menu featuring fresh, locally-sourced ingredients and exceptional service in an elegant atmosphere.",
    address = " 34 Duporth Avenue, Maroochydore, Queensland",
    phone = "(07) 5326 1022",
    cuisine = "Multi",
    openingHours = [],
    images = []
}) => {
    const structuredData: StructuredData = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: restaurantName,
        description: description,
        address: {
        "@type": "PostalAddress",
        streetAddress: address,
        },
        telephone: phone,
        servesCuisine: cuisine,
        openingHours: openingHours,
        image: images,
        acceptsReservations: "True",
    };

    const socialTags: SocialTags = {
        title: `${restaurantName} - Fine Dining Restaurant`,
        description,
        image: images[0],
        url: typeof window !== 'undefined' ? window.location.origin : '',
    };

    return (
        <Head>
        <title>Corbins - Fine dine and bar</title>
        <meta name="description" content={socialTags.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content={socialTags.title} />
        <meta property="og:description" content={socialTags.description} />
        <meta property="og:image" content={socialTags.image} />
        <meta property="og:url" content={socialTags.url} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialTags.title} />
        <meta name="twitter:description" content={socialTags.description} />
        <meta name="twitter:image" content={socialTags.image} />
        
        <meta name="keywords" content={`${restaurantName}, restaurant, dining, ${cuisine} food, fine dining, ${address}`} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={socialTags.url} />
        </Head>
    );
};

export default RestaurantSEO;
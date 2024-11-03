'use client'

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Corbins - Fine dine and bar",
          "image": [
            "/assets/home.jpeg",
            "/assets/gallery/gallery1.avif",
            "/assets/about-food.avif"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "34 Duporth Avenue",
            "addressLocality": "Maroochydore",
            "addressRegion": "Queensland"
          },
          "telephone": "(07) 5326 1022",
          "openingHours": [
            "Tu-Th 12:00-23:00",
            "Fr-Sa 12:00-23:00"
          ]
        })
      }}
    />
  )
}
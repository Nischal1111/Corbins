// src/app/metadata.config.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corbins - Fine dine and bar',
  description: 'Experience fine dining at Corbins. We offer a carefully curated menu featuring fresh, locally-sourced ingredients and exceptional service in an elegant atmosphere.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  openGraph: {
    title: 'Corbins - Fine dine and bar',
    description: 'Experience fine dining at Corbins',
    images: ['/assets/home.jpeg'],
  },
  other: {
    'X-UA-Compatible': 'IE=edge',
  }
}
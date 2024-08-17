'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loader from '@/shared/Loader';

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startLoading = () => {
      setLoading(true);
      setProgress(0);
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            clearInterval(timer);
            return prevProgress;
          }
          return prevProgress + 10;
        });
      }, 100);
    };

    const stopLoading = () => {
      clearInterval(timer);
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
    };

    startLoading();
    
    // This will run whenever the route changes
    const cleanup = () => {
      stopLoading();
    };

    return cleanup;
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <Loader progress={progress} />}
      {children}
    </>
  );
}
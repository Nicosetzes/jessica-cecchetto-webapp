"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { useCookieConsent } from "@/context";

export default function AnalyticsWrapper() {
  const { isResolved, preferences } = useCookieConsent();

  if (!isResolved) return null;

  return (
    <>
      {/* 1. ANALYTICS (Vercel Analytics / Google Analytics) */}
      {preferences.analytics && (
        <>
          <VercelAnalytics />

          {/* EJEMPLO FUTURO: Google Analytics (GTAG) */}
          {/* 
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script> 
          */}
        </>
      )}

      {/* 2. MARKETING (Meta Pixel / TikTok Pixel / Ads) */}
      {preferences.marketing && (
        <>
          {/* EJEMPLO FUTURO: Meta Pixel */}
          {/* 
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'TU_PIXEL_ID');
              fbq('track', 'PageView');
            `}
          </Script> 
          */}
        </>
      )}
    </>
  );
}

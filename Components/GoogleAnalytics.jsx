// components/GoogleAnalytics.js
"use client";

import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics setup
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-4RREGBLEB6");
    }
  }, []);

  return null; // This component doesn't render anything itself
};

export default GoogleAnalytics;

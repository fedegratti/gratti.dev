'use client'

import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

export default function Mixpanel() {
  useEffect(() => {
    // Initialize Mixpanel only once when component mounts
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
      autocapture: true,
      record_sessions_percent: 100,
    });
  }, []); // Empty dependency array ensures this runs only once
  
  return null;
}
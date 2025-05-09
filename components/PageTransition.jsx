"use client";

import LightLeakOverlay from "./LightLeakOverlay";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LenisWrapper({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState();
    
    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 1000);


    return () => {
        clearTimeout(timer);

    };
  }, [pathname]);

  return <>
        <LightLeakOverlay isActive={isTransitioning}/>
        {children}
    </>;
}

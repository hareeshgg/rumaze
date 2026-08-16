"use client";

import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/Aurora"), {
  ssr: false,
});

export default function AuroraWrapper() {
  return <Aurora />;
}

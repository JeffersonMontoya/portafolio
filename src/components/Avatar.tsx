"use client";

import Image from "next/image";

import { MotionTransition } from "@/components/TransitionComponents";

export function Avatar() {
  return (
    <MotionTransition
      position="bottom"
      className="hidden md:inline-block md:absolute bottom-0 right-0 z-0"
    >
      <Image
        src="/avatar-1.png"
        width="400"
        height="400"
        className="w-full h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
}

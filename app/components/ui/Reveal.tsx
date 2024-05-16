"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../utils/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Student by day."
        revealText="Builder by night. "
      >
      </TextRevealCard>
    </div>
  );
}

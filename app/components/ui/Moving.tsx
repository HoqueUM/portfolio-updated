"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../utils/movingCards";
import {IoLogoJavascript} from 'react-icons/io5';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IconContext } from 'react-icons';
import Item from '../model/Item';

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  <Item item={<IoLogoJavascript size={90} />} />,
  <Item item={<FaHtml5 size={90} />} />,
  <Item item={<FaCss3 size={90} />} />,
  <Item item={<SiTypescript size={90} />} />,
  <Item item={<FaPython size={90} />} />,
  <Item item={<TbBrandCpp size={90} />} />
];
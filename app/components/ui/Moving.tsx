"use client";
import { InfiniteMovingCards } from "../../utils/movingCards";
import {IoLogoJavascript} from 'react-icons/io5';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPandas } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import Item from '../model/Item';

export default function Moving() {
  return (
    <div className="flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={languages}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const languages = [
  <Item item={<IoLogoJavascript size={50} />} />,
  <Item item={<FaHtml5 size={50} />} />,
  <Item item={<FaCss3 size={50} />} />,
  <Item item={<SiTypescript size={50} />} />,
  <Item item={<FaPython size={50} />} />,
  <Item item={<TbBrandCpp size={50} />} />,
  <Item item={<FaReact size={50} />} />,
  <Item item={<SiNextdotjs size={50} />} />,
  <Item item={<RiTailwindCssFill size={50} />} />,
  <Item item={<SiPandas size={50} />} />,
  <Item item={<SiScikitlearn size={50} />} />,
  <Item item={<SiFlask size={50} />} />,
  <Item item={<FaUbuntu size={50} />} />,
  <Item item={<VscVscode size={50} />} />,
  <Item item={<FaFigma size={50} />} />,
  <Item item={<FaGitAlt size={50} />} />,
];
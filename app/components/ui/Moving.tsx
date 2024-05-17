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

const languagesComponents = [
  <IoLogoJavascript size={50} />,
  <FaHtml5 size={50} />,
  <FaCss3 size={50} />,
  <SiTypescript size={50} />,
  <FaPython size={50} />,
  <TbBrandCpp size={50} />,
  <FaReact size={50} />,
  <SiNextdotjs size={50} />,
  <RiTailwindCssFill size={50} />,
  <SiPandas size={50} />,
  <SiScikitlearn size={50} />,
  <SiFlask size={50} />,
  <FaUbuntu size={50} />,
  <VscVscode size={50} />,
  <FaFigma size={50} />,
  <FaGitAlt size={50} />,
];

const languages = languagesComponents.map((component, index) => 
  <Item key={index} item={component} />
);
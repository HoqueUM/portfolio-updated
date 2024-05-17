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

const languagesComponents = [
  <IoLogoJavascript key="js" size={50} />,
  <FaHtml5 key="html" size={50} />,
  <FaCss3 key="css" size={50} />,
  <SiTypescript key="ts" size={50} />,
  <FaPython key="python" size={50} />,
  <TbBrandCpp key="cpp" size={50} />,
  <FaReact key="react" size={50} />,
  <SiNextdotjs key="nextjs" size={50} />,
  <RiTailwindCssFill key="tailwind" size={50} />,
  <SiPandas key="pandas" size={50} />,
  <SiScikitlearn key="scikit" size={50} />,
  <SiFlask key="flask" size={50} />,
  <FaUbuntu key="ubuntu" size={50} />,
  <VscVscode key="vscode" size={50} />,
  <FaFigma key="figma" size={50} />,
  <FaGitAlt key="git" size={50} />,
];

const languages = languagesComponents.map((component, index) => 
  <Item key={index} item={component} />
);

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
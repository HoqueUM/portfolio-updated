import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGit, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiCsharp, SiPandas, SiScikitlearn, SiNextdotjs, SiTailwindcss, SiSass, SiFlask, SiFastapi } from 'react-icons/si';


const Skills = () => (
  <div className='flex flex-col space-y-7 items-center justify-center h-screen bg-black text-secondary-color'>
    <p className='font-bold space-y-4'>Languages:</p>
    <div className='flex flex-row gap-10'>
      <SiCplusplus size={50} />
      <FaPython size={50} />
      <FaJs size={50} />
      <SiTypescript size={50} />
      <SiCsharp size={50} />
    </div>
    <p className='font-bold space-y-4'>Libraries and Frameworks:</p>
    <div className='flex flex-row gap-10'>
      <SiPandas size={50} />
      <SiScikitlearn size={50} />
      <FaReact size={50} />
      <SiNextdotjs size={50} />
      <SiTailwindcss size={50} />
      <SiSass size={50} />
      <SiFlask size={50} />
      <SiFastapi size={50} />
    </div>
    <p className='font-bold space-y-4'>Tools:</p>
    <div className='flex flex-row gap-10'>
      <FaDocker size={50} />
      <FaGit size={50} />
      <FaLinux size={50} />
    </div>
    <br />
  </div>
);

export default Skills;

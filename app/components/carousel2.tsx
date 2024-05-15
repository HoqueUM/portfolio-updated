import {IoLogoJavascript} from 'react-icons/io5';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IconContext } from 'react-icons';
import Item from './Item';

export default function Carousel2() {

    return (
        <div className='flex justify-center items-center'>
            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <div className='flex justify-center items-center overflow-hidden w-[400px]'>
            <ul className='flex gap-4 border-2 w-[600px] px-[1rem] py-[1rem]'>
                <li><Item item={<IoLogoJavascript size={90} />} /></li>
                <li><Item item={<FaHtml5 size={90} />} /></li>           
                <li><Item item={<FaCss3 size={90}   />} /></li>
                <li><Item item={<SiTypescript size={90} />} /></li>
                <li><Item item={<FaPython size={90} />} /></li>
                <li><Item item={<TbBrandCpp size={90} />} /></li>
            </ul>
        </div>
        </IconContext.Provider>
        </div>

    )
}
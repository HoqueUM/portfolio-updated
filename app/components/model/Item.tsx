'use client';
import React from 'react';
import { IconContext } from 'react-icons';
import '../../globals.scss';

export default function Item({item}: {item: any}) {
    return (
        <IconContext.Provider value={{ color: 'var(--secondary-color)' }}>
        <div className='relative flex justify-center items-center h-[100px] w-[100px]'>
            {item}
        </div>
        </IconContext.Provider>
    )
}
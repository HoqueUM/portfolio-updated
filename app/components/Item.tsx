import React from 'react';



export default function Item({item}: {item: any}) {
    return (
        <div className='relative flex justify-center items-center bg-white h-[100px] w-[100px]'>
            {item}
        </div>
    )
}
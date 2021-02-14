
import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
            <div className="text-xl"><Link href='/'>John Doe</Link></div>
            <div className="flex">
                <div className="ml-8"><Link href='/expereince'>Expereince</Link></div>
                <div className="ml-8"><Link href='/project'>Project</Link></div>
                <div className="ml-8"><Link href='/research'>Research</Link></div>
                <div className="ml-8"><Link href='/education'>Education</Link></div>
            </div>
        </div>
    )
}
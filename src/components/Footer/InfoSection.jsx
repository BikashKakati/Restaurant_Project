import React from 'react'
import { Link } from 'react-router-dom'

function InfoSection({ title, info }) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="text-sm">
                {
                    info.map((ele, idx) => <li key={idx}><Link href="#" className="hover:text-gray-400">{ele}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default InfoSection
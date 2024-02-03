import React from 'react'
import Wrapper from '../Ui/Wrapper'
import { Link } from 'react-router-dom'
import InfoSection from './InfoSection'

function Footer() {
    return (
        <footer className='w-full bg-zinc-200 pt-10 pb-32 md:pb-20'>
            <Wrapper className="h-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <InfoSection
                        title="ABOUT FOODAUTO"
                        info={["Who Are You", "Blogs", "Work With Us", "Investor Relations","Report Fraud","Press Kit","Contact Us"]}
                    />
                    <InfoSection
                        title="AUTOVERSE"
                        info={["Blinkit", "Feeding India", "Hyperpure", "Zomaland"]}
                    />
                    <InfoSection
                        title="FOR RESTAURANTS"
                        info={["Partner With Us", "Apps For You"]}
                    />
                    <InfoSection
                        title="FOR ENTERPRISES"
                        info={["FoodAuto For Enterprise"]}
                    />
                </div>
                <div className="flex justify-center">
                    <ul className="flex">
                        <li className="mr-6"><Link href="#" className="hover:text-gray-400">Privacy</Link></li>
                        <li className="mr-6"><Link href="#" className="hover:text-gray-400">Security</Link></li>
                        <li className="mr-6"><Link href="#" className="hover:text-gray-400">Terms</Link></li>
                        <li><Link href="#" className="hover:text-gray-400">Sitemap</Link></li>
                    </ul>
                </div>
                <p className="text-center mt-8">&copy; 2024 Restaurantify. All rights reserved.</p>
            </Wrapper>
        </footer>
    )
}

export default Footer
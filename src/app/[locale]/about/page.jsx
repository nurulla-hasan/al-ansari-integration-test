"use client"

import AboutHeader from '@/components/about-components/AboutHeader';
import AboutPageButtons from '@/components/about-components/AboutPageButtons';
import ClientFocus from '@/components/about-components/ClientFocus';
import HighestLevel from '@/components/about-components/HighestLevel';
import LegalPractice from '@/components/about-components/legalPractice';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import Services from "@/components/home-components/services/Services";
import { useTranslations } from 'next-intl';

const AboutPage = () => { 
    const tSimpleHero = useTranslations('SimpleHero'); 
    const tNavbar = useTranslations('Navbar'); 

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('aboutUsTitle'), href: "/about" }, 
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title={tSimpleHero('aboutUsTitle')}
                breadcrumbs={breadcrumbs}
            >
                <AboutPageButtons />
            </SimpleHero>

            <div className='pb-20'>
                <AboutHeader />
                <Services />
                <LegalPractice />
                <ClientFocus />
                <HighestLevel />
            </div>
        </div>
    );
};

export default AboutPage;

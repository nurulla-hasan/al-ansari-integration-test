"use client"

import AboutHeader from '@/components/about-components/AboutHeader';
import AboutPageButtons from '@/components/about-components/AboutPageButtons';
import ClientFocus from '@/components/about-components/ClientFocus';
import HighestLevel from '@/components/about-components/HighestLevel';
import LegalPractice from '@/components/about-components/legalPractice';
import Services from '@/components/home-components/services/Services';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const AboutPage = () => {
    const tSimpleHero = useTranslations('SimpleHero');
    const tNavbar = useTranslations('Navbar');
    const t = useTranslations('Hero');

    const breadcrumbs = [
        { name: tNavbar('home'), href: "/" },
        { name: tSimpleHero('aboutUsTitle'), href: "/about" },
    ];

    const {data, isLoading}= useQuery({
        queryKey: ["about"],
        queryFn: () => api.get('/dashboard/get_about_count')
    })

    const stateData = data?.data?.data
    const totalHours = stateData?.totalHours;
    const totalCases = stateData?.totalCases;
    const totalClients = stateData?.totalClients;

    const stats = [
        {
            number: totalHours,
            labelKey: "totalProBonoHours",
        },
        {
            number: totalClients,
            labelKey: "clients", 
        },
        {
            number: totalCases,
            labelKey: "cases",
        },
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
                <PageLayout>
                    {/* Statistics */}
                    <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="border border-gray-300 text-center rounded-xl backdrop-blur-lg bg-white/10 py-8 px-3">
                                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#C9B164] mb-2 sm:mb-4">
                                    {stat.number}
                                </div>
                                <div className="text-sm sm:text-base lg:text-lg text-[#C9B164] font-medium">
                                    {t(`stats.${stat.labelKey}`)}
                                </div>
                            </div>
                        ))}
                    </div>
                </PageLayout>
                <AboutHeader />
                <LegalPractice />
                <ClientFocus />
                <HighestLevel />
                <Services />
            </div>
        </div>
    );
};

export default AboutPage;

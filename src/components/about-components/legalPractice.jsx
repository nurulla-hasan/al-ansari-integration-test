"use client";

import Image from "next/image";
import SoftPatternColumns from "../abstract-background/SoftPatternColumns";
import PageLayout from "../layout/PageLayout";
import { useTranslations } from "next-intl";

const LegalPractice = () => {
    const t = useTranslations('AboutPage');
    return (
        <section className="relative overflow-hidden bg-bg-primary">
            <PageLayout>
                <div className=" flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-start w-full lg:order-1">
                        <div className="relative w-full max-w-[300px] h-[300px] sm:max-w-[350px] sm:h-[350px] md:max-w-[400px] md:h-[400px] lg:max-w-[550px] lg:h-[550px] rounded-br-4xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/legal-practice.png"
                                alt="Legal Practice"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 text-center lg:text-left relative z-10 w-full lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poltawski font-semibold text-text-title mb-4 md:mb-6">
                            {t('legalPracticeTitle')}
                        </h2>
                        <p className="text-base px-4 md:px-0 md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            {t('legalPracticeDescription')}
                        </p>

                        {/* Geometric pattern in the background */}
                        <div className="absolute lg:-right-50 inset-y-0 w-full hidden lg:block -z-50">
                            <SoftPatternColumns />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
};

export default LegalPractice;
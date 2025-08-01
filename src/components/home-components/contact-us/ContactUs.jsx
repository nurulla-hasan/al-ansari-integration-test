"use client";
import InputField from "@/components/helper/input-helper/InputField";
import PageLayout from "@/components/layout/PageLayout";
import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { ArrowBigRight, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactUs = () => {
    const t = useTranslations("Contact Us");
    const tCommon = useTranslations("common");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { mutate, isPending } = useMutation({
        mutationFn: (data) => api.post('/dashboard/contact_form', data),
        onSuccess: (data) => {
            toast.success("Message sent successfully!");
        },
        onError: (error) => {
            toast.error("Something went wrong!");
            console.log(error);
        }
    })

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div id="contact-us" className="bg-bg-primary md:py-20">
            <PageLayout>
                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 lg:gap-12">
                    <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/2 h-64 md:h-auto relative">
                        <Image
                            src="/assets/contact-us.jpg"
                            alt="Contact Us"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-br-4xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 xl:w-1/2">
                        <h2 className="font-poltawski text-3xl md:text-4xl text-text-title font-bold mb-6">
                            {t("title")}
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email Input */}
                            <InputField
                                label={t("email")}
                                name="email"
                                type="email"
                                placeholder={t("emailPlaceholder")}
                                register={register}
                                required={true}
                                registerOptions={{
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: tCommon("invalidEmail")
                                    }
                                }}
                                error={errors.email}
                            />

                            {/* Phone Number Input */}
                            <InputField
                                label={t("phone")}
                                name="phone"
                                type="tel"
                                placeholder={t("phonePlaceholder")}
                                register={register}
                                required={true}
                                error={errors.phone}
                            />
                            <div>
                                <label htmlFor="message" className="block text-text-muted text-xs mb-2">
                                    {t("message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder={t("messagePlaceholder")}
                                    {...register("message", { required: true, minLength: { value: 10, message: tCommon("messageMinLength") } })}
                                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-btn-bg focus:border-transparent transition-all duration-200 resize-y"
                                >
                                </textarea>
                                {errors.message && <p className="text-xs text-red-500 mt-0.5">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-btn-bg text-white text-sm font-medium rounded-md shadow-md
                                           transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {
                                    isPending ? <><Loader2 className="animate-spin" />Sending</> : <>{t("sendMessage")} <ArrowBigRight /></>
                                } 

                            </button>
                        </form>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default ContactUs;
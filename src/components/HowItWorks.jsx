import { CalendarCheck, Search, Stethoscope } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="uppercase text-primary font-semibold tracking-widest text-sm">
                        THREE SIMPLE STEPS
                    </p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Book Appointment in Just 3 Steps
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

                    {[
                        {
                            step: "01",
                            icon: Search,
                            title: "Search Doctors",
                            text: "Browse our directory of trusted and highly-rated specialists."
                        },
                        {
                            step: "02",
                            icon: Stethoscope,
                            title: "Choose & Review",
                            text: "Check profiles, fees, availability, and patient reviews."
                        },
                        {
                            step: "03",
                            icon: CalendarCheck,
                            title: "Book Instantly",
                            text: "Select your preferred time and get instant confirmation."
                        },
                    ].map((item, index) => (
                        <div key={index} className="relative group z-10">
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                                
                                {/* Step Number */}
                                <div className="text-7xl font-bold text-slate-100 dark:text-slate-800 group-hover:text-primary/10 transition-colors absolute -top-6 -right-3">
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                    <item.icon className="w-10 h-10 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-center mb-4 text-slate-800 dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-center text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
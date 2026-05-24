import { Clock, ShieldCheck, UserCheck } from 'lucide-react';
import React from 'react';

const WhyChoseUse = () => {
    return (
        <div>
            {/* Why Choose Us - Advanced */}
<section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
  <div className="container mx-auto px-4">
    <div className="mx-auto max-w-2xl text-center mb-16">
      <p className="text-primary font-semibold uppercase tracking-[3px] text-sm">WHY DOCAPPOINT</p>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
        Care You Can Count On
      </h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        Everything you need to book appointments confidently and manage your health easily.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: ShieldCheck,
          title: "Verified Specialists",
          text: "Every doctor is thoroughly verified with proper credentials and real patient reviews.",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Clock,
          title: "Instant Booking",
          text: "Book appointments in seconds — no calls, no waiting, just quick confirmation.",
          color: "from-violet-500 to-purple-500"
        },
        {
          icon: UserCheck,
          title: "Complete Dashboard",
          text: "Manage all your bookings, history, and profile in one secure place.",
          color: "from-emerald-500 to-teal-500"
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
            <item.icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">
            {item.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {item.text}
          </p>

          <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -z-10 group-hover:scale-150 transition-transform" />
        </div>
      ))}
    </div>
  </div>
</section>
        </div>
    );
};

export default WhyChoseUse;
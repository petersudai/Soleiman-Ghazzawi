'use client'

import { useConfig } from '@/lib/config-context'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'

export function About() {
  const config = useConfig()
  const { about, ui } = config

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <AnimatedSection direction="left" className="relative order-last lg:order-first">
            <div className="relative">
              {/* Decorative background block — hidden on mobile to prevent horizontal scroll */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-brand-100 -z-10" />

              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200 shadow-card">
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating credential badge — repositioned on small screens */}
              <div className="absolute right-4 sm:-right-5 top-6 sm:top-10 bg-white rounded-2xl shadow-card-hover px-4 sm:px-5 py-3 sm:py-4 max-w-[160px] sm:max-w-[180px]">
                <div className="text-brand-700 font-bold text-xl sm:text-2xl font-serif">
                  {about.credentials[ui.aboutBadgeIndex].label}
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs mt-0.5 leading-tight">
                  {about.credentials[ui.aboutBadgeIndex].sublabel}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content column */}
          <div>
            <AnimatedSection delay={0.05}>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand-700 mb-4">
                {about.eyebrow}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.08] tracking-tight text-slate-900 mb-6">
                {about.headline.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < about.headline.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </AnimatedSection>

            <div className="space-y-4 mb-10">
              {about.body.map((paragraph, i) => (
                <AnimatedSection key={i} delay={0.18 + i * 0.08}>
                  <p className="text-slate-600 leading-relaxed text-[1.0625rem]">
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Credential grid */}
            <StaggerContainer
              className="grid grid-cols-2 gap-3"
              staggerDelay={0.08}
            >
              {about.credentials.map((cred) => (
                <StaggerItem key={cred.label}>
                  <div className="bg-white border border-slate-100 rounded-xl p-4 hover:border-slate-200 hover:shadow-card transition-all duration-200">
                    <p className="font-serif font-bold text-2xl text-slate-900">
                      {cred.label}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-snug">
                      {cred.sublabel}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Cross-link to the company site */}
            {about.companyLink && (
              <AnimatedSection delay={0.5} className="mt-8">
                <a
                  href={about.companyLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-brand-300 hover:shadow-card transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 text-brand-400 font-serif font-bold text-sm shrink-0">
                    GS
                  </span>
                  <span className="flex flex-col">
                    <span className="font-serif font-bold text-slate-900 text-base leading-tight">
                      {about.companyLink.label}
                    </span>
                    <span className="text-slate-500 text-xs mt-0.5">
                      {about.companyLink.sublabel}
                    </span>
                  </span>
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-brand-700 group-hover:translate-x-0.5 transition-all duration-200 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

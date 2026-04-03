import Image, { type StaticImageData } from 'next/image'
import BenPhoto from '@/app/assets/Ben_nazarian.webp'
import SiennaPhoto from '@/app/assets/Sienna_nazarian.webp'

// Update this URL to Benjamin's actual LinkedIn profile
const BENJAMIN_LINKEDIN = 'https://www.linkedin.com/in/benjamin-nazarian/'

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type TeamMember = {
  name:     string
  role:     string
  photo:    StaticImageData
  bio:      string
  bio2?:    string
  linkedin?: string
}

const TEAM: TeamMember[] = [
  {
    name:  'Benjamin Nazarian',
    role:  'Founder & Principal',
    photo: BenPhoto,
    bio:   'Benjamin Nazarian is a seasoned operator and investor with decades of experience founding, scaling, and advising companies across consumer, real estate, and financial services. He is the Co-Founder of Therabody, a global leader in wellness technology best known for pioneering the Theragun and reshaping modern self-care. As CEO, he led the company to over $1 billion in sales across more than 60 countries and 10,000 retail locations, building one of the most recognized wellness brands in the world. He is also the Co-Founder of Omninet Capital, a national real estate firm.',
    bio2:     'He works closely with founders, helping them turn ideas into meaningful, scalable businesses. Benjamin brings hands-on operational expertise in business planning, DTC-to-retail expansion, marketing, and organizational scaling, the exact challenges most founders face for the first time, and rarely have a seasoned operator alongside them to navigate. He serves as an active strategic partner to portfolio companies Parkview Financial and Constellation Capital. Nazarian Capital is the expression of that experience, deployed as capital.',
    linkedin: BENJAMIN_LINKEDIN,
  },
  {
    name:  'Sienna Nazarian',
    role:  'Scout, Health & Wellness',
    photo: SiennaPhoto,
    bio:   'Sienna focuses on identifying early-stage consumer product companies in the health and wellness space. With a background in product design engineering, she brings a founder-level lens to evaluating how products are built, differentiated, and positioned for scale. Her coverage expands Nazarian Capital\'s reach into one of the fastest-growing segments of the consumer market.',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white border-b border-rule">
      <div className="section-wrap py-20">
        <p className="eyebrow text-ash mb-4">Team</p>
        <span className="gold-rule mb-10 block" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {TEAM.map(({ name, role, bio, bio2, photo, linkedin }) => (
            <div
              key={name}
              className="bg-cream rounded-[4px] border border-rule p-8 hover:border-navy/30 transition-colors duration-200"
            >
              <div className="mb-5">
                <Image
                  src={photo}
                  alt={name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border border-rule"
                  style={{ width: 96, height: 96 }}
                />
              </div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-[15px] font-semibold text-charcoal">{name}</h3>
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    className="text-ash hover:text-navy transition-colors duration-200 flex-shrink-0 mt-0.5"
                  >
                    <LinkedinIcon size={14} />
                  </a>
                )}
              </div>
              <p className="eyebrow text-navy mb-5">{role}</p>
              <p className="text-[12px] text-smoke leading-[1.75]">{bio}</p>
              {bio2 && (
                <p className="text-[12px] text-smoke leading-[1.75] mt-3">{bio2}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

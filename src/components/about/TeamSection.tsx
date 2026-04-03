import Image, { type StaticImageData } from 'next/image'
import BenPhoto from '@/app/assets/Ben_nazarian.webp'
import SiennaPhoto from '@/app/assets/Sienna_nazarian.webp'

type TeamMember = {
  name:  string
  role:  string
  photo: StaticImageData
  bio:   string
  bio2?: string
}

const TEAM: TeamMember[] = [
  {
    name:  'Benjamin Nazarian',
    role:  'Founder & Principal',
    photo: BenPhoto,
    bio:   'Benjamin Nazarian is a seasoned operator and investor with decades of experience founding, scaling, and advising companies across consumer, real estate, and financial services. He is the Co-Founder of Therabody, a global leader in wellness technology best known for pioneering the Theragun and reshaping modern self-care. As CEO, he led the company to over $1 billion in sales across more than 60 countries and 10,000 retail locations, building one of the most recognized wellness brands in the world. He is also the Co-Founder of Omninet Capital, a national real estate firm.',
    bio2:  'He works closely with founders, helping them turn ideas into meaningful, scalable businesses. Benjamin brings hands-on operational expertise in business planning, DTC-to-retail expansion, marketing, and organizational scaling, the exact challenges most founders face for the first time, and rarely have a seasoned operator alongside them to navigate. He serves as an active strategic partner to portfolio companies Parkview Financial and Constellation Capital. Nazarian Capital is the expression of that experience, deployed as capital.',
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
          {TEAM.map(({ name, role, bio, bio2, photo }) => (
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
              <h3 className="text-[15px] font-semibold text-charcoal mb-1">{name}</h3>
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

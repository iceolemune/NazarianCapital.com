import NewsEntry from '@/components/news/NewsEntry'
import MediaEntry from '@/components/news/MediaEntry'

const NEWS_ENTRIES = [
  {
    company:  'SpaceX',
    date:     'March 2026',
    headline: "SpaceX Completes Starship's Seventh Test Flight",
    body:     'Full booster catch and reusability milestones bring the program closer to commercial and deep-space operations.',
  },
  {
    company:  'Diamond Foundry',
    date:     'February 2026',
    headline: 'Diamond Foundry Announces Expansion of Diamond Wafer Production for AI Applications',
    body:     'Scale-up in single-crystal diamond wafer capacity targets the growing demand for thermal management solutions in AI compute chips.',
  },
  {
    company:  'Therabody',
    date:     'January 2026',
    headline: 'Therabody Launches Next-Generation Recovery Platform',
    body:     'Expanded beyond percussive therapy into a connected wellness ecosystem for both professional athletes and everyday consumers.',
  },
  {
    company:  'Magic Spoon',
    date:     'December 2025',
    headline: 'Magic Spoon Expands Retail Distribution Nationwide',
    body:     "Major expansion into leading national grocery chains marks the brand's evolution from DTC pioneer to mainstream consumer staple.",
  },
  // {
  //   company:  'Lensabl',
  //   date:     'November 2025',
  //   headline: 'Lensabl Partners with Major Vision Insurance Providers',
  //   body:     'Partnerships with leading vision insurance networks make the platform accessible to millions of new customers nationwide.',
  // },
]

const MEDIA_ENTRIES = [
  {
    title:  'CNBC: Benjamin Nazarian and Maria Sharapova on Investing in Wellness Tech Company Therabody',
    source: 'CNBC',
    type:   'Video'   as const,
    url:    'https://youtu.be/CeJ0yur6sfQ',
  },
  {
    title:  'Elevating Wellness & Recovery with Therabody',
    source: 'Bloomberg Podcast',
    type:   'Podcast' as const,
    url:    'https://www.bloomberg.com/news/audio/2021-06-23/elevating-wellness-recovery-with-therabody-podcast',
  },
  {
    title:  'Montgomery Summit: The Future of Disruption with Benjamin Nazarian',
    source: 'Montgomery Summit',
    type:   'Video'   as const,
    url:    'https://youtu.be/BbtR-6_LDvU',
  },
  {
    title:  'Wellness Technology Revolution with Therabody',
    source: 'TD Securities — Retail Visionaries Series',
    type:   'Podcast' as const,
    url:    'https://www.tdsecurities.com/ca/en/tdc-retail-visionaries-wellness-technology-revolution',
  },
  {
    title:  '#104: Benjamin Nazarian, CEO of Therabody',
    source: 'Fitt Insider Podcast',
    type:   'Podcast' as const,
    url:    'https://insider.fitt.co/104-benjamin-nazarian-ceo-of-therabody/',
  },
  {
    title:  'Episode #231: Benjamin Nazarian & Dr. Jason Wersland, Therabody',
    source: 'HALO Talks',
    type:   'Podcast' as const,
    url:    'https://www.halotalks.com/benjamin-nazarian-dr-jason-wersland-therabody/',
  },
  {
    title:  "Establishing Your Brand's Credibility with Benjamin Nazarian",
    source: 'The Playbook — David Meltzer',
    type:   'Video'   as const,
    url:    'https://youtu.be/XcrvWGDYDrQ',
  },
  {
    title:  'Ben Nazarian, CEO of Therabody, on the Next Evolution of Health & Wellness',
    source: 'How Success Happens — Audioboom',
    type:   'Podcast' as const,
    url:    'https://audioboom.com/posts/7946552-ben-nazarian-ceo-of-therabody-on-the-next-evolution-of-health-wellness',
  },
  {
    title:  "Oxford Road Presents: Media's New Deal featuring Benjamin Nazarian",
    source: 'Oxford Road',
    type:   'Video'   as const,
    url:    'https://youtu.be/IMju0KqA8Xk',
  },
  {
    title:  "Media's New Deal, Episode 10",
    source: 'Oxford Road',
    type:   'Podcast' as const,
    url:    'https://oxfordroad.com/thought-leadership/medias-new-deal-episode10/',
  },
  {
    title:  'Episode 10: Ben Nazarian, CEO of Therabody',
    source: 'Global Player',
    type:   'Podcast' as const,
    url:    'https://www.globalplayer.com/podcasts/episodes/7DrpSdM/',
  },
  {
    title:  'How Success Happened for Benjamin Nazarian, CEO of Therabody',
    source: 'San Antonio Express-News',
    type:   'Press'   as const,
    url:    'https://www.mysanantonio.com/business/article/How-Success-Happened-for-Benjamin-Nazarian-CEO-16533325.php',
  },
  {
    title:  "One Tool to Treat It All — A Deep Dive into Therabody's TheraFace Pro",
    source: 'Spotify',
    type:   'Podcast' as const,
    url:    'https://open.spotify.com/episode/7f3yEDgli7K2NT9nfXlx84',
  },
]

export default function NewsContent() {
  return (
    <>
      {/* Media coverage table */}
      <section className="bg-white border-b border-rule">
        <div className="section-wrap py-14">
          <p className="eyebrow text-navy mb-3">Media</p>
          <span className="gold-rule block mb-8" />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-rule">
                  <th className="text-left text-[11px] font-semibold text-smoke uppercase tracking-wide pb-3 pr-6">Title</th>
                  <th className="text-left text-[11px] font-semibold text-smoke uppercase tracking-wide pb-3 pr-6">Source</th>
                  <th className="text-left text-[11px] font-semibold text-smoke uppercase tracking-wide pb-3">Type</th>
                </tr>
              </thead>
              <tbody>
                {MEDIA_ENTRIES.map((m) => (
                  <MediaEntry key={m.title} {...m} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Portfolio news */}
      <section className="bg-cream">
        <div className="section-wrap py-14">
          <span className="gold-rule block mb-2" />
          {NEWS_ENTRIES.map((e) => (
            <NewsEntry key={e.company + e.date} {...e} />
          ))}
        </div>
      </section>
    </>
  )
}

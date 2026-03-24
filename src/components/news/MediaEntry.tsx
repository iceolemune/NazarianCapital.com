import Link from 'next/link'

type MediaType = 'Video' | 'Podcast' | 'Press'

const TAG_CLASS: Record<MediaType, string> = {
  Video:   'tag-video',
  Podcast: 'tag-podcast',
  Press:   'tag-press',
}

interface MediaEntryProps {
  title:  string
  source: string
  type:   MediaType
  url?:   string
}

export default function MediaEntry({ title, source, type, url }: MediaEntryProps) {
  return (
    <tr className="border-b border-rule last:border-0 hover:bg-cream/50 transition-colors">
      <td className="py-4 pr-6 text-[12.5px] text-charcoal leading-snug w-full">
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy transition-colors underline underline-offset-2 decoration-rule hover:decoration-navy"
          >
            {title}
          </Link>
        ) : title}
      </td>
      <td className="py-4 pr-6 text-[11.5px] text-smoke whitespace-nowrap">{source}</td>
      <td className="py-4">
        <span className={TAG_CLASS[type]}>{type}</span>
      </td>
    </tr>
  )
}

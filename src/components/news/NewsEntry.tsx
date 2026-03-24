interface NewsEntryProps {
  company:  string
  date:     string
  headline: string
  body:     string
}

export default function NewsEntry({ company, date, headline, body }: NewsEntryProps) {
  return (
    <div className="py-8 border-b border-rule last:border-0">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="eyebrow text-navy">{company}</span>
        <span className="text-ash text-[11px]">{date}</span>
      </div>
      <h3 className="text-[16px] font-semibold text-charcoal leading-snug mb-3">{headline}</h3>
      <p className="text-[12.5px] text-smoke leading-[1.75]">{body}</p>
    </div>
  )
}

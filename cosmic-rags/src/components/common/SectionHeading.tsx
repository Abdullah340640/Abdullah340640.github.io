import clsx from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={clsx('space-y-4', className, {
        'text-center': align === 'center',
        'max-w-3xl': align === 'left',
        'mx-auto max-w-3xl': align === 'center',
      })}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading

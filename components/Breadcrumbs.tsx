import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  items: Crumb[];
  dark?: boolean;
}

export function Breadcrumbs({ items, dark = false }: Props) {
  const cls = dark ? 'breadcrumb' : 'breadcrumb-light';

  return (
    <nav aria-label="Breadcrumb" className={cls}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          {dark
            ? <a href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Home</a>
            : <Link href="/" className="text-stone hover:text-ink transition-colors">Home</Link>
          }
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span style={{ color: dark ? 'rgba(255,255,255,0.22)' : 'var(--border)' }}>/</span>
            {item.href ? (
              dark
                ? <a href={item.href} style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</a>
                : <Link href={item.href} className="text-stone hover:text-ink transition-colors">{item.label}</Link>
            ) : (
              <span style={{ color: dark ? 'rgba(255,255,255,0.7)' : 'var(--ink)' }} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import Link from 'next/link';

interface Crumb { label: string; href?: string; }
interface Props { items: Crumb[]; dark?: boolean; }

export function Breadcrumbs({ items, dark = false }: Props) {
  const sep = dark ? 'rgba(255,255,255,0.22)' : 'var(--border)';
  const def = dark ? 'rgba(255,255,255,0.48)' : 'var(--stone)';
  const cur = dark ? 'rgba(255,255,255,0.72)' : 'var(--ink)';
  const base = dark ? 'rgba(255,255,255,0.36)' : 'var(--stone)';

  const cls = 'breadcrumb' + (dark ? '' : '-light');

  return (
    <nav aria-label="Breadcrumb" className={cls}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" style={{ color: def }}>Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span style={{ color: sep }}>/</span>
            {item.href
              ? <Link href={item.href} style={{ color: def }}>{item.label}</Link>
              : <span style={{ color: cur }} aria-current="page">{item.label}</span>
            }
          </li>
        ))}
      </ol>
    </nav>
  );
}

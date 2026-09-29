import Link from 'next/link';
import type { ReactNode } from 'react';

// Only recognised inline formatting becomes markup; arbitrary HTML stays text.
export function articleText(text: string): ReactNode {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|<(b|strong|i|em)>([\s\S]*?)<\/\3>|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\n]+)\*/gi;
  const nodes: ReactNode[] = [];
  let start = 0;
  for (const match of Array.from(text.matchAll(pattern))) {
    if (match.index! > start) nodes.push(text.slice(start, match.index));
    const key = match.index;
    if (match[1]) {
      const href = match[2];
      if (/^https?:\/\//i.test(href)) nodes.push(<a key={key} href={href} target="_blank" rel="noopener noreferrer">{articleText(match[1])}</a>);
      else if (/^(\/(?!\/)|#)/.test(href)) nodes.push(<Link key={key} href={href}>{articleText(match[1])}</Link>);
      else nodes.push(match[1]);
    } else if (match[3]) {
      nodes.push(/^(b|strong)$/i.test(match[3]) ? <strong key={key}>{articleText(match[4])}</strong> : <em key={key}>{articleText(match[4])}</em>);
    } else if (match[5] || match[6]) nodes.push(<strong key={key}>{articleText(match[5] || match[6])}</strong>);
    else nodes.push(<em key={key}>{articleText(match[7])}</em>);
    start = match.index! + match[0].length;
  }
  if (start < text.length) nodes.push(text.slice(start));
  return nodes.length ? nodes : text;
}

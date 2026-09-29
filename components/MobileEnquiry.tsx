import Link from 'next/link';
export function MobileEnquiry({ city, service }: { city?: string; service?: string }) {
  return <div className="edition-mobile-form lg:hidden">
    <Link href="/contact/#enquiry" className="btn-primary">{city ? `Book a consultation in ${city}` : 'Book a consultation'}</Link>
  </div>;
}

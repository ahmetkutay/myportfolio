import Link from 'next/link';

// Assuming your PDF is placed in the public directory
const CVLink = () => (
    <Link
        href="/mycv.pdf"
        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        target="_blank"
        rel="noopener noreferrer"
    >
        My CV
    </Link>
);

export default CVLink;
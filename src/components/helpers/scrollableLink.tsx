'use client';

import React from 'react';

const ScrollableLink = ({ href, className, children }: { href: string, className: string, children: React.ReactNode }) => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        if (!href || href === '#') return;

        try {
            const anchor = document.querySelector(href);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } catch (error) {
            console.error('Invalid href selector: ', error);
        }
    };

    return (
        <a
            href={href}
            className={className}
            onClick={handleScroll}
        >
            {children}
        </a>
    );
};

export default ScrollableLink;
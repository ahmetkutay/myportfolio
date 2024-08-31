import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => (
    <div className="flex space-x-4">
        <Link
            href="https://github.com/ahmetkutay"
            className="flex items-center text-xs hover:underline underline-offset-4"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub className="mr-2"/>
            GitHub
        </Link>
        <Link
            href="https://www.linkedin.com/in/ahmetkutay/"
            className="flex items-center text-xs hover:underline underline-offset-4"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin className="mr-2"/>
            LinkedIn
        </Link>
    </div>
);

export default SocialLinks;
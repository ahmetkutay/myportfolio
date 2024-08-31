import dynamic from 'next/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import CVLink from "@/components/helpers/cvlink";
import SocialLinks from "@/components/helpers/socialLinks";
import Image from "next/image";
import Link from "next/link";

const ScrollableLink = dynamic(() => import('../helpers/scrollableLink'), { ssr: false });

export function MyPortfolioComponent() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Ahmet Kutay Karacair</h1>
                  <h2 className="text-xl font-semibold text-muted-foreground">Full-Stack Developer</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I am a computer engineer from Sakarya University. With a passion for
                    technology and innovation, I specialize in software engineering and product development.
                    Proficient in ReactJS, React Native, Node.js, Python, and PHP, I thrive on solving complex
                    problems and bringing ideas to life.
                    <br />
                    My adaptability extends beyond technology; I possess strong communication skills that
                    facilitate seamless collaboration within diverse teams. As a continuous learner, I stay updated
                    with the latest trends, ensuring I contribute effectively to every project.
                    Driven by curiosity and a commitment to excellence, I am dedicated to making a meaningful
                    impact in the tech industry.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <ScrollableLink
                      href="#about"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </ScrollableLink>
                </div>
              </div>
              <Image
                  src="/me.jpg"
                  width="591"
                  height="591"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Background and Skills</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have over 5 years of experience as a full-stack developer, specializing in building modern web
                  applications using technologies like React, Node.js,PHP and MongoDB. I am passionate about creating
                  intuitive user experiences and writing clean, maintainable code.
                </p>
                <CVLink />
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <CodepenIcon className="h-5 w-5"/>
                      React
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <CodepenIcon className="h-5 w-5"/>
                      Next.js
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <NetworkIcon className="h-5 w-5"/>
                      Node.js
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <NetworkIcon className="h-5 w-5"/>
                      PHP
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <DatabaseIcon className="h-5 w-5"/>
                      MongoDB
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <DatabaseIcon className="h-5 w-5"/>
                      MySQL
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <EclipseIcon className="h-5 w-5"/>
                      JavaScript
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <CodepenIcon className="h-5 w-5"/>
                      CSS
                    </div>
                    <div
                        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1 text-sm font-medium">
                      <HashIcon className="h-5 w-5"/>
                      HTML
                    </div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="text-sm font-medium">Full-Stack Developer, Karnaval Media</div>
                      <div className="text-xs text-muted-foreground">03/2024 - Present</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Devops Developer, Orion Innovation</div>
                      <div className="text-xs text-muted-foreground">08/2023 - 03/2024</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Full-Stack Developer, Orion Innovation</div>
                      <div className="text-xs text-muted-foreground">12/2021-08/2023</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Frontend Developer, Casemice Digital</div>
                      <div className="text-xs text-muted-foreground">01/2021 - 12/2021</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Software Intern, Casemice Digital</div>
                      <div className="text-xs text-muted-foreground">09/2020 - 12/2020</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Software Intern, Ecodation Technology</div>
                      <div className="text-xs text-muted-foreground">07/2020 - 08/2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Check Out My Work</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have worked on a variety of web applications, from e-commerce platforms to social media apps. Here are
                some of my recent projects.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <Link
                    href="https://github.com/ahmetkutay/chatApp-server"
                >
                  <Image
                      src="/chatapp.jpg"
                      width="550"
                      height="310"
                      alt="Project 1"
                      className="rounded-t-lg w-full aspect-video object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Critism Box</h3>
                    <p className="text-muted-foreground">
                      A modern app that chats user with each others
                    </p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link
                    href="https://github.com/mukireus/imagery"
                >
                <Image
                    src="/imagery.jpg"
                    width="550"
                    height="310"
                    alt="Project 2"
                    className="rounded-t-lg w-full aspect-video object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Imagery</h3>
                  <p className="text-muted-foreground">A mobile app that users find images by searching and save or download</p>
                </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href='https://github.com/ahmetkutay/HearMe'>
                <Image
                    src="/hearme.jpg"
                    width="550"
                    height="310"
                    alt="Project 3"
                    className="rounded-t-lg w-full aspect-video object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">HearMe</h3>
                  <p className="text-muted-foreground">
                    A mobile app that users share their moments in text and talk each other.
                  </p>
                </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground"> © {new Date().getFullYear()} Ahmet Kutay Karacair{" "}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <SocialLinks />
          </nav>
        </footer>
      </div>
  );
}

function CodepenIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" x2="12" y1="22" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
        <polyline points="2 15.5 12 8.5 22 15.5" />
        <line x1="12" x2="12" y1="2" y2="8.5" />
      </svg>
  );
}

function DatabaseIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
  );
}

function EclipseIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a7 7 0 1 0 10 10" />
      </svg>
  );
}

function HashIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="9" y2="9" />
        <line x1="4" x2="20" y1="15" y2="15" />
        <line x1="10" x2="8" y1="3" y2="21" />
        <line x1="16" x2="14" y1="3" y2="21" />
      </svg>
  );
}

function NetworkIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
  );
}
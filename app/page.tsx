'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BookCard from '@/components/BookCard';
import PodcastCard from '@/components/PodcastCard';
import ContactForm from '@/components/ContactForm';

import projectsData from '@/content/projects.json';
import booksData from '@/content/books.json';
import podcastsData from '@/content/podcasts.json';

type ProjectType = 'work' | 'side';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ProjectType>('work');

  const filteredProjects = projectsData.filter((p) => p.type === activeTab);

  return (
    <>
      <Nav />

      <main>
        {/* ── Hero ─────────────────────────────── */}
        <Hero />

        {/* ── Work & Projects ──────────────────── */}
        <section id="achievements" className="section">
          <div className="container">
            <p className="section-label">002 — WORK</p>
            <h2 className="section-heading">Work &amp; Projects</h2>

            <div className="projects-tabs" role="tablist" aria-label="Project filter">
              <button
                role="tab"
                aria-selected={activeTab === 'work'}
                className={`projects-tab${activeTab === 'work' ? ' projects-tab--active' : ''}`}
                onClick={() => setActiveTab('work')}
              >
                Work
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'side'}
                className={`projects-tab${activeTab === 'side' ? ' projects-tab--active' : ''}`}
                onClick={() => setActiveTab('side')}
              >
                Side Projects
              </button>
            </div>

            <div
              className="cards-grid"
              role="tabpanel"
              aria-label={activeTab === 'work' ? 'Work projects' : 'Side projects'}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project as { title: string; description: string; tags: string[]; link: string | null; period: string; type: 'work' | 'side' }} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Books ────────────────────────────── */}
        <section id="books" className="section" style={{ background: 'var(--bg-subtle)' }}>
          <div className="container">
            <p className="section-label">003 — BOOKS</p>
            <h2 className="section-heading">Books I Recommend</h2>

            <div className="cards-grid cards-grid--books">
              {booksData.map((book) => (
                <BookCard key={book.title} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Podcasts ─────────────────────────── */}
        <section id="podcasts" className="section">
          <div className="container">
            <p className="section-label">004 — PODCASTS</p>
            <h2 className="section-heading">Podcasts I Recommend</h2>

            <div className="cards-grid">
              {podcastsData.map((podcast) => (
                <PodcastCard key={podcast.name} podcast={podcast} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────── */}
        <section
          id="contact"
          className="section"
          style={{ background: 'var(--bg-subtle)' }}
        >
          <div className="container">
            <p className="section-label">005 — CONTACT</p>
            <h2 className="section-heading">Get In Touch</h2>

            <div className="contact-grid">
              <div>
                <p className="contact-intro">
                  Whether you&apos;re building something interesting, want to
                  compare notes on a book, or just want to say hello — I&apos;d
                  love to hear from you. I try to reply to everything.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Max Cattarello. Built with Next.js.
          </p>
        </div>
      </footer>
    </>
  );
}

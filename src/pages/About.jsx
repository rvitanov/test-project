import React from 'react'

const team = [
  { name: 'Alice Johnson', title: 'CEO & Founder', src: '/team/alice.jpg' },
  { name: 'Bob Smith', title: 'Head of Engineering', src: '/team/bob.jpg' },
  { name: 'Carol White', title: 'Head of Design', src: '/team/carol.jpg' },
]

export default function About() {
  return (
    <div>
      <h1>About Us</h1>

      {/* a11y violation: jsx-a11y/no-distracting-elements — <marquee> is deprecated */}
      <marquee style={{ color: '#666', marginBottom: '1rem' }}>
        Established 2010 — Serving customers worldwide — ISO 9001 Certified
      </marquee>

      <p>
        Acme Corp is a global leader in innovative solutions. We are committed to
        delivering high-quality products and services to our clients.
      </p>

      <h2>Our Team</h2>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {team.map((member) => (
          <div key={member.name} style={{ textAlign: 'center', width: 160 }}>
            {/* a11y violation: jsx-a11y/alt-text — <img> missing alt attribute */}
            <img
              src={member.src}
              width="150"
              height="150"
              style={{ borderRadius: '50%', background: '#ddd', display: 'block' }}
            />
            <strong style={{ display: 'block', marginTop: '0.5rem' }}>{member.name}</strong>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>{member.title}</span>
          </div>
        ))}
      </div>

      <h2>Our Mission</h2>

      {/* a11y violation: jsx-a11y/no-noninteractive-tabindex — positive tabIndex on non-interactive element */}
      <blockquote
        tabIndex={3}
        style={{
          borderLeft: '4px solid #1a1a2e',
          paddingLeft: '1rem',
          fontStyle: 'italic',
          color: '#444',
          marginTop: '1rem',
        }}
      >
        "Our mission is to make technology accessible to everyone, everywhere."
      </blockquote>
    </div>
  )
}

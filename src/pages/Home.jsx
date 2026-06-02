import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Acme Corp</h1>

      {/* a11y violation: jsx-a11y/alt-text — <img> missing alt attribute */}
      <img src="/hero.jpg" width="800" height="300" style={{ width: '100%', borderRadius: 8 }} />

      <p style={{ marginTop: '1rem' }}>
        We build products that matter. Trusted by thousands of customers worldwide.
      </p>

      {/* a11y violation: jsx-a11y/no-static-element-interactions + jsx-a11y/click-events-have-key-events
          <div> with onClick but no role or keyboard handler */}
      <div
        onClick={() => alert('Promo clicked')}
        style={{
          background: '#e8f4fd',
          border: '1px solid #90caf9',
          padding: '1rem',
          marginTop: '1.5rem',
          cursor: 'pointer',
          borderRadius: 6,
        }}
      >
        🎉 Special offer — click to claim your 30% discount!
      </div>

      <p style={{ marginTop: '1.5rem' }}>
        Want to know more? <a href="/about">click here</a> to learn about our team.
      </p>

      {/* a11y violation: jsx-a11y/interactive-supports-focus — role="button" without tabIndex */}
      <div
        role="button"
        onClick={() => alert('Subscribed!')}
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.6rem 1.5rem',
          background: '#1a1a2e',
          color: 'white',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        Subscribe to Newsletter
      </div>
    </div>
  )
}

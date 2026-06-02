import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div>
        <h1>Thank You!</h1>
        <p>We've received your message and will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Fill out the form below and we'll get back to you within 24 hours.</p>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} style={{ marginTop: '1.5rem' }}>

        {/* a11y violation: jsx-a11y/label-has-associated-control — <label> not linked to any input (no htmlFor) */}
        <label>Full Name</label>
        <input type="text" name="name" />

        {/* a11y violation: jsx-a11y/label-has-associated-control — email input has no label at all */}
        <input type="email" name="email" placeholder="your@email.com" />

        {/* a11y violation: jsx-a11y/label-has-associated-control — htmlFor="wrong-id" doesn't match id="subject" */}
        <label htmlFor="wrong-id">Subject</label>
        <input type="text" id="subject" name="subject" />

        {/* a11y violation: jsx-a11y/label-has-associated-control — message field has no associated label */}
        <input type="text" name="message" placeholder="Your message here..." />

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button type="submit">Send Message</button>

          {/* a11y violation: jsx-a11y/no-static-element-interactions + jsx-a11y/click-events-have-key-events
              <div> acting as a reset button with no role or keyboard handler */}
          <div
            onClick={() => {}}
            style={{ cursor: 'pointer', color: '#666', textDecoration: 'underline' }}
          >
            Clear form
          </div>
        </div>
      </form>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer>
      <p>© 2024 Acme Corp. All rights reserved.</p>
      {/* a11y violation: jsx-a11y/anchor-is-valid — href="#" with no meaningful destination */}
      <a href="#">Privacy Policy</a>
      {' | '}
      {/* a11y violation: jsx-a11y/no-noninteractive-element-interactions — <p> with onClick */}
      <p onClick={() => alert('Cookie settings')}>Cookie Settings</p>
    </footer>
  )
}

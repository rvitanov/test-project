import React, { useState } from 'react'

const orders = [
  { id: 1001, product: 'Widget Pro', status: 'Shipped', total: '$49.99' },
  { id: 1002, product: 'Gadget Plus', status: 'Processing', total: '$89.99' },
  { id: 1003, product: 'Super Toolkit', status: 'Delivered', total: '$129.00' },
  { id: 1004, product: 'Starter Pack', status: 'Shipped', total: '$24.99' },
]

function LoginForm({ onLogin }) {
  return (
    <div>
      <h1>Dashboard Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); onLogin() }}>

        {/* a11y violation: jsx-a11y/label-has-associated-control — label not associated with input */}
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter username" />

        {/* a11y violation: jsx-a11y/label-has-associated-control — password input has no label */}
        <input type="password" name="password" placeholder="Enter password" />

        {/* a11y violation: jsx-a11y/no-access-key — accessKey causes conflicts with OS/browser shortcuts */}
        <button type="submit" accessKey="l">Login</button>
      </form>
    </div>
  )
}

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return <LoginForm onLogin={() => setLoggedIn(true)} />
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>

        {/* a11y violation: jsx-a11y/interactive-supports-focus + jsx-a11y/click-events-have-key-events
            role="button" without tabIndex or keyboard handler */}
        <div
          role="button"
          onClick={() => setLoggedIn(false)}
          style={{
            padding: '0.4rem 1rem',
            background: '#c0392b',
            color: 'white',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Logout
        </div>
      </div>

      <h2>Recent Orders</h2>

      {/* a11y violation: jsx-a11y/scope — <th> elements missing scope attribute */}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.product}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* a11y violation: jsx-a11y/no-noninteractive-tabindex — positive tabIndex on a <p> */}
      <p tabIndex={2} style={{ marginTop: '1.5rem', color: '#666' }}>
        Need help? Contact support at support@acmecorp.com
      </p>
    </div>
  )
}

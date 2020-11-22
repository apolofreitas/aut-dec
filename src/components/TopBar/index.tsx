import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useAuth } from 'src/hooks/auth'

import UserSettingsModal from './components/UserSettingsModal'

import styles from './styles.module.scss'

export default function TopBar() {
  const auth = useAuth()
  const { user } = auth

  const [showUserSettings, setShowUserSettings] = useState(false)

  function handleLogout(
    event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault()
    auth.signOut()
  }

  return (
    <>
      <Nav className="justify-content-end">
        <Nav.Item style={{ flex: 1 }}>
          <div style={{ padding: 16 }}>
            <Link to="/home">Home</Link>
            {auth.user.type === 'admin' && (
              <Link to="/admin" style={{ marginLeft: 8 }}>
                Admin
              </Link>
            )}
          </div>
        </Nav.Item>
        <Nav.Item className={styles.navUser}>
          <div>
            <p>{user.name}</p>
            <a href="/" onClick={handleLogout}>
              sair
            </a>
          </div>
          <BiUser size={50} onClick={() => setShowUserSettings(true)} />
        </Nav.Item>
      </Nav>
      <UserSettingsModal
        show={showUserSettings}
        onHide={() => setShowUserSettings(false)}
      />
    </>
  )
}

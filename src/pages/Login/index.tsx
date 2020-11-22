import React, { FormEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { useAuth } from 'src/hooks/auth'

import styles from './styles.module.scss'

export default function Home() {
  const auth = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    await auth.signIn({ email, password })
  }

  return (
    <main className={styles.container}>
      <Form className={styles.form} onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label className={styles.textFieldLabel}>E-mail</Form.Label>
          <Form.Control
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className={styles.textFieldLabel}>Senha</Form.Label>
          <Form.Control
            className={styles.textField}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className={styles.submit} type="submit">
          Entrar
        </Button>
      </Form>
    </main>
  )
}

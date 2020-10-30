import React, { FormEvent } from 'react'
import { Form, Button } from 'react-bootstrap'

import styles from './styles.module.scss'

export default function Home() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <main className={styles.container}>
      <Form className={styles.form} onSubmit={handleFormSubmit}>
        <Form.Group controlId="formUserInput">
          <Form.Label className={styles.textFieldLabel}>Usuário</Form.Label>
          <Form.Control
            className={styles.textFieldControl}
            size="lg"
            placeholder="Usuário"
          />
        </Form.Group>

        <Form.Group controlId="formPasswordInput">
          <Form.Label className={styles.textFieldLabel}>Senha</Form.Label>
          <Form.Control
            className={styles.textFieldControl}
            size="lg"
            type="password"
            placeholder="Senha"
          />
        </Form.Group>
        <Button className={styles.submit} size="lg" type="submit">
          Entrar
        </Button>
      </Form>
    </main>
  )
}

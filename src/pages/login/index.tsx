import { FormEvent } from 'react'
import { Form, Button } from 'react-bootstrap'

import styles from './styles.module.scss'

export default function Home() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <main className={styles.container}>
      <Form className={styles.form} onSubmit={handleFormSubmit}>
        <Form.Group className={styles.textField} controlId="formUserInput">
          <Form.Control size="lg" placeholder="Usuário" />
        </Form.Group>

        <Form.Group className={styles.textField} controlId="formPasswordInput">
          <Form.Control size="lg" type="password" placeholder="Senha" />
        </Form.Group>
        <Button className={styles.submit} size="lg" type="submit">
          Entrar
        </Button>
      </Form>
    </main>
  )
}

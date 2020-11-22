import React, { FormEvent, useState } from 'react'
import { Modal, Form, Button, ModalProps } from 'react-bootstrap'

import { useAuth } from 'src/hooks/auth'
import api from 'src/services/api'

import styles from './styles.module.scss'

export default function UserSettingsModal(
  props: ModalProps & { onHide: () => void },
) {
  const auth = useAuth()

  const [name, setName] = useState(auth.user.name)
  const [email, setEmail] = useState(auth.user.email)
  const [actualPassword, setActualPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  async function handleSettingsSave(event: FormEvent) {
    event.preventDefault()

    const {
      data: { user: actualUser },
    } = await api.post('user/authenticate', {
      email: auth.user.email,
      password: actualPassword,
    })

    if (!actualUser || actualUser._id !== auth.user._id) return

    const {
      data: { user: updatedUser },
    } = await api.put('user/update', {
      filter: {
        _id: auth.user._id,
      },
      update: {
        name,
        email,
        newPassword,
      },
    })

    auth.updateUser(updatedUser)

    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Configurações
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.form} onSubmit={handleSettingsSave}>
          <Form.Group className={styles.textField}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className={styles.textField}>
            <Form.Label>E-mail</Form.Label>{' '}
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className={styles.textField}>
            <Form.Label>Senha atual</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insira aqui sua senha"
              value={actualPassword}
              onChange={(e) => setActualPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className={styles.textField}>
            <Form.Label>Senha nova</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insira aqui sua senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <small>
              Se você não deseja trocar a senha, insira sua senha atual
              novamente.
            </small>
          </Form.Group>
          <Button onClick={() => props.onHide()}>Cancelar</Button>
          <Button style={{ marginLeft: '8px' }} type="submit">
            Salvar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

import React, { FormEvent, useState } from 'react'
import {
  Modal,
  Form,
  Button,
  ModalProps,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'

import User from 'src/interfaces/User'

import api from 'src/services/api'

import styles from './styles.module.scss'

export default function UpdateUserModal(
  props: ModalProps & { onHide: () => void; user: User },
) {
  const [name, setName] = useState(props.user.name)
  const [isAdmin, setIsAdmin] = useState(props.user.type === 'admin')
  const [email, setEmail] = useState(props.user.email)

  async function handleSettingsSave(event: FormEvent) {
    event.preventDefault()

    await api.put('user/update', {
      filter: {
        _id: props.user._id,
      },
      update: {
        name,
        type: isAdmin ? 'admin' : 'common',
        email,
      },
    })

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
        <Modal.Title id="contained-modal-title-vcenter">Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.form} onSubmit={handleSettingsSave}>
          <Form.Group className={styles.textField}>
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              placeholder="Insira aqui o nome do usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          Tipo
          <br />
          <DropdownButton
            as={ButtonGroup}
            title={isAdmin ? 'Administrador' : 'Normal'}
            style={{ marginTop: 8, marginBottom: 8 }}
          >
            <Dropdown.Item
              eventKey="2"
              active={!isAdmin}
              onClick={() => setIsAdmin(false)}
            >
              Normal
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="1"
              active={isAdmin}
              onClick={() => setIsAdmin(true)}
            >
              Administrador
            </Dropdown.Item>
          </DropdownButton>
          <Form.Group className={styles.textField}>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              placeholder="Insira aqui o e-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button onClick={() => props.onHide()}>Cancelar</Button>
          <Button style={{ marginLeft: 8 }} type="submit">
            Salvar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

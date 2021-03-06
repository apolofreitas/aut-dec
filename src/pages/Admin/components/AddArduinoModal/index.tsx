import React, { FormEvent, useState } from 'react'
import { Modal, Form, Button, ModalProps } from 'react-bootstrap'

import api from 'src/services/api'

import styles from './styles.module.scss'

export default function AddArduinoModal(
  props: ModalProps & { onHide: () => void },
) {
  const [IMEI, setImei] = useState('')
  const [info, setInfo] = useState('')

  async function handleSettingsSave(event: FormEvent) {
    event.preventDefault()

    await api.post('arduino/register', {
      IMEI: Number(IMEI),
      info,
      authorized: true,
    })

    setImei('')
    setInfo('')

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
        <Modal.Title id="contained-modal-title-vcenter">Arduino </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.form} onSubmit={handleSettingsSave}>
          <Form.Group className={styles.textField}>
            <Form.Label>IMEI</Form.Label>
            <Form.Control
              type="number"
              placeholder="Insira o código IMEI"
              value={IMEI}
              onChange={(e) => setImei(e.target.value)}
            />
          </Form.Group>

          <Form.Group className={styles.textField}>
            <Form.Label>Informações</Form.Label>
            <Form.Control
              placeholder="Insira informações sobre o arduino"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
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

import React, { FormEvent } from 'react'
import { Modal, Form, Button, ModalProps } from 'react-bootstrap'

import styles from './styles.module.scss'

export default function AddArduinoModal(
  props: ModalProps & { onHide: () => void },
) {
  function handleSettingsSave(event: FormEvent) {
    event.preventDefault()
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
          Adicionar Arduino
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={styles.form} onSubmit={handleSettingsSave}>
          <Form.Group className={styles.textField}>
            <Form.Label>IMEI</Form.Label>
            <Form.Control placeholder="Insira o código IMEI" />
          </Form.Group>

          <Form.Group className={styles.textField}>
            <Form.Label>Informações</Form.Label>
            <Form.Control placeholder="Insira informações sobre o arduino" />
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

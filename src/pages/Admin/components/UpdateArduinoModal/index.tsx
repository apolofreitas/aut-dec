import React, { FormEvent, useState } from 'react'
import { Modal, Form, Button, ModalProps } from 'react-bootstrap'

import Arduino from 'src/interfaces/Arduino'

import api from 'src/services/api'

import styles from './styles.module.scss'

export default function UpdateArduinoModal(
  props: ModalProps & { onHide: () => void; arduino: Arduino },
) {
  const [IMEI, setImei] = useState(String(props.arduino.IMEI))
  const [info, setInfo] = useState(props.arduino.info)

  async function handleSettingsSave(event: FormEvent) {
    event.preventDefault()

    await api.put('arduino/update', {
      filter: {
        _id: props.arduino._id,
      },
      update: {
        IMEI: Number(IMEI),
        info,
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

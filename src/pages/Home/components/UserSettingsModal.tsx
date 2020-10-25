import React, { FormEvent } from 'react';
import { Modal, Form, Button, ModalProps } from 'react-bootstrap';

import styles from './styles.module.scss';

export default function UserSettingsModal(
  props: ModalProps & { onHide: () => void }
) {
  function handleSettingsSave(event: FormEvent) {
    event.preventDefault();
    props.onHide();
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
          <Form.Group className={styles.textField} controlId="formUserInput">
            <Form.Label>Usuário</Form.Label>
            <Form.Control value="usuario atual" />
          </Form.Group>
          <Form.Group className={styles.textField} controlId="formEmailInput">
            <Form.Label>E-mail</Form.Label> <Form.Control value="email atual" />
          </Form.Group>
          <Form.Group
            className={styles.textField}
            controlId="formOldPasswordInput"
          >
            <Form.Label>Senha atual</Form.Label>
            <Form.Control type="password" placeholder="Insira aqui sua senha" />
          </Form.Group>
          <Form.Group
            className={styles.textField}
            controlId="formNewPasswordInput"
          >
            <Form.Label>Senha nova</Form.Label>
            <Form.Control type="password" placeholder="Insira aqui sua senha" />
          </Form.Group>
          <Button onClick={() => props.onHide()}>Cancelar</Button>
          <Button style={{ marginLeft: '8px' }} type="submit">
            Salvar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

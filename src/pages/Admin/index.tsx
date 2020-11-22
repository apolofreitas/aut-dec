import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi'

import TopBar from 'src/components/TopBar'
import AddUserModal from './components/AddUserModal'
import AddArduinoModal from './components/AddArduinoModal'

import styles from './styles.module.scss'

export default function Admin() {
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showAddArduinoModal, setShowAddArduinoModal] = useState(false)

  const users = [
    {
      name: 'nome',
      email: 'email1@email.com',
      createdAt: Date.now(),
    },
    {
      name: 'nome nome',
      email: 'email2@email.com',
      createdAt: Date.now(),
    },
    {
      name: 'nome nome nome',
      email: 'email3@email.com',
      createdAt: Date.now(),
    },

    {
      name: 'nome',
      email: 'email1@email.com',
      createdAt: Date.now(),
    },
    {
      name: 'nome nome',
      email: 'email2@email.com',
      createdAt: Date.now(),
    },
    {
      name: 'nome nome nome',
      email: 'email3@email.com',
      createdAt: Date.now(),
    },

    {
      name: 'nome',
      email: 'email1@email.com',
      createdAt: Date.now(),
    },
    {
      name: 'nome nome',
      email: 'email2@email.com',
      createdAt: Date.now(),
    },
    {
      name: 'nome nome nome',
      email: 'email3@email.com',
      createdAt: Date.now(),
    },
  ]

  const arduinos = [
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },

    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },

    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: Date.now(),
    },
  ]

  return (
    <>
      <TopBar />
      <main className={styles.container}>
        <div className={styles.tableContainer}>
          <h4>Usuários</h4>
          <Table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Data de criação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ name, email, createdAt }) => {
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{new Date(createdAt).toDateString()}</td>
                    <td>
                      <div className={styles.tableItemOptionContainer}>
                        <Button className={styles.tableItemOption} size="sm">
                          <HiPencilAlt />
                        </Button>
                        <Button className={styles.tableItemOption} size="sm">
                          <HiOutlineTrash />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Button
            className={styles.addButton}
            onClick={() => setShowAddUserModal(true)}
          >
            Adicionar Usuário
          </Button>
        </div>
        <div className={styles.tableContainer}>
          <h4>Arduinos</h4>
          <Table className={styles.table}>
            <thead>
              <tr>
                <th>Código IMEI</th>
                <th>Informações</th>
                <th>Data de criação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {arduinos.map(({ IMEI, info, createdAt }) => {
                return (
                  <tr>
                    <td>{IMEI}</td>
                    <td>{info}</td>
                    <td>{new Date(createdAt).toDateString()}</td>
                    <td className={styles.tableItemOptionContainer}>
                      <Button className={styles.tableItemOption} size="sm">
                        <HiPencilAlt />
                      </Button>
                      <Button className={styles.tableItemOption} size="sm">
                        <HiOutlineTrash />
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Button
            className={styles.addButton}
            onClick={() => setShowAddArduinoModal(true)}
          >
            Adicionar Arduino
          </Button>
        </div>

        <AddUserModal
          show={showAddUserModal}
          onHide={() => setShowAddUserModal(false)}
        />

        <AddArduinoModal
          show={showAddArduinoModal}
          onHide={() => setShowAddArduinoModal(false)}
        />
      </main>
    </>
  )
}

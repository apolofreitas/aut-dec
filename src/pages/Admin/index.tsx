import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi'

import styles from './styles.module.scss'

export default function Admin() {
  const users = [
    {
      name: 'nome',
      email: 'email1@email.com',
      createdAt: new Date(),
    },
    {
      name: 'nome nome',
      email: 'email2@email.com',
      createdAt: new Date(),
    },
    {
      name: 'nome nome nome',
      email: 'email3@email.com',
      createdAt: new Date(),
    },

    {
      name: 'nome',
      email: 'email1@email.com',
      createdAt: new Date(),
    },
    {
      name: 'nome nome',
      email: 'email2@email.com',
      createdAt: new Date(),
    },
    {
      name: 'nome nome nome',
      email: 'email3@email.com',
      createdAt: new Date(),
    },

    {
      name: 'nome',
      email: 'email1@email.com',
      createdAt: new Date(),
    },
    {
      name: 'nome nome',
      email: 'email2@email.com',
      createdAt: new Date(),
    },
    {
      name: 'nome nome nome',
      email: 'email3@email.com',
      createdAt: new Date(),
    },
  ]

  const arduinos = [
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },

    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },

    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
    {
      IMEI: 123,
      info: 'informações do arduino',
      createdAt: new Date(),
    },
  ]

  return (
    <main className={styles.container}>
      <div className={styles.tableContainer}>
        <h4>Usuários</h4>
        <Table className={styles.table} bordered>
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
                  <td>{createdAt.toDateString()}</td>
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
        <Button className={styles.addButton} onClick={() => {}}>
          Adicionar Usuário
        </Button>
      </div>
      <div className={styles.tableContainer}>
        <h4>Arduinos</h4>
        <Table className={styles.table} bordered>
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
                  <td>{createdAt.toDateString()}</td>
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
        <Button className={styles.addButton} onClick={() => {}}>
          Adicionar Arduino
        </Button>
      </div>
    </main>
  )
}

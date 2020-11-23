import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi'

import TopBar from 'src/components/TopBar'
import AddUserModal from './components/AddUserModal'
import AddArduinoModal from './components/AddArduinoModal'

import api from 'src/services/api'
import User from 'src/interfaces/User'

import styles from './styles.module.scss'
import Arduino from 'src/interfaces/Arduino'
import UpdateUserModal from './components/UpdateUserModal'
import UpdateArduinoModal from './components/UpdateArduinoModal'

export default function Admin() {
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showAddArduinoModal, setShowAddArduinoModal] = useState(false)

  const [selectedUserId, setSelectedUserId] = useState<string>()
  const [selectedArduinoId, setSelectedArduinoId] = useState<string>()

  const [users, setUsers] = useState<User[]>([])
  const [arduinos, setArduinos] = useState<Arduino[]>([])

  const refreshStates = () => {
    api.get('user/getAll').then(({ data: { users } }) => {
      setUsers(users)
    })
    api.get('arduino/getAll').then(({ data: { arduinos } }) => {
      setArduinos(arduinos)
    })
  }

  useEffect(refreshStates, [])

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
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{new Date(user.createdAt).toDateString()}</td>
                    <td>
                      <div className={styles.tableItemOptionContainer}>
                        <Button
                          className={styles.tableItemOption}
                          size="sm"
                          onClick={() => setSelectedUserId(user._id)}
                        >
                          <HiPencilAlt />
                        </Button>
                        <Button
                          className={styles.tableItemOption}
                          size="sm"
                          onClick={async () => {
                            await api.delete('user/delete', {
                              data: { filter: { _id: user._id } },
                            })
                            refreshStates()
                          }}
                        >
                          <HiOutlineTrash />
                        </Button>
                      </div>
                    </td>

                    <UpdateUserModal
                      show={selectedUserId === user._id}
                      user={user}
                      onHide={() => {
                        setSelectedUserId(undefined)
                        refreshStates()
                      }}
                    />
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
              {arduinos.map((arduino) => {
                return (
                  <tr key={arduino._id}>
                    <td>{arduino.IMEI}</td>
                    <td>{arduino.info}</td>
                    <td>{new Date(arduino.createdAt).toDateString()}</td>
                    <td className={styles.tableItemOptionContainer}>
                      <Button
                        className={styles.tableItemOption}
                        size="sm"
                        onClick={() => setSelectedArduinoId(arduino._id)}
                      >
                        <HiPencilAlt />
                      </Button>
                      <Button
                        className={styles.tableItemOption}
                        size="sm"
                        onClick={async () => {
                          await api.delete('arduino/delete', {
                            data: { filter: { _id: arduino._id } },
                          })
                          refreshStates()
                        }}
                      >
                        <HiOutlineTrash />
                      </Button>
                    </td>

                    <UpdateArduinoModal
                      show={selectedArduinoId === arduino._id}
                      arduino={arduino}
                      onHide={() => {
                        setSelectedArduinoId(undefined)
                        refreshStates()
                      }}
                    />
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
          onHide={() => {
            setShowAddUserModal(false)
            refreshStates()
          }}
        />
        <AddArduinoModal
          show={showAddArduinoModal}
          onHide={() => {
            setShowAddArduinoModal(false)
            refreshStates()
          }}
        />
      </main>
    </>
  )
}

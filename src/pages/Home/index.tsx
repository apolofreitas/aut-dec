import React, { useEffect, useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import { FaRegFlag } from 'react-icons/fa'
import { BiChip } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineToTop } from 'react-icons/ai'

import api from 'src/services/api'
import Pothole from 'src/interfaces/Pothole'
import Arduino from 'src/interfaces/Arduino'

import TopBar from 'src/components/TopBar'

import styles from './styles.module.scss'

export default function Home() {
  const [potholes, setPotholes] = useState<Pothole[]>([])
  const [arduinos, setArduinos] = useState<Arduino[]>([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { potholes },
      } = await api.get('pothole/getAll')

      const {
        data: { arduinos },
      } = await api.get('arduino/getAll')

      setArduinos(arduinos)
      setPotholes(potholes)
    })()
  }, [])

  return (
    <>
      <TopBar />
      <main className={styles.container}>
        <Accordion className={styles.accordion}>
          <h1 className={styles.accordionTitle}>Registros:</h1>
          {potholes.map((pothole, index) => {
            return (
              <Card key={pothole._id}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={String(index)}
                  className={styles.cardHeader}
                >
                  <FaRegFlag size={25} />
                  {
                    arduinos.find(
                      (arduino) => arduino.IMEI === pothole.senderIMEI,
                    )?.info
                  }
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.info}>
                      <div>
                        <HiOutlineLocationMarker size={22} />
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`http://maps.google.com/maps?q=${pothole.coordinates.latitude},${pothole.coordinates.longitude}`}
                        >
                          {`${pothole.coordinates.latitude}, ${pothole.coordinates.longitude}`}
                        </a>
                      </div>
                      <div>
                        <BiChip size={22} fontSizeAdjust="none" />
                        {pothole.senderIMEI}
                      </div>
                      <div>
                        <AiOutlineToTop size={22} fontSizeAdjust="none" />
                        {pothole.sensorDistance}cm
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })}
        </Accordion>
      </main>
    </>
  )
}

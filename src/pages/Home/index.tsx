import React, { useEffect, useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import { FaRegFlag } from 'react-icons/fa'
import { BiChip } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineToTop } from 'react-icons/ai'

import api from 'src/services/api'

import TopBar from 'src/components/TopBar'

import styles from './styles.module.scss'

interface Pothole {
  _id: string
  coordinates: {
    latitude: number
    longitude: number
  }
  senderIMEI: number
  sensorDistance: number
  info: string
}

export default function Home() {
  const [potholes, setPotholes] = useState<Pothole[]>([])

  useEffect(() => {
    api
      .get('pothole/getAll')
      .then(({ data: { potholes } }) => setPotholes(potholes))
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
                  {pothole.info}
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

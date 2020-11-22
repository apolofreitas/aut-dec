import React, { useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import { FaRegFlag } from 'react-icons/fa'
import { BiChip } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineToTop } from 'react-icons/ai'

import styles from './styles.module.scss'
import TopBar from 'src/components/TopBar'

export default function Home() {
  const arduinos = [
    {
      coordinates: {
        latitude: -22.9140693,
        longitude: -43.5860659,
      },
      senderIMEI: 12312,
      sensorDistance: 4.32,
      info: 'informações adicionais',
    },
    {
      coordinates: {
        latitude: 1231,
        longitude: 1231,
      },
      senderIMEI: 12312,
      sensorDistance: 4.32,
      info: 'informações adicionais',
    },
    {
      coordinates: {
        latitude: 1231,
        longitude: 1231,
      },
      senderIMEI: 12312,
      sensorDistance: 4.32,
      info: 'informações adicionais',
    },
  ]

  return (
    <>
      <TopBar />
      <main className={styles.container}>
        <Accordion className={styles.accordion}>
          <h1 className={styles.accordionTitle}>Registros:</h1>
          {arduinos.map((arduino, index) => {
            return (
              <Card key={index}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={String(index)}
                  className={styles.cardHeader}
                >
                  <FaRegFlag size={25} />
                  {arduino.info}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.info}>
                      <div>
                        <HiOutlineLocationMarker size={22} />
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`http://maps.google.com/maps?q=${arduino.coordinates.latitude},${arduino.coordinates.longitude}`}
                        >
                          {`${arduino.coordinates.latitude}, ${arduino.coordinates.longitude}`}
                        </a>
                      </div>
                      <div>
                        <BiChip size={22} fontSizeAdjust="none" />
                        {arduino.senderIMEI}
                      </div>
                      <div>
                        <AiOutlineToTop size={22} fontSizeAdjust="none" />
                        {arduino.sensorDistance}cm
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

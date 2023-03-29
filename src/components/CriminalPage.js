import React from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import styles from './CriminalPage.module.css';

function CriminalPage({ data, handleCriminalCardClick }) {
  return (
    <Container breakpoint="xxl" className="mx-auto">
      <Row className="g-3 py-1">
        {(data || []).map(
          fbiItem =>
            fbiItem?.isSelected && (
              <Col key={fbiItem?.uid}>
                <Card style={{ width: '19rem', height: '34rem' }} className="overflow-hidden mx-auto">
                  <Card.Img
                    style={{ objectFit: 'cover', width: '100%', minHeight: '18rem', maxHeight: '20vh' }}
                    variant="top"
                    src={fbiItem?.images?.[0]?.thumb}
                    className="img-thumbnail"
                  />
                  <Card.Body>
                    <Card.Title className={styles.customCardTitle}>{fbiItem?.title}</Card.Title>{' '}
                    {/*needs more work: some of the title is not visible if title is more than two lines long*/}
                    {/* {fbiItem?.aliases ? <Card.Subtitle className={styles.customSubtitle}>Aliases: {fbiItem?.aliases}</Card.Subtitle> : <Card.Subtitle className={styles.customSubtitle}>Aliases: N/A</Card.Subtitle>} */}
                    <Card.Text className={styles.cardText}>{fbiItem?.description}</Card.Text>
                    <Card.Footer className={styles.cardFooter}>
                      <Button className={styles.cardButton} name={fbiItem?.uid} onClick={handleCriminalCardClick} variant="dark">
                        Learn More
                      </Button>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ),
        )}
      </Row>
    </Container>
  );
}

export default CriminalPage;

// import React from 'react'
// import { Card, Col, Row, Button, Container } from 'react-bootstrap';
// import styles from './CriminalCard.module.css'

// function CriminalCard({data}) {
//     console.log(data)
//     const wantedIndividual = data?.item?.map(fbiItem => 
//         fbiItem?.isSelected && (
//             <Col key={fbiItem?.uid}>
//                 <Card style={{ width: '19rem', height: '34rem'}} className="overflow-hidden mx-auto" >
//                 <Card.Img style={{objectFit: 'cover', width: '100%', minHeight: '18rem', maxHeight: '20vh' }} variant="top" src={fbiItem?.images?.[0]?.thumb} className="img-thumbnail"/>
//                 <Card.Body >
//                 <Card.Title className="">{fbiItem?.title}</Card.Title>
//                 {fbiItem?.aliases ? <Card.Subtitle>Aliases: {fbiItem?.aliases}</Card.Subtitle> : <Card.Subtitle>Aliases: N/A</Card.Subtitle>}
//                 <Card.Text className={styles.textScroll}>
//                     {fbiItem?.description}
//                 </Card.Text >
//                 <Card.Footer>
//                     <Button variant="dark">Learn More</Button>
//                 </Card.Footer>
//                 </Card.Body>
//                 </Card>
//             </Col>
//         ))
    
//     return (
//         <Container breakpoint="xxl" className="mx-auto" >
//             <Row className="g-3 py-1">
//                 {wantedIndividual}
//             </Row>
//         </Container>
//     )
// }

// export default CriminalCard


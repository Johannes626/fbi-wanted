import './App.css';
import FetchData from './components/APIProxy';
import NavBarComponent from './components/NavBarComponent'
// import CriminalCard from './components/CriminalCard'
// import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import {
  Routes,
  Route,
} from "react-router-dom";
// import styles from './components/App.module.css'
import {useQuery} from '@tanstack/react-query'

function App() {
  /* const [fbiData, setFbiData] = useState([])*/
  
  const fetchFBIData = new FetchData('https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc')
  
  const {data, isLoading, isError} = useQuery(['_fbiData'], ()=>{
    return fetchFBIData.getData().then((fbiData) => fbiData?.items?.map((datum)=> ({
      ...datum,
    isSelected: true
    })))
  });
  console.log(data)
  // useEffect(() => {
  //   fetchFBIData.getData()
  //   .then(data => setFbiData(data.items.map((datum) => ({
  //     ...datum,
  //     isSelected: true
  //   }))))
  // }, [])

  // console.log(fbiData)

  // react query - how can you update the apiProxy to use that
  // styling fixes and module renaming/refactor
  // add learn more page
  
  const wantedIndividual = data?.item?.map(fbiItem => 
  fbiItem?.isSelected && (
    <Col key={fbiItem?.uid}>
      <Card style={{ width: '19rem', height: '34rem'}} className="overflow-hidden mx-auto" >
        <Card.Img style={{objectFit: 'cover', width: '100%', minHeight: '18rem', maxHeight: '20vh' }} variant="top" src={fbiItem?.images?.[0]?.thumb} className="img-thumbnail"/>
        <Card.Body >
        <Card.Title className="">{fbiItem?.title}</Card.Title>
        {fbiItem?.aliases ? <Card.Subtitle>Aliases: {fbiItem?.aliases}</Card.Subtitle> : <Card.Subtitle>Aliases: N/A</Card.Subtitle>}
        <Card.Text>
          {fbiItem?.description}
        </Card.Text >
        <Card.Footer>
          <Button variant="dark">Learn More</Button>
        </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  ))

  // const filterCriminals = (e) => {
  //   const searchTerm = e.target.value
  //   const fbiData = data;
  //   fbiData.map((fbiItem)=>{
  //     return {
  //       ...fbiItem,
  //       isSelected: fbiItem.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     }
  //   })
  // }

  return (
    <div className="App">
        {/* <input onChange={filterCriminals}/> */}
        <NavBarComponent/>
        <Routes>
          <Route path="/" element={
            <Container breakpoint="xxl" className="mx-auto" >
              <Row className="g-3 py-1">{isLoading ? "Loading": wantedIndividual}</Row>
            </Container>}
          />
        </Routes>
    </div>
  );
}

export default App;

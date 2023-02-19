import './App.css';
import FetchData from './components/APIProxy';
import NavBarComponent from './components/NavBarComponent'
import CriminalCard from './components/CriminalCard'
import CriminalModal from './components/CriminalModal';
import {useState} from 'react';
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
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const fetchFBIData = new FetchData('https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc')
  

  const {data, isLoading, isError} = useQuery(['_fbiData'], ()=>{
    return fetchFBIData.getData().then((fbiData) => fbiData?.items?.map((datum)=> ({
      ...datum,
    isSelected: true
    })))
  });
  console.log(data) // QUESTION: react query is supposed to be caching, but the loading screen come up no matter what
                              // which makes me think its not caching

  const handleCriminalCardClick = (e) => {
    setModalShow(true);
    (data || []).map((item)=>{
      if(e.target.name === item.uid){
        setModalData(item) // QUESTION: finds item to compare and then use to fill modal data, is this best practice?
      }
    })
  }
  console.log(modalData)

  // react query - how can you update the apiProxy to use that --DONE
  // styling fixes and module renaming/refactor --SEMI COMPLETE
  // add learn more page --SEMI COMPLETE

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
          <CriminalModal modalShow={modalShow} hideModal={()=>{setModalShow(false)}} modalData={modalData}/>
          <Routes>
              <Route path="/" element={isLoading ? "Loading..." : <CriminalCard data={data} handleCriminalCardClick={handleCriminalCardClick}/>}/>
              <Route path="link" element={<h2>HELLO THERE</h2>}/>
          </Routes>
      </div>
    );
}

export default App;

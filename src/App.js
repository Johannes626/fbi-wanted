import FetchData from './components/APIProxy';
import NavBarComponent from './components/NavBarComponent';
import CriminalPage from './components/CriminalPage';
import CriminalModal from './components/CriminalModal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function App() {
  
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const fetchFBIData = new FetchData('https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc');

  const { data, isLoading, isError } = useQuery(
    ['_fbiData'],
    () => {
      return fetchFBIData.getData().then(fbiData =>
        fbiData?.items?.map(datum => ({
          ...datum,
          isSelected: true,
        })),
      );
    },
    { staleTime: Infinity },
  );
  console.log(data)

  const handleCriminalCardClick = e => {
    const cardToFind = (data || []).find(item => {
      return e.target.name === item.uid;
    });
    if (cardToFind) {
      setModalData(cardToFind);
      setModalShow(true);
    }
  };
  // -------SEARCH FUNCTION COMPLETE, HOWEVER I WOULD LIKE TO WAIT FOR IMPLIMENTATION-------
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
  // ---------------------------------------------------------------------------------
  return (
    <div className="App">
      {/* <input onChange={filterCriminals}/> -----WAITING TO IMPLEMENT-----*/ } 
      <NavBarComponent />
      <CriminalModal
        modalShow={modalShow}
        hideModal={() => {
          setModalShow(false);
        }}
        modalData={modalData}
      />
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <Container className="d-flex justify-content-center">
                <Spinner animation="border" className="mx-auto" />
              </Container>
            ) : (
              <CriminalPage data={data} handleCriminalCardClick={handleCriminalCardClick} />
            )
          }
        />
        <Route path="link" element={<h2>THIS PART OF THE APPLICATION IS STILL BEING DEVELOPED, UPDATES COMING SOON!</h2>} />
      </Routes>
    </div>
  );
}

export default App;

//dangerouslysetinnerhtml - future potential use to fix description information from API

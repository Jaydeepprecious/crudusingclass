
import { Component } from 'react';
import './App.css';
// import Classbased from './Component/Classbased';




import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import { Routes, Route, BrowserRouter } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter >

          <Routes>
            <Route exact path="/"element={<Create />} />
              <Route exact path="/read" element={<Read />} />
              <Route exact path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
        {/* <Classbased/> */}
      </>
    );
  }
}

export default App;

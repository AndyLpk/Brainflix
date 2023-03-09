
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage"
import './App.scss';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/videos/:videoId' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

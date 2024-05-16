import react, { useEffect, useState } from "react"
import axios from 'axios'
import ImageUpload from "./Components/ImageUpload"
import Navbar from "./Components/Navbar"
import HeadSection from "./Components/HeadSection"
import AISection from "./Components/AISection"
import { AllRoutes } from "./AllRoutes/AllRoutes"
import { Homepage } from "./Components/Homepage"
import ContactUs from "./Components/ContactUs"
import FileUploader from "./Components/FileUploader"
import Footer from "./Components/Footer"

import "./App.css"
function App() {
  const [data, setData] = useState({})


  // useEffect(() => {
  //   fetchData()
  // }, [])

  const fetchData = async () => {
    await axios.get("http://localhost:5000/app/data")
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => { console.log(err) })
  }


  return (
    <div>
      {/* <h1>{data.message}</h1> */}
      {/* <ImageUpload /> */}
      <Navbar />
      <AllRoutes />
      {/* <FileUploader/> */}
      <Footer/>
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;

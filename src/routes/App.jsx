import { Outlet } from "react-router"
import Bag from "./Bag"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeItem from "../components/HomeItem"
import { items } from "../data/items"
import FetchItems from "../components/FetchItems"
import { TailSpin } from 'react-loader-spinner'
import { useSelector } from "react-redux"
import Spinner from "../components/Spinner"


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App

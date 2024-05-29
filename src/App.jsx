
import Header from "./component/Header.jsx"
import Restaurants from "./component/Restaurants.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Topsec from "./component/Topsec.jsx"


const Home = () => {
    return (
      <>
      
        <Header />
        <Topsec />
        <Restaurants />
        
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
      
    },
  ]);
  
  const App = () => {
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default App
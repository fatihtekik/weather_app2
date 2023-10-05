import { useState } from "react";
import { useParams } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter,Link, Outlet, Route , RouterProvider} from "react-router-dom"
import HomePage from "./componens/Home.js";
import Search from './componens/Search.js'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index path=":cityName" element = {<HomePage/>}/>
    <Route path='/search' element = {<Search/>}/>
      <Route path="/profile" element ={<ProfilePage/>}/>
  </Route>
))
function ProfilePage(){
  return <h1>Profile</h1>
}

function RootLayout(){
  return <>
  <div>
    <Link to = '/'>Home</Link>
    <Link to = '/search'>search</Link>
    <Link to = '/profile'>profile</Link>
    <Outlet/>
  </div>
  
  </>
 
}

function App() {
    return <RouterProvider router={router}/>
}

export default App;

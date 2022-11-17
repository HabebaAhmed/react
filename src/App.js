import logo from './logo.svg';
import Layout from './Layout/Layout';
import{createBrowserRouter,RouterProvider}  from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from "./Portfolio/Portfolio";
import Contact from './Contact/Contact';
import './App.css';

const rout=createBrowserRouter([
 { path:'/' ,element:<Layout/>,children:[
  {index:true,element:<Home/>},
  { path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>}

 ]}
])

function App() {
  return (
    <>
  <RouterProvider router={rout}/>
    </>
  );
}

export default App;

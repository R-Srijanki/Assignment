import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Account from './components/Account.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
const appRouter=createBrowserRouter([
  
   
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/account",
       element: (
        <ProtectedRoute>
          <Account />
        </ProtectedRoute>
      ),
      }
    ]
  
)
function App() {
  

  return (
    <>
       <RouterProvider router={appRouter}/>
    </>
  )
}

export default App

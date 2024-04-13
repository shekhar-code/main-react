
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import authService from './appwrite/auth'
import {useDispatch} from 'react-redux'
import {login , logout} from './store/authSlice'
import {Header , Footer} from './components'

function App() {
  // const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {

    authService.getCurrentUser()
    .then( (userData) => {
        if(userData){
          dispatch(login({userData}))
        }
        else {
          dispatch(logout())
        }
    } )
    .finally( () => setLoading(false))
  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         TODO:  {/*<Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

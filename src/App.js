import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './app.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inventory from './pages/inventory/Inventory'
import Forecast from './pages/forecast/Forecast'
import History from './pages/history/History'
import Task from './pages/task/Task'
import Login from './Login'
import HistoryView from './pages/history/HistoryView'
import { useState } from 'react'
import Barcode from './pages/barcode/Barcode'
import DataBase from './DataBase'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const loginHandler = () => {
    setIsLogin(!isLogin)
  }
  return (
    <>
      {!isLogin && <Login onLogin={loginHandler} />}
      {isLogin && (
        <Router>
          <Topbar onLogout={loginHandler} />
          <div className='container'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/inventory' element={<Inventory />} />
              <Route path='/inventory/:productId' element={<Inventory />} />
              <Route path='/:taskId' element={<Task />} />
              <Route path='/barcode' element={<Barcode />} />
              <Route path='/forecast' element={<Forecast />} />
              <Route path='/history' element={<History />} />
              <Route path='/history/:taskId' element={<HistoryView />} />
              <Route path='/db' element={<DataBase />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  )
}

export default App

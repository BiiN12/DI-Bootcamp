import { Routes, Route } from 'react-router-dom'
import ShopLayout from './layouts/ShopLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Shop from './pages/Shop'
import ErrorBoundary from './components/ErrorBoundary'
import PostList from './components/PostList'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<ShopLayout />}>
          <Route index element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path='profile' element={<ErrorBoundary><Profile /></ErrorBoundary>} />
          <Route path='shop' element={<ErrorBoundary><Shop /></ErrorBoundary>} />
        </Route>
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
      <hr />
      <PostList />
      <hr />
    </>
  )
}

export default App

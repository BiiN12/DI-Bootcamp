import { Outlet, NavLink } from 'react-router-dom'
import './ShopLayout.css'

function ShopLayout() {
  return (
    <>
        <nav>
            <NavLink to={'/'} className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>Home</NavLink>
            <NavLink to={'/profile'} className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>Profile</NavLink>
            <NavLink to={'/shop'} className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>Shop</NavLink>
        </nav>

        <Outlet />
    </>
  )
}

export default ShopLayout
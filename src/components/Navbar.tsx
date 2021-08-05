import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FOUR_COLUMNS_PATH, ONE_COLUMNS_PATH,
  THREE_COLUMNS_PATH, TWO_COLUMNS_PATH
} from '../lib/routePathes'

const NavWrapper = ({ to, name }: { to: string, name: string | ReactElement }) => (
  <NavLink
    exact
    to={to}
    activeClassName="bg-blue-200"
    className="hover:bg-blue-100 transition-colors duration-500"
  >
    <div className="py-3 text-center">
      <div>{name}</div>
      <div>{Number(name) > 1 ? 'windows' : 'window'}</div>
    </div>
  </NavLink>
)

const Navbar = () => (
  <div className="grid grid-cols-auto grid-flow-col pb-2">
    {/* <NavWrapper to={ROOT_PATH} name={<StarIcon />} /> */}
    <NavWrapper to={ONE_COLUMNS_PATH} name="1" />
    <NavWrapper to={TWO_COLUMNS_PATH} name="2" />
    <NavWrapper to={THREE_COLUMNS_PATH} name="3" />
    <NavWrapper to={FOUR_COLUMNS_PATH} name="4" />
  </div>
)

export default Navbar

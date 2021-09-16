import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { getMessage } from '../lib/locales'
import {
  FOUR_COLUMNS_PATH,
  ROOT_PATH,
  THREE_COLUMNS_PATH, TWO_COLUMNS_PATH
} from '../lib/routePathes'
import Window1Icon from './icons/Window1Icon'
import Window2Icon from './icons/Window2Icon'
import Window3Icon from './icons/Window3Icon'
import Window4Icon from './icons/Window4Icon'

const NavWrapper = ({ to, name }: { to: string, name: string | ReactElement }) => (
  <NavLink
    exact
    to={to}
    activeClassName="bg-layout-important"
    className="hover:bg-layout-main transition-colors duration-500 bg-layout-inactive"
  >
    <div className="flex flex-col gap-1 py-3 text-center">
      <div className="flex gap-2 items-center justify-center text-center">
        <div className="text-layout-white text-4xl">
          {name}
        </div>
        {Number(name) === 1 ? <Window1Icon /> : null}
        {Number(name) === 2 ? <Window2Icon /> : null}
        {Number(name) === 3 ? <Window3Icon /> : null}
        {Number(name) === 4 ? <Window4Icon /> : null}
      </div>
      <div className="text-layout-white uppercase text-center font-bold text-sm">
        {getMessage(Number(name) > 1 ? 'windows' : 'window')}
      </div>
    </div>
  </NavLink>
)

const Navbar = () => (
  <div className="grid grid-cols-auto grid-flow-col gap-2 mt-2 grid-cols-4">
    <NavWrapper to={ROOT_PATH} name="1" />
    <NavWrapper to={TWO_COLUMNS_PATH} name="2" />
    <NavWrapper to={THREE_COLUMNS_PATH} name="3" />
    <NavWrapper to={FOUR_COLUMNS_PATH} name="4" />
  </div>
)

export default Navbar

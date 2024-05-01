import React from 'react'
import classNames from 'classnames'
import For from '../For/For'
import { NavLink } from 'react-router-dom'

const PrimaryNavigation = ({ items }) => {
  console.log("🚀 ~ items:", items)
  return (
    <nav>
    	<ul>
      	<For each={items}>
        	{
          	({ title, to }) => (
            	<li key={title}>
              	<NavLink
              	className={
                	({ isActive }) => classNames([
                  	'd-flex align-items-start flex-grow-0 text-decoration-none text-uppcase py-2 px-0 text-white primary-navigation_item border-bottom border-4',
                  	{
                    	'border-pink ': isActive
                  	}
                	])
              	}
              	to={to}
              	>
              	<span className="primary-navigation_badge flex-grow-0">{title}</span>
              	</NavLink>
            	</li>
            )
        	}
      	</For>
    	</ul>
  	</nav>
  )
}


export default PrimaryNavigation

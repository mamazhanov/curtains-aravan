import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    return (
        <div>
            <div className={s.header}>
                <strong>
                    ШТОРЫ АРАВАН
                </strong>
                <div className={s.links}>
                    <NavLink to="/retails" activeClassName={s.activeLink}>
                        <div className={s.link}>
                            Розничные
                        </div>
                    </NavLink>
                    <NavLink to="/orders" activeClassName={s.activeLink}>
                        <div className={s.link}>
                            Заказы
                        </div>
                    </NavLink>
                </div>
            </div >
        </div>
    )
}

export default Header

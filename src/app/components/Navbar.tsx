import React from 'react';
import styles from './Navbar.module.css';
import {IoSearchOutline} from "react-icons/io5";
import {LuSettings2} from "react-icons/lu";
import {TbArrowSort} from "react-icons/tb";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import {LuShoppingCart} from "react-icons/lu";
import {BsThreeDotsVertical} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.left}>
            <span className={styles.logo}>kindle</span>
            <div className={styles.searchBox}>
                <IoSearchOutline className={styles.searchIcon}/>
                <input
                    type="text"
                    placeholder="Search your Kindle"
                    className={styles.searchInput}/>
            </div>
            <div className={styles.right}>
                <div className={styles.menuItem}>
                    <LuSettings2 className={styles.filterIcon}/>
                    <span className={styles.menuText}>Filter</span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import styles from "./Navbar.module.css"

import logo from "../../img/ControlTB-nav.png"
import { Link } from "react-router-dom"

import {BiSearchAlt} from "react-icons/bi"

const Navbar = () => {
  return (
    <div>
        <div className={styles.topBar}></div>
        <nav className={styles.navbar}>
            <Link to="/">
                <img className={styles.imgLogo} src={logo} alt="Control TB" />
            </Link>
            <div>
                <button className={styles.btnSrc}>
                    <BiSearchAlt className={styles.icon} />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
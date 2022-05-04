import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'



const Navbar = () => {
    return (
        <div className={styles.bg}>
            <div>
                <span>
                    <Link href="/">Home</Link>
                </span>
            </div>
            <div>
                <span>
                    <Link href="/about">About</Link>
                </span>
            </div>
            <div>
                <span>
                    <Link href="/contact">Contact</Link>
                </span>
            </div>
            <div>
                <span>
                    <Link href="/postes">Postes</Link>
                </span>
            </div>
        </div>
    )
}

export default Navbar
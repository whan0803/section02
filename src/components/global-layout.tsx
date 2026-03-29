import style from './global-layout.module.css'

import { ReactNode } from "react"
import Link from "next/link"
const GlobalLayout = ({children}: {children: ReactNode}) => {
    return(
        <div className={style.container}>
            <header className={style.header}>
                <Link href={'/'}>📚 ONBITE BOOKS</Link>
            </header>
            <main className={style.main}>
                {children}
            </main>
            <footer className={style.footer}>제작 @whan0803</footer>
        </div>
    )
}

export default GlobalLayout
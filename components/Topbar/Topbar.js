// core
import Head from 'next/head'
import Link from 'next/link'
// css
import styles from './styles/index.module.css'
// image
import { Logo } from "../../static/images"

export default props => {
    // props
    const { page } = props
    return (
        <div className={styles.topbar}>
			<Head>
                <title>{page}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo" className={styles.logoImage}/>
            </div>
            <div className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.list}>
                        <Link href="/">
                            <a className={styles.listHref}>HOME</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/history">
                            <a className={styles.listHref}>HISTORY</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/airmax1">
                            <a className={styles.listHref}>AIRMAX1</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/huarache">
                            <a className={styles.listHref}>HUARACHE</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/airmax97">
                            <a className={styles.listHref}>AIRMAX97</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/photo">
                            <a className={styles.listHref}>PHOTO</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
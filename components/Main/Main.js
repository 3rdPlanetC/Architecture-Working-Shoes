// css
import styles from './styles/index.module.css'

export default props => {
    // props
    const { children, banner, bgColor } = props
    return (
        <main className={styles.main} style={{backgroundColor: bgColor}}>
            <div className={styles.mainBanner}>
                <img src={banner} width="100%" className="container"/>
            </div>
            {children}
        </main>
    )
}
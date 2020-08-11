// components
import { Topbar, Main, Footer } from '../components'
// images
import { PhotoBanner, Photo } from '../static/images'
// css
import styles from '../static/styles/pages/photo/index.module.css'

const Photopage = props => {
	return (
		<div>
			<Topbar page="Shoes - Photo"/>
			<Main banner={PhotoBanner} bgColor="#3f3f3f">
				<div className={styles.content}>
                    <div className={styles.content_1}>
                        <img src={Photo.image1} alt="Photo Nike Image 1" width="100%"/>
                    </div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Photopage

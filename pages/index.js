// components
import { Topbar, Main, Footer } from '../components'
// images
import { HomeBanner, Home } from '../static/images'
// css
import styles from '../static/styles/pages/index/index.module.css'

const Homepage = props => {
	return (
		<div>
			<Topbar page="Shoes - Homepage"/>
			<Main banner={HomeBanner} bgColor="white">
				<div className={styles.content}>
					<div className={styles.content_1}>
						<span>
							ไนกี้ (อังกฤษ: Nike) เป็นบริษัทผลิตเครื่องกีฬา อย่างรองเท้า อุปกรณ์กีฬา เสื้อผ้าเครื่องแต่งกาย มีบริษัทอยู่ที่ 
							สหรัฐอเมริกา ก่อตั้งโดย บิลล์ บาวตอริแมน และ ฟิล ไบต์ ประวัต 1962 ไบต์ได้ทำการค้นคว้าข้อมูลและพบว่ารองเท้า
							กีฬาจากประเทศญี่ปุ่นมีคุณภาพดีและมีราคาถูกกว่าสินค้ากีฬาจากประเทศเยอรมนีซึ่งเป็นผู้นำ และหลังจากไบต์เรียนจบด้าน MBA 
							จึงได้ออกเดินทางไปทั่วโลก และไปที่ประเทศญี่ปุ่นซึ่งเขาได้มีโอกาสพบกับ Onitsuka Tiger Company โรงงานผลิตรองเท้ากีฬาของญี่ปุ่น 
							และชักชวนให้ Tiger ขยายตลาดเข้ามาในอเมริกา
						</span>
					</div>
					<div className={styles.content_2}>
						<img src={Home.image1} alt="Nike Image"/>
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Homepage

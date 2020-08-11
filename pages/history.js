// components
import { Topbar, Main, Footer } from '../components'
// images
import { HistoryBanner, History } from '../static/images'
// css
import styles from '../static/styles/pages/history/index.module.css'

const Historypage = props => {
	return (
		<div>
			<Topbar page="Shoes - History"/>
			<Main banner={HistoryBanner} bgColor="purple">
				<div className={styles.content}>
					<div className={styles.content_1}>
						<p className={styles.content_1_p}>ทำไมถึงชอบสะสมรองเท้า?</p>
                        <span>
                            เพราะเป็นคนชอบแต่งตัวและคิดว่ารองเท้าเป็นของที่สำคัญและคุ้มที่สุดที่จะซื้อ 
                            เพราในปัจจุบันคิดว่ามันป๊อปมาก ทั้งสีสันและรูปทรงของมันแถมยังมีหลากหลายแบบให้สะสม 
                            ทุกวันนี้รองเท้าเป็นไอเทมสำคัญให้วัยรุ่นในการแต่งตัวต่างๆ แต่งยังไงให้เข้าใส่รองเท้าแบบไหน 
                            รุ่นอะไรสีอะไร ปัจจุบันรองเท้ามีราคาสูงขึ้นมาก เนื่องจากจำนวนจำกัดและการปั่นราคา บางรุ่นก็หาซื้อไม่ได้ตามร้านทั่วไป 
                            บางรุ่นต้องไปต่อคิวซื้อ หรือสั่งจากต่างประเทศ ปัจจุบันตัวเองมีรองเท้ามากกว่า 20 คู่ หลากหลายยี่ห้อ แต่ชอบรองเท้า Nike 
                            ที่สุด เพราะคิดว่ารูปทรงมันสวยงามและสีสันสดใส แต่ก่อนมักสะสมรองเท้าหนัง เพราะชอบนำไปใช้แต่งตัวแต่งตัวสไตล์นี้ เลบคิดว่ากระแสรองเท้าก็มาพร้อมกับการแต่งตัว 
                            แต่งตัวแนวไหน ก็มักจะชอบรองเท้าแนวนั้น
                        </span>
					</div>
					<div className={styles.content_2}>
						<img src={History.image1} alt="History Nike Image" width="400" height="400"/>
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Historypage

// components
import { Topbar, Main, Footer } from '../components'
// images
import { Airmax1Banner, Airmax1 } from '../static/images'
// css
import styles from '../static/styles/pages/airmax1/index.module.css'

const Airmax1page = props => {
	return (
		<div>
			<Topbar page="Shoes - Airmax1"/>
			<Main banner={Airmax1Banner} bgColor="red">
				<div className={styles.content}>
					<div className={styles.content_1}>
                        <div className={styles.content_1_left}>
                            <h2 className={styles.content_1_left_h2}>NIKE AIRMAX 1</h2>
                            <span>รองเท้าคู๋นี้เป็นคู่แรกในการเริ่มสะสมรองเท้า Nike คู่นี้ไม่ได้เป็นคนซื้อและเลือกเอง ได้มาเพราะความบังเอิญ เนื่องจากพ่อและแม่เดินทางไปเที่ยวประเทศญี่ปุ่น ซึ่งตอนนั้นก็อยากได้อีกคู๋แต่พ่อหามาให้ไม่ได้เลยหยิบคู่นี้มาแทน</span>
                        </div>
                        <div className={styles.content_1_right}>
                            <h2 className={styles.content_1_right_h2}>NIKE AIR MAX 1</h2>
                            <img src={Airmax1.image1} alt="Airmax1 Nike Image 1" width="100%"/>
                        </div>
					</div>
					<div className={styles.content_2}>
                        <span>Nike air max 1 เป็นรองเท้าที่ใส่เข้ากับเสื้อผ้าได้ง่ายและ สวมง่ายใส่สบายและราคาของรองเท้ารุ่นนี้ถือว่า แพงในระดับหนึ่ง แต่จับต้องได้ง่าย และมักเห็นคนใส่ทั่วไปตามสยามและที่ต่างๆ น้ำหนักก็พอดีไม่หนักไม่เบาเกินไป และ มีพื้นรองเท้าที่แข็งแรงและ เดินสบาย คู่นี้อยู่กับผมมาเกือบ 4 ปีแล้ว สภาพยังดีอยู่เลย และ ใส่บ่อยมากๆ เวลาทำความสะอาดก็ง่ายและดูไม่สกปรกเนื่องด้วยเป็นหนังสีดำและผ้ากัมหยี่ หาผ้าชุบน้ำมาเช็ดก็สะอาดแล้ว แต่ท่าจะดีหาน้ำยาขัดรองเท้ามาขัดให้ดูใหม่ตลอดเวลาก็ได้</span>
					</div>
                    <div className={styles.content_3}>
                        <img src={Airmax1.image2} alt="Airmax1 Nike Image 2" width="100%"/>
                    </div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Airmax1page

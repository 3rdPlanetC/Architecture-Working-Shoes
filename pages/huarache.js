// components
import { Topbar, Main, Footer } from '../components'
// images
import { HuaracheBanner, Huarache } from '../static/images'
// css
import styles from '../static/styles/pages/huarache/index.module.css'

const Huarachepage = props => {
	return (
		<div>
			<Topbar page="Shoes - Huarache"/>
			<Main banner={HuaracheBanner} bgColor="#ffd456">
				<div className={styles.content}>
					<div className={styles.content_1}>
                        <div className={styles.content_1_left}>
                            <h2 className={styles.content_1_left_h2}>NIKE HUARACHE</h2>
                            <span>รองเท้าคู๋นี้เป็นคู่ที่ชอบตั้งแต่แรกเห็นไปเจอครั้งแรกที่ห้าง แต่ตอนนั้นไม่มีเงินที่จะซื้อ เพราะตอนนั้นราคาประมาณ 4000 กว่าบาท เลยตัดใจ และมีวันนึงเพื่อนส่งรูปว่าซื้อคู่นี้ แล้วส่งมาอวดและบอกว่ากลับโคราชดิ มันลดราคา ก็เลยตัดสินใจนั่งรถกลับไปโคราชเพื่อไปซื้อ โดยไม่ได้บอกที่บ้าน เก็บไว้เป็นความลับ</span>
                        </div>
                        <div className={styles.content_1_right}>
                            <h2 className={styles.content_1_right_h2}>NIKE HUARACHE</h2>
                            <img src={Huarache.image1} alt="Huarache Nike Image 1" width="100%"/>
                        </div>
					</div>
					<div className={styles.content_2}>
                        <span>Nike Huarache เป็นรองเท้าวิ่งที่มีน้ำหนักบเามาก เป็นรองเท้าที่แตกต่างเพราะไม่มี logo nike และทำจากยางเหมือนเป็นชุดเกราะมาหุ้มข้างในที่เป็นหนังและผ้าที่เป็นตะข่าย ข้อเสียของคู่นี้ คือ เปื้อนง่ายตามประสารองเท้าสีขาวทั่วไป และ ตรงยางจะเหลืองตามเวลามักขัดไม่ค่อยออก แต่ผมมักจะเสริมอะไรต่างๆในรองเท้าคู่นี้บ่อย โดยการเอาเข็มกลัดมาติดให้มันมีสีสันและลวดลายก็ดูเท่ไปอีกแบบ</span>
					</div>
                    <div className={styles.content_3}>
                        <img src={Huarache.image2} alt="Huarache Nike Image 2" width="100%"/>
                    </div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Huarachepage

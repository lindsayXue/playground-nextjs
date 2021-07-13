import Header from 'components/layout/header'
import Image from 'next/image'
import styles from './Page.module.css'

const CustomPage = () => (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
            <div className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image src="https://unsplash.it/1000/450?random" alt="nextjs" width="500" height="220" />
                </div>
                <h1 className={styles.heading}>
                    Hello: Custom Route
                </h1>
            </div>
        </div>
    </main>
)

export default CustomPage;

import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => (
    <div className={styles.header}>
        <ul className={styles.list}>    
            <li className={styles.listItem}>
                <Link href="/">Home</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/whats-on">What's On</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/what-we-do/statement-of-intent">What We Do</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/custom-route">Custom Route</Link>
            </li>
        </ul>   
    </div>
);

export default Header;

import styles from "./Header.module.css"
import PeriodSwitch from "../PeriodSwitch/PeriodSwitch"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Our Pricing</h1>
            <PeriodSwitch />
        </header>
    )
}

export default Header
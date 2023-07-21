import styles from "./Header.module.css"
import PeriodSwitch from "../PeriodSwitch/PeriodSwitch"

// eslint-disable-next-line react/prop-types
const Header = ({ toggleState, toggleSetter }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Our Pricing</h1>
            <PeriodSwitch 
                toggleState = {toggleState}
                toggleSetter = {toggleSetter}
            />
        </header>
    )
}

export default Header
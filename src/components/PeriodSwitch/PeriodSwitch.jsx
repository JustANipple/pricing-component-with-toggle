import styles from "./PeriodSwitch.module.css"
import Switch from "../Switch/Switch"

// eslint-disable-next-line react/prop-types
const PeriodSwitch = ({ toggleState, toggleSetter }) => {
    return (
        <div className={styles.period_switch}>
            <p className={styles.period}>Annually</p>
            <Switch 
                toggleState = {toggleState}
                toggleSetter = {toggleSetter}
            />
            <p className={styles.period}>Monthly</p>
        </div>
    )
}

export default PeriodSwitch
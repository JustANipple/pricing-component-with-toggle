import styles from "./PeriodSwitch.module.css"
import Switch from "../Switch/Switch"

const PeriodSwitch = () => {
    return (
        <div className={styles.period_switch}>
            <p className={styles.period}>Annually</p>
            <Switch />
            <p className={styles.period}>Monthly</p>
        </div>
    )
}

export default PeriodSwitch
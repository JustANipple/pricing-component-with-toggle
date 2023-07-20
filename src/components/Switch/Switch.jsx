import styles from "./Switch.module.css"

const Switch = () => {

    return (
        <div className={styles.switch_cont}>
            <label 
                htmlFor="switch" 
                aria-label="switch"
                className={styles.switch_label}>
            </label>
            <input 
                type="checkbox" 
                id={styles.switch}
            />
        </div>
    )
}

export default Switch
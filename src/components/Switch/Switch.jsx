import styles from "./Switch.module.css"

// eslint-disable-next-line react/prop-types
const Switch = ({ toggleState, toggleSetter }) => {

    function handleClick() {
        toggleSetter(!toggleState)
    }

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
                checked={toggleState}
                onChange={handleClick}
                className="switch"
            />
        </div>
    )
}

export default Switch
/* eslint-disable react/prop-types */
import styles from "./Plan.module.css"

const Plan = ({ type, monthlyPrice, annualPrice, features, toggleState, themeDark }) => {

    const planClass = themeDark ? `${styles.plan} ${styles.dark_theme}` : `${styles.plan}`;

    return (

        <div className={planClass}>
            <p className={styles.type}>{type}</p>
            <p className={styles.price}>
                <span>$</span>{toggleState ? monthlyPrice : annualPrice}
            </p>
            <ul className={styles.list}>
                {features.map((feature) => {
                    return <li key={feature.id}>{feature.text}</li>
                })}
            </ul>
            <button className={styles.button}>Learn more</button>
        </div>
    )
}

export default Plan
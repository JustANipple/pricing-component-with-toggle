/* eslint-disable react/prop-types */
import styles from "./Plan.module.css"
import {}

const Plan = ({ type, monthlyPrice, annualPrice, features }) => {

    return (
        <div className={styles.plan}>
            <p className={styles.type}>{type}</p>
            <p className={styles.price}>{monthlyPrice}</p>
            <ul>
                {features.map((feature) => {
                    return <li key={feature.id}>{feature.text}</li>
                })}
            </ul>
        </div>
    )
}

export default Plan
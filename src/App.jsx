import { useState } from "react"
import styles from "./App.module.css"
import Header from "./components/Header/Header"
import Plan from "./components/Plan/Plan"

function App() {

  const [toggle, setToggle] = useState(true);

  return (
    <main className={styles.main}>
      <Header 
        toggleState={toggle}
        toggleSetter={setToggle}
      />
      <section className={styles.plans}>
        <h2 className={styles.sr_only}>Plans</h2>
        <Plan 
          type={"Basic"}
          monthlyPrice={"19.99"}
          annualPrice={"199.99"}
          features={[
            {id:"0", text:"500 GB Storage"},
            {id:"1", text:"2 Users Allowed"},
            {id:"2", text:"Send up to 3 GB"}
          ]}
          toggleState={toggle}
          themeDark={false}
        />
        <Plan 
          type={"Professional"}
          monthlyPrice={"24.99"}
          annualPrice={"249.99"}
          features={[
            {id:"0", text:"1 TB Storage"},
            {id:"1", text:"5 Users Allowed"},
            {id:"2", text:"Send up to 10 GB"}
          ]}
          toggleState={toggle}
          themeDark={true}
        />
        <Plan 
          type={"Master"}
          monthlyPrice={"39.99"}
          annualPrice={"399.99"}
          features={[
            {id:"0", text:"2 TB Storage"},
            {id:"1", text:"10 Users Allowed"},
            {id:"2", text:"Send up to 20 GB"}
          ]}
          toggleState={toggle}
          themeDark={false}
        />
      </section>
    </main>
  )
}

export default App

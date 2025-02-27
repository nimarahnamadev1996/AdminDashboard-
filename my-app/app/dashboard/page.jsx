
import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/Chart'
import styles from '../ui/dashboard/dashboard.module.css'
import RightSide from '../ui/dashboard/rightbar/RightSide'
import Transactions from '../ui/dashboard/transactions/Transactions'

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      
     <div className={styles.main}>
       <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
       </div>

       <Transactions/>
       <Chart/>
     </div>

     <div className={styles.side}>
       <RightSide/>
     </div>
    </div>
  )
}

export default DashboardPage
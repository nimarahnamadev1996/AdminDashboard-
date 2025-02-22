import Image from 'next/image'



import styles from './transactions.module.css'
import avatar from '../../../../public/noavatar.png'


const Transactions = () => {
  return (
    <div className={styles.container}>
     
     <h2 className={styles.title}>Latest Transactions</h2>

     <table className={styles.table}>
      <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
        <tr>
            <td>
              <div className={styles.user}>
                <Image 
                 src={avatar} 
                 alt='avatar'
                 width={40}
                 height={40}
                 className={styles.userImage}/>
                  John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
           
            <td>14.02.2024</td>

            <td>$3.200</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                 src={avatar} 
                 alt='avatar'
                 width={40}
                 height={40}
                 className={styles.userImage}/>
                  Jack Smith
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
           
            <td>12.03.2024</td>
            
            <td>$5.100</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                 src={avatar} 
                 alt='avatar'
                 width={40}
                 height={40}
                 className={styles.userImage}/>
                  Jo mack
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
           
            <td>10.11.2024</td>
            
            <td>$4.500</td>
          </tr>

        </tbody>
     </table>
    </div>
  )
}

export default Transactions
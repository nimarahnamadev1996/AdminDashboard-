import Link from 'next/link'
import Image from 'next/image'


import Search from '@/app/ui/dashboard/search/Search'
import styles from '../../ui/dashboard/users/users.module.css'
import PaginationButton from '@/app/ui/dashboard/pagination/PaginationButton'



const UsersPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <Search placeholder='Search for a user'/>
        
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        
      <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
               <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
            </td>

              <td>John@gmail</td>
              <td>10.12.2024</td>
              <td>10.12.2024</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
               <div className={styles.buttons}>
                 <Link  href="/dashboard/users/test">
                     <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>    
                  </Link>

                    <button className={`${styles.button} ${styles.view}`}>
                      Delete
                    </button>   
               </div>
              </td>
          </tr>
        </tbody>
      </table>

      <PaginationButton/>
    </div>
  )
}

export default UsersPage
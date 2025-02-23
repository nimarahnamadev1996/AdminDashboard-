import Image from "next/image"
import Link from "next/link"



import Search from "@/app/ui/dashboard/search/Search"
import PaginationButton from "@/app/ui/dashboard/pagination/PaginationButton"
import styles from '../../ui/dashboard/products/products.module.css'




const ProductsPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <Search placeholder='Search for a products...'/>
        
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        
      <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
               <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Iphone
                </div>
            </td>

              <td>desc</td>
              <td>$786</td>
              <td>18.09.2024</td>
              <td>29</td>
              
              <td>
               <div className={styles.buttons}>
                 <Link  href="/dashboard/products/test">
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

export default ProductsPage
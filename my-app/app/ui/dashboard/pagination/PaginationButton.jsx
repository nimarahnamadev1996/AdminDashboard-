import styles from './pagination.module.css'

const PaginationButton = () => {
  return (
    <div className={styles.container}>
    <button>
       Previous
    </button>

    <button>
       Next 
    </button>
   </div>
  )
}

export default PaginationButton
import Image from 'next/image'
import styles from '../../../ui/dashboard/singleUser/singleUser.module.css'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>

        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              <Image src="/noavatar.png" alt="" fill />
            </div>
            John Doe
        </div>

        <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value='id'/>
          <label>Username</label>
          <input type="text" name="username" placeholder='John Doe' />
          <label>Email</label>
          <input type="email" name="email" placeholder='John Doe@gmail' />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder='12345678' />
          <label>Address</label>
          <textarea type="text" name="address" placeholder='Iran Tehran' />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
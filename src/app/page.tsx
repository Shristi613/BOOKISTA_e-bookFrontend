"use client"
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter()
  return (
    <div className={styles.c1}>
      <div className={styles.c11}>
        <Image src="https://dynamic.brandcrowd.com/asset/logo/517c7a8a-7da9-4b61-aab1-4a665f3ab306/logo-search-grid-1x?logoTemplateVersion=1&v=638505629239000000&text=BOOKISTA" alt="My Books"
          className={styles.logo}
          width={500}
          height={500}
        />
        <p className={styles.t1}>Take your stories wherever you go</p>

        <div className={styles.btnRow}>
          <button className={styles.btn2}
            onClick={() => {
              router.push('/signup') //send it to sign up page
            }}
          >Create an BOOKISTA account</button>

            <button className={styles.btn2}
            onClick={()=>{
              router.push('/login') //send it to login page
            }}
            >
              <Image src="https://dynamic.brandcrowd.com/asset/logo/517c7a8a-7da9-4b61-aab1-4a665f3ab306/logo-search-grid-1x?logoTemplateVersion=1&v=638505629239000000&text=BOOKISTA"
              alt="My Books"
              className={styles.btnicon}
              width={20}
              height={20}
              />
              <span>Sign in with your account</span>
            </button>

        </div>
      </div>
      <Image src="https://newtemplate.net/wp-content/uploads/2021/08/ChapterOne-Bookstore-and-Publisher-Theme-1.jpg " alt="My Books" 
        className={styles.bottomimg}
        width={1000}
        height={500}
      />
    </div>
  )
}

export default Page;


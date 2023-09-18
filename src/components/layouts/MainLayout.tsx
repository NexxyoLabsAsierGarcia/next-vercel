import React from 'react'
import styles from "./MainLayout.module.css";
import Head from 'next/head';
import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>New Next Application</title>
            <meta name="description" content="Home app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
              {children}
          </main>
        </div>
      )
    }

//for reading we will land to this page
"use client"
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import Navbar from '@/app/components/Navbar'
import styles from "./Read.module.css"
import React, { useState } from 'react'

const Page = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.viewer}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer 
          fileUrl="https://pdfobject.com/pdf/sample.pdf"
          plugins={[defaultLayoutPluginInstance]}
          theme="dark"
          />
        </Worker>
      </div>
      </div>
    </div>
  )
}

export default Page

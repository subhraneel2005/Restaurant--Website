'use client';
import styles from './gallery.module.scss'
import { useState } from 'react';
import Project from './project';
import Modal from './modal/Index';

const projects = [
  {
    title: "Coffee 1",
    src: "coffee-website-img1.jpg",
    color: "#000000"
  },
  {
    title: "Coffee 2",
    src: "coffee-website-img2.jpg",
    color: "#8C8C8C"
  },
  {
    title: "Coffee 3",
    src: "coffee-website-img3.jpg",
    color: "#EFE8D3"
  },
  {
    title: "Coffee 4",
    src: "coffee-website-img4.jpg",
    color: "#706D63"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          {
            projects.map( (project, index) => {
              return <Project index={index} title={project.title} setModal={setModal} key={index}/>
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
      </main>
  </>
  )
}

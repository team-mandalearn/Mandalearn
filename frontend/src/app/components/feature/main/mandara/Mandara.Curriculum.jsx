"use client"
import { useContext, useLayoutEffect, useState } from "react"

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from "framer-motion";

import { CurriculumContext } from "@/app/components/feature/main/mandara/Mandara.index"
import ProgressProvider from "@/app/components/utils/ProgressProvider";

import styles from "./mandara.module.scss"
import 'react-circular-progressbar/dist/styles.css';
import Link from "next/link";

export default function MandaraCurriculum() {
  const [rad, setRad] = useState()
  const [r, setR] = useState()
  const [radOffset, setRadOffset] = useState()
  const curriculums = useContext(CurriculumContext)
  useLayoutEffect(() => {
    const container = document.querySelector('#curriculum_container');
    if (container) {
      const curriculum_num = curriculums.length;
      const deg = 360.0 / curriculum_num;
      const r = container.clientWidth / 2;
      const radOffset = -Math.PI / 2;
      const rad = deg * Math.PI / 180.0;
      setRad(rad);
      setR(r);
      setRadOffset(radOffset);
    }
  }, []);

  return (
    <div id='curriculum_container' className={styles.curriculum_container}>
      <motion.h1
        className={styles.curriculum_title}
        animate={{ clipPath: "polygon(0 0,100% 0, 100% 100%, 0% 100%)" }}
        transition={{ duration: .5, delay: .4, ease: [.91, 0, .19, 1] }}
      >
        APPRENTICE<br />
        FULL STACK<br />
        ENGINEER<br />
      </motion.h1>
      {curriculums.map((item, index) => {
        const x = Math.cos(rad * index + radOffset) * r + r;
        const y = Math.sin(rad * index + radOffset) * r + r;
        return (
          <motion.div
            className={styles.curriculum_item}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: x, y: y, opacity: item.percentage * 100 + .2 }}
            transition={{ ease: [.91, 0, .19, 1], duration: .5 }}
            key={index}>
            <Link href={`/curriculum/${item.name}`}>
              <ProgressProvider valueStart={0} valueEnd={item.percentage}>
                {value => <CircularProgressbar
                  value={value}
                  strokeWidth={4}
                  styles={buildStyles({
                    stopLinecap: 'round',
                    pathTransitionDuration: 2,
                    pathColor: `rgba(255, 102, 102, ${item.percentage / 100} )`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7'
                  })}
                />
                }
              </ProgressProvider>
              <p className={styles.curriculum_item_name}>
                {item.name}
              </p>
            </Link>
          </motion.div>
        )
      })}
      <span className={styles.curriculum_center1}></span>
      <span className={styles.curriculum_center2}></span>
      <span className={styles.curriculum_center3}></span>
    </div>
  )
}

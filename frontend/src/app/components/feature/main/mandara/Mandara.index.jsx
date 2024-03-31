import styles from "./mandara.module.scss"
import MandaraCurriculum from "@/app/components/feature/main/mandara/Mandara.Curriculum";
import { createContext } from "react";
import { curriculums } from "@/app/components/utils/Curriculums";

export const CurriculumContext = createContext()

export default function MandaraIndex() {
  // const php_curriculums = [
  //   { name: 'git', percentage: 90 },
  //   { name: 'php', percentage: 100 },
  //   { name: 'MySQL', percentage: 89 },
  //   { name: 'Team DEV1', percentage: 70 },
  //   { name: 'Laravel', percentage: 40 },
  //   { name: 'TEST', percentage: 60 },
  //   { name: 'API', percentage: 70 },
  //   { name: 'React', percentage: 50 },
  //   { name: 'Team DEV2', percentage: 0 },
  //   { name: 'AWS', percentage: 0 },
  //   { name: 'Original Product', percentage: 0 },
  //   { name: 'Engineer', percentage: 0 }
  // ]
  return (
    <CurriculumContext.Provider value={curriculums}>
      <MandaraCurriculum />
    </CurriculumContext.Provider>
  )
}

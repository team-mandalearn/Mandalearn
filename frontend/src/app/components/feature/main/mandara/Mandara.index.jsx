import styles from "./mandara.module.scss"
import MandaraCurriculum from "@/app/components/feature/main/mandara/Mandara.Curriculum";
import { createContext } from "react";
import { curriculums } from "@/app/components/utils/Curriculums";

export const CurriculumContext = createContext()

export default function MandaraIndex() {
  return (
    <CurriculumContext.Provider value={curriculums}>
      <MandaraCurriculum />
    </CurriculumContext.Provider>
  )
}

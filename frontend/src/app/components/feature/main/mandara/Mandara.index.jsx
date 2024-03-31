import styles from "./mandara.module.scss"
import MandaraCurriculum from "@/app/components/feature/main/mandara/Mandara.Curriculum";
import { createContext } from "react";

export const CurriculumContext = createContext()

export default function MandaraIndex({ fetchMarkdown }) {
  const php_curriculums = [
    { name: 'Linux', percentage: 90 },
    { name: 'php', percentage: 100 },
    { name: 'Database', percentage: 89 },
    { name: 'Team DEV1', percentage: 70 },
    { name: 'Laravel', percentage: 40 },
    { name: 'TEST', percentage: 60 },
    { name: 'API', percentage: 70 },
    { name: 'React', percentage: 50 },
    { name: 'Team DEV2', percentage: 0 },
    { name: 'AWS', percentage: 0 },
    { name: 'Original Product', percentage: 0 },
    { name: 'Engineer', percentage: 0 }
  ]
  return (
    <CurriculumContext.Provider value={php_curriculums}>
      <MandaraCurriculum fetchMarkdown={fetchMarkdown} />
    </CurriculumContext.Provider>
  )
}

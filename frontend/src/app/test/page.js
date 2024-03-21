"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Testpage() {
  const [data, setData] = useState()
  useEffect(() => {
    const testAxios = async () => {
      const res = await axios.get('http://localhost:8080/api/test')
      const data = res.data
      setData(data);
    }
    testAxios()
  }, [])
  return (
    <>
    <h1>shuturyo{data}</h1>
    </>
  )
}
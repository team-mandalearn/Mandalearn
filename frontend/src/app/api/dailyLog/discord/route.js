import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req){
  const inputData = await req.json()
  const DISCORD_SERVER_URL=process.env.MANDALEARN_DISCORD_URL
  const studyTime = inputData.time
  const quest = inputData.quest
  const comment = inputData.comment
  const requestBody={
    content:`【学習時間】\n ${studyTime}\n【学習内容】\n ${quest}\n【振り返り】\n ${comment}`,
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  const res = await axios.post(DISCORD_SERVER_URL,requestBody,headers)
  const data = res.data
  return NextResponse.json(data)
}
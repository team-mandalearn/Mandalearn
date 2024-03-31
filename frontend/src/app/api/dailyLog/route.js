import { NextResponse } from "next/server";
import {getServerSession} from "next-auth"
import axios from "axios";

export async function POST(req) {
  const session = await getServerSession()
  const email = session.user.email

  const reqData = await req.json()
  const post = {
    post:{
      email: email,
      time: reqData.time,
      comment: reqData.comment,
      quest: reqData.quest
    }
  }

  console.log(post)

  const DAILY_URL = process.env.MANDALEARN_BASE_URL + "/reports"
  const res = await axios.post(DAILY_URL, post)
  const data = await res.data

  return NextResponse.json(data)
}
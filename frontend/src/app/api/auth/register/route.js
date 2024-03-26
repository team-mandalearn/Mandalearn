import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req){
  const URL = process.env.MANDALEARN_BASE_URL + '/auth/register'
  const reqData = await req.json()
  const userInputData = {
    user:{
      email: reqData.email,
      post_schedule: reqData.time,
      language_id: reqData.language,
      generaion: reqData.generaion
    }
  }
  const res = await axios.post(URL, userInputData);
  const data = await res.data
  return NextResponse.json(data)
}
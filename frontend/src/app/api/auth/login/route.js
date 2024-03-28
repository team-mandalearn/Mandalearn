import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const email = await req.json()
  const LOGIN_URL = process.env.MANDALEARN_BASE_URL + '/auth/login'
  const res = await axios.post(LOGIN_URL, email);
  const data = await res.data
  return NextResponse.json(data)
}
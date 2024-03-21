import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){
  const URL = 'http://localhost:8080/api'
  const res = await axios.get(URL);
  return NextResponse.json(res.data)
}
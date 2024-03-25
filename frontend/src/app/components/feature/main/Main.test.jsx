"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function MainTest() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.post('/api/register');
      const data = await res.data;
      setUser(data);
    }
    fetchUser();
  }, [])
  console.log(user)
  return (
    <>
      test
    </>
  )
}
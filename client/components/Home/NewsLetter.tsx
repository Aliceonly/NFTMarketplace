import { NextPage } from 'next'
import Image from 'next/image';
import React, { useState } from 'react'
import subscribe from '../../assets/subscribe-v2.webp';

const styles = {
  container: 'relative w-[100%] h-[50vh] mb-[80px] bg-gradient text-white',
  subscribeContainer: 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col w-[75%] items-center justify-center',
  title: 'text-[50px] leading-[65px]',
  subTitle: 'mb-[25px] text-[28px]',
  inputField: 'p-3 w-[85%] rounded-md',
  button: 'bg-gradient-to-r from-[#1199fa] to-[#11d0fa] p-3 rounded-r-md cursor-pointer w-[15%] -ml-2',
  privacy: 'my-[25px] mx-auto w-[85%]',
  accept: 'flex flex-row w-[80%] my-0 mx-auto'
}
export const NewsLetter:NextPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.container}>
    </div>
  )
}

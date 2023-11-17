import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const styles = {
  brand: 'flex items-center justify-center cursor-pointer',
  icon: 'w-[15em] h-[2em]'
}

export const Brand:NextPage = () => {
  return (
    <Link href='/'>
    <div className={styles.brand}>
    </div>
    </Link>
  )
}

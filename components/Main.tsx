import React from 'react'

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers'

const constants = require('../constants.json')

export default function Main() {
  const {langs, currentLang} = useSelector((state: RootState) => state.langReducer)

  const dispatch = useDispatch()

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute w-96 h-96 bg-primary/25 rounded-full -top-40 -right-40' />
      <div className='absolute w-96 h-96 border-2 border-primary/25 rounded-full -left-40 top-40' />
      <div className='absolute w-24 h-24 bg-primary/25 rounded-full bottom-24 left-1/4' />

      <div className='p-3 shadow-md fixed z-40 w-full flex justify-end bg-white px-[5%]'>
        <select
          className='border rounded-md px-2 focus:outline-none focus:ring-2 bg-white focus:ring-primary'
          value={currentLang}
          onChange={(e) => {
            localStorage.setItem('lang', e.target.value)
            dispatch({
              type: 'SET_LANG',
              lang: e.target.value
            })
          }}
        >
          {langs.map(lang => <option key={lang} value={lang}>{lang.substr(0, 2).toUpperCase()}</option>)}
        </select>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:h-screen py-[40%] lg:py-0 lg:flex items-center justify-around'>
          <div className='lg:flex-1 lg:pb-64'>
            <h1 className='text-5xl text-center lg:text-left lg:text-8xl'>{constants.H1[currentLang]}</h1>
          </div>
          <div className='hidden lg:block'>
            <Image
              src='/illustration.jpg'
              alt='boy learning'
              width='500'
              height='500'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Main from "../components/Main"
import { RootState } from "../store/reducers"

import Link from 'next/link'

const words = require('../words.json')
const constants = require('../constants.json')

interface ICategory {
  title: string
  slug: string
}

export default function Home() {

  const [categories, setCategories] = useState<ICategory[]>([])

  const {currentLang} = useSelector((state: RootState) => state.langReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    setCategories(Object.keys(words).map(key => {
      return (
        {
          title: words[key].title[currentLang],
          slug: key
        }
      )
    }))
  }, [currentLang])

  useEffect(() => {
    dispatch({
      type: 'SET_LANG',
      lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'english'
    })
  }, [dispatch])

  return (
    <div className='font-poppins'>
      <Main />
      <div className='bg-primary/50 py-[10%]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14'>
          <h2 className='text-4xl'>
            {constants['categories-title'][currentLang]}
          </h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {
            categories.map((category, index) => {
              return (
                <Link
                  key={index}
                  href={`/category/${category.slug}`}
                  passHref
                >
                  <button
                    className='px-9 py-12 bg-white rounded-md shadow-md hover:shadow-lg cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg'
                  >
                    {category.title}
                  </button>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
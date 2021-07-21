import React from 'react'
import {GetStaticPaths, GetStaticProps} from 'next'

const words = require('../../words.json')

interface Props {
  id: string
}

export default function Category({id}: Props) {
  return (
    <div>
      {
        words[id].title.romanian
      }
    </div>
  )
}

export  const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(words).map(key => {
    return {
      params: {
        id: key
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      id: params?.id
    }
  }
}
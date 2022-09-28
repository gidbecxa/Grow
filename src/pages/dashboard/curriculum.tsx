import React from 'react'
import type { ReactElement } from 'react'
import Layout from '../../layout/Layout'
import type { NextPageWithLayout } from '../_app'

const Curriculum: NextPageWithLayout = () => {
  return (
      <>
        courses
      </>
  )
}

Curriculum.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Curriculum
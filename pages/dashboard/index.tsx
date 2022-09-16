import React from 'react'
import type { ReactElement } from 'react'
import Layout from '../../layout/Layout'
import type { NextPageWithLayout } from '../_app'

const Dashboard: NextPageWithLayout = () => {
  return (
      <>
        DASH
      </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Dashboard
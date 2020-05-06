import React from "react"
import loadable from "@loadable/component"
import CmsLayout from "layouts/Cms"

// import pMinDelay from 'p-min-delay' pMinDelay(,2000)

const fallback = () => (
  <div>Загрузка...</div>
)
const CMS_ProductsList = loadable(() => import('components/CmsLite/ProductsList'), {
    fallback: fallback()
})


const CmsLitePage = () => (
  <CmsLayout>
      <CMS_ProductsList/>
  </CmsLayout>
)

export default CmsLitePage
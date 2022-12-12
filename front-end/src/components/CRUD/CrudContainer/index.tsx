import React from 'react'

interface CrudContainerProps {
  crudForm: any;
  crudList: any;
}

export default function CrudForm(props: CrudContainerProps) {
  const { crudForm, crudList } = props
  return (
    <>
      {crudForm()}
    </>
  )
}

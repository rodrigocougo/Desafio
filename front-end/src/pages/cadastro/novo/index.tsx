import React from 'react'
import FormAddEdit from 'src/components/CRUD/CrudForm/CourseAddEdit';
import CBFLine from 'src/components/LineComponent/Index';
import { ContentRegister } from 'src/styles/cadastro/styled';

export default function FormNew() {
  return (
    <>
      <CBFLine labelSubTitle="CADASTRO" labelTitle="Gerenciamento de cursos" />
      <ContentRegister>        
        <FormAddEdit 
          id={null} 
          course={{
            courseName: '',
            courseDescription: '',
            courseVideoLink: ''
          }} 
        />
      </ContentRegister>
    </>
  )
}
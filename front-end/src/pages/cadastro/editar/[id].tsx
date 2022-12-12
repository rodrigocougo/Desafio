import router from 'next/router';
import React, { useEffect, useState } from 'react'
import { CoursePropsFormYup } from 'src/common/courseUnitProps';
import { COURSE } from 'src/common/routesApi';
import FormAddEdit from 'src/components/CRUD/CrudForm/CourseAddEdit';
import CBFLine from 'src/components/LineComponent/Index';
import { get } from 'src/helpers/api_helper';
import { ContentRegister } from 'src/styles/cadastro/styled';
import Error from 'src/pages/500';

interface CrudFormProps {
  id: string | null;
  course: CoursePropsFormYup;
  errorCode?: boolean | string;
}

/* 
* Esta estrutura reutiiza o formulario padrão de CRUD;
* É utiliza as chamadas de API neste nivel para popular
* o form, realizar update e insert;
*/

export default function FormEdit(props: CrudFormProps) {  
  let { id, course, errorCode } = props;

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  if (!id) {
    alert('Falha ao buscar cadastro!')
    router.push('.');
    return;
  }

  return (
    <>
      <CBFLine labelSubTitle="CADASTRO" labelTitle="Gerenciamento de cursos" />
      <ContentRegister>        
        <FormAddEdit 
          id={id ?? ''} 
          course={course}
        />
      </ContentRegister>
    </>
  )
}

/* 
* Renderização SSR 
* Não utilizei em muitos lugares por falta de tempo mesmo!!!
*/
export async function getServerSideProps(props: { params: { id: string } }) {
  const id = props.params?.id ?? null;  
  const course = await get(`${COURSE}/${id}`);
  const errorCode = course ? false : course.status
  return {
      props: { id, course, errorCode }
  }
}
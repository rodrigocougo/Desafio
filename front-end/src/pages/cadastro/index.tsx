import React, { useEffect, useState } from 'react'
import CrudList from 'src/components/CRUD/CrudList';
import CBFLine from 'src/components/LineComponent/Index';
import { ContentRegister } from 'src/styles/cadastro/styled';
import {
  MdModeEditOutline,
  MdOutlineDeleteOutline
} from 'react-icons/md'
import Link from 'next/link';
import { COURSE, COURSE_PAGINATION } from 'src/common/routesApi';
import { LABEL_ADD_CANCEL, LABEL_ADD_COURSE, LABEL_DELETE_COURSE_CONFIRM, LABEL_ERROR_COURSE_DELETE, LABEL_LIST_COURSE, LABEL_SUCCESS_COURSE_DELETE, URL_CADASTRO_CANCEL, URL_CADASTRO_EDITAR, URL_CADASTRO_NOVO } from 'src/common/global';
import ConfirmModal from 'src/components/Modal/confirmModal';
import { del, post } from 'src/helpers/api_helper';
import { dataQueryProps, PagionationProps } from 'src/common/typeCridList';
import Router from 'next/router';

/* 
* Utilizado para na LISTAGEM COM PAGINAÇÃO  
* dos cursos em geral (não cheguei a fazer filtro)!
*/
const RegisterCourse = () => {
  const [modalConfirmModal, setModalConfirmModal] = useState(false);
  const [idRegisterModel, setIdRegisterModel] = useState("");
  const [dataListAll, setDataListAll] = useState<dataQueryProps>({
    data: [],
    getPageCount: 0,
    isFetching: false
  });
  const [pagination, setPagination] = useState<PagionationProps>({
    filter: {},
    sort: {}, 
    skip: 0, 
    limit: 5
  });
  const defaultData = React.useMemo(() => [], [])  

  const getApiDataAll = () => {
    dataListAll.isFetching = true;
    post(`${COURSE_PAGINATION}`, pagination)
    .then(response => setDataListAll({
      data: response.data,
      getPageCount: response.rows,
      isFetching: false
    }))
    .catch(() => setDataListAll({
      data: [],
      getPageCount: 0,
      isFetching: false
    }))
    .finally(() => dataListAll.isFetching = false)
  }    

  const handleApiDataDelete = () => {
    del(`${COURSE}/${idRegisterModel}`)
      .then(() => {
        alert(LABEL_SUCCESS_COURSE_DELETE)
        Router.reload()
      })
      .catch(() => alert(LABEL_ERROR_COURSE_DELETE))
  }

  useEffect(() => {
    getApiDataAll()
  }, [])

  useEffect(() => {
    getApiDataAll()
  }, [pagination, setPagination])

  return (
    <React.Fragment>
      <ConfirmModal
        modal={modalConfirmModal}
        confirm={() => handleApiDataDelete()}
        cancel={() => setModalConfirmModal(false)}
        setModal={setModalConfirmModal}
        title={LABEL_DELETE_COURSE_CONFIRM}
      />
      <CBFLine labelSubTitle="CADASTRO" labelTitle="Gerenciamento de cursos" />
      <ContentRegister>        
        <CrudList 
          columns={[
            {
              accessorKey: 'courseName',
              header: () => <span>Nome do Curso</span>,
              size: 200
            },
            {
              accessorKey: 'courseDescription',
              header: () => <span>Descrição do Curso</span>,
              size: 350
            },
            {
              accessorKey: 'category',
              header: () => <span>Categoria</span>,
            },
            {
              accessorKey: 'dateTimeCreate',
              header: () => <span>Criado em</span>,
            },
            {
              accessorKey: 'dateTimeUpdate',
              header: () => <span>Atualizado em</span>,
            },
            {
              accessorKey: 'actions',
              header: 'Ações',
              cell: function (props: { value: any; column: any; row: any; }): JSX.Element {
                return <>
                  <Link href={`${URL_CADASTRO_EDITAR}/${props.row.original._id}`} className="btn btn-primary m-1"><MdModeEditOutline /></Link>{' '}
                  <button
                    type="button"
                    className={`btn btn-danger m-1`}
                    onClick={() => {                      
                      setIdRegisterModel(props.row.original._id);
                      setModalConfirmModal(true)
                    }}
                  >
                    <MdOutlineDeleteOutline />
                  </button>
                </>;
              },
            }
          ]} 
          dataListAll={dataListAll ?? defaultData}
          descriptionList={LABEL_LIST_COURSE} 
          descriptionButtonAdd={LABEL_ADD_COURSE}    
          descriptionRouterLink={URL_CADASTRO_NOVO}  
          descriptionButtonCancel={LABEL_ADD_CANCEL}      
          descriptionRouterLinkCancel={URL_CADASTRO_CANCEL}
          pagination={pagination}
          setPagination={setPagination}
        />
      </ContentRegister>
    </React.Fragment>
  )
}

export default RegisterCourse;

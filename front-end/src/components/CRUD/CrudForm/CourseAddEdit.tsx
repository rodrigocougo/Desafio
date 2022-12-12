import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { CoursePropsFormYup } from 'src/common/courseUnitProps';
import { HeaderFooter } from 'src/styles/crud/styled';
import { CATEGORIES, URL_CADASTRO_LISTA } from 'src/common/global';
import { get, patch, post } from 'src/helpers/api_helper';
import router from 'next/router';
import { COURSE } from 'src/common/routesApi';
import { useEffect } from 'react';

interface AddEditProps {
  id: string | null;
  course: CoursePropsFormYup;
}

interface formOptionsProps {
  resolver: any;
  defaultValues?: CoursePropsFormYup;
}

export default function FormAddEdit(props: AddEditProps) {
    const { id, course } = props;
    const isAddMode: boolean = !id;    

    const validationSchema = Yup.object().shape({
        courseName: Yup.string()
            .required('Nome do curso é obrigatório!'),
        courseDescription: Yup.string()                
            .required('Descrição do curso é obrigatório!'),
        courseVideoLink: Yup.string()
            .required('Link do curso é obrigatório!'),
        category: Yup.string()
            .required('Selecione uma categoria valida!')   
    });

    let formOptions: formOptionsProps = { resolver: yupResolver(validationSchema) };
    if (!isAddMode) {
        formOptions.defaultValues = {
          courseName: course.courseName,
          courseDescription: course.courseDescription,
          courseVideoLink: course.courseVideoLink,
          category: course.category,
        };
    }

    const { register, handleSubmit, reset, formState } = useForm<CoursePropsFormYup>(formOptions);
    const { errors } = formState;

    const onSubmit: SubmitHandler<CoursePropsFormYup> = data => isAddMode ? handleInsertCourse(data) : updateUser(id, data);      

    function handleInsertCourse(data: CoursePropsFormYup) {
        post(`${COURSE}`, data)
            .then(() => {
                alert("Novo curso criado com sucesso!")
                router.push(URL_CADASTRO_LISTA);
            })
            .catch(() => alert("Falha ao criar novo curso!"));
    }

    function updateUser(id: string | null, data: CoursePropsFormYup) {
        patch(`${COURSE}/${id}`, data)
            .then(() => {
                alert("Novo curso atualizado com sucesso!")
                router.push(URL_CADASTRO_LISTA);
            })
            .catch(() => alert("Falha ao atualizar novo curso!"));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{isAddMode ? 'Novo Curso' : 'Alterar Curso'}</h2>
            <div className="form-row">                
                <div className="form-group col-12">
                    <label>Nome do Curso</label>
                    <input type="text" {...register('courseName')} className={`form-control ${errors.courseName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.courseName?.message}</div>
                </div>
                <div className="form-group col-12">
                    <label>Link do Curso <small>(Obtenha a URL embed do YouTube dentro do código de incorporação)</small></label>
                    <input type="text" {...register('courseVideoLink')} className={`form-control ${errors.courseVideoLink ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.courseVideoLink?.message}</div>
                </div>
            </div>                        
            <div className="form-group col">
                <label>Categoria</label>
                <select {...register('category')} className={`form-control ${errors.category ? 'is-invalid' : ''}`}>
                    <option value=""></option>
                    <option value={CATEGORIES.ONLY_LAW}>{CATEGORIES.ONLY_LAW}</option>
                    <option value={CATEGORIES.ONLY_JUDICIAL_EXPERTISE}>{CATEGORIES.ONLY_JUDICIAL_EXPERTISE}</option>
                    <option value={CATEGORIES.ONLY_DEVELOPMENT}>{CATEGORIES.ONLY_DEVELOPMENT}</option>
                    <option value={CATEGORIES.ONLY_PEAPLE_MANAGEMENT}>{CATEGORIES.ONLY_PEAPLE_MANAGEMENT}</option>
                    <option value={CATEGORIES.ONLY_CALCULATION}>{CATEGORIES.ONLY_CALCULATION}</option>
                </select>
                <div className="invalid-feedback">{errors.category?.message}</div>
            </div>   
            <div className="form-row">
                <div className="form-group col-12">
                    <label>Descrição do Curso</label>
                    <textarea {...register('courseDescription')} className={`form-control ${errors.courseDescription ? 'is-invalid' : ''}`} rows={8} maxLength={256} />
                    <div className="invalid-feedback">{errors.courseDescription?.message}</div>
                </div>                
            </div> 
            <HeaderFooter>                    
              <div className="form-group">
                  <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary m-1">
                      {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                      Salvar
                  </button>
                  {isAddMode && <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary m-1">Resetar</button>}
                  <Link href={'/cadastro'} className="btn btn-sm btn-success p-2 m-1">Cancelar</Link>       
              </div>
            </HeaderFooter>
        </form>
    );
}
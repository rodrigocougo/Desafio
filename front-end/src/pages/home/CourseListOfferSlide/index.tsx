import CBFReactSlick from 'src/components/General/reactSlick'
import { ContentProductListOffer } from 'src/styles/home/styled'
import { CourseProps } from 'src/common/courseUnitProps'
import getCourseUnitReactSlide from 'src/components/CourseUnit/Index'
import { settingsReactSlickForCourse } from 'src/common/settingsReactSlick'
import { useState, useEffect } from 'react'
import { COURSE } from 'src/common/routesApi'
import { get } from 'src/helpers/api_helper'
import { SpinnerStyled } from 'src/components/General/button/styled'
import { LABEL_ERROR_COURSE_GET, LABEL_LOADING } from 'src/common/global'

/* 
* Reutiliza o componente padrão de LISTAGEM DE CURSOS, 
* na pasta CRUD foi realizado a componentização do CRUD,
*/
export default function CourseListOffer() {
  const [coursesListRows, setCoursesListRows] = useState<Array<CourseProps>>()
  const [loading, setLoadingDataCourses] = useState<boolean>(true)

  const getApiDataAll = () => {
    setLoadingDataCourses(true);
    get(`${COURSE}`)
    .then((response: Array<CourseProps>) => setCoursesListRows(response))
    .catch(() => alert(LABEL_ERROR_COURSE_GET))
    .finally(() => setLoadingDataCourses(false))
  }

  useEffect(() => {
    getApiDataAll()
  }, [])

  return (
    <ContentProductListOffer>
      {loading ? (<>
        <SpinnerStyled />
        <p>{LABEL_LOADING}</p>
      </>) : (
        <CBFReactSlick {...settingsReactSlickForCourse}>
          {coursesListRows?.map((courseUnit: CourseProps, index: number) => getCourseUnitReactSlide(courseUnit, index))}
        </CBFReactSlick>
      )}
    </ContentProductListOffer>
  );
}

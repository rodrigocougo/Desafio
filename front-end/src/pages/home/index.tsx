import React from 'react'
import { LABEL_COURSE, LABEL_COURSE_MORE_SALE, LABEL_COURSE_POPULAR } from 'src/common/global';
import CBFLine from 'src/components/LineComponent/Index';
import BSHeader from 'src/components/NavBar';
import ProductListOffer from './CourseListOfferSlide';

/* 
* Pagina Home de visualização dos cursos e acesso ao cadastro de cursos
*/
const Home = () => {
  return <>
    <BSHeader />   
    <CBFLine labelSubTitle={LABEL_COURSE} labelTitle={LABEL_COURSE_MORE_SALE} />
    <ProductListOffer />
    <CBFLine labelSubTitle={LABEL_COURSE} labelTitle={LABEL_COURSE_POPULAR} />
    <ProductListOffer />
  </>
}

export default Home;

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif !important;
  }

  .hide {
    display: none !important;
  }

  body {
    font-family: Roboto, sans-serif !important;
    background-color: #f9f8f7 !important;
  }
  
  row {
    padding: 0;
    margin: 0;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 35px !important;
    color: silver !important;
  }

  .css-1ltezim[aria-selected=true], .css-1ltezim[data-selected]{
    border-color: red !important;
  }

  .btn {
    align-items: center;
  }

  .slick-next{
    margin: 0;
    @media(max-width: 1310px) {
      display: none !important;
    }
  }
  
  .slick-prev{
    margin: 0;
    @media(max-width: 1310px) {
      display: none !important;
    }
    
  }
  
  @media(max-width: 1200px) {
     .slick-list{
      margin-left: 0 !important;
      margin-right: 0 !important;
     }
  }

  .slick-list {
    margin-left: -18px;
    margin-right: 20px;
    margin-bottom: -20px;
    padding-top: 7px;
    cursor: pointer;

    @media (max-width: 768px) {
      left: 0;
      width: 100%;
    }

    @media (max-width: 576px) {
      transform: translate3d(14px, 0, 0) !important;
    }

  }
  
  .slick-track{
    margin-left: 18px;
    @media (max-width: 768px) {
      margin: 0 auto;
      left: 0;
    }
    
  }
  
  .slick-slide img {
    width: auto;
    max-width: 100%;
    object-fit: cover;
  }
  
  .bg-yellow {
    background-color: #f9f1c9 !important;
    color: #8a6d68 !important;
    border: 1px solid #e9d675 !important;
  }

  .bg-yellow h5 {
    color: #8a6d68 !important;
    font-weight: 600;
    font-stretch: normal;
  }

  .cursor-zoom-magnifier-container {
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  
`;
import { CourseProps } from "./courseUnitProps";

export interface typeCrudListColumns {  
  accessorKey: string;
  header: any;
  id?: string;  
  cell?: any;
  footer?: any;
  accessorFn?: any;
  size?: number;
}

export interface dataQueryProps {
  data: Array<CourseProps | any>,
  isFetching: boolean,
  getPageCount: number
}

export interface PagionationProps {
  filter: any, 
  sort: any, 
  skip: number, 
  limit: number
}
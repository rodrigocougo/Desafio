import { CATEGORIES } from './global'

export interface CourseProps {
  courseName: string;
  courseDescription: string;
  category: CATEGORIES;
  courseVideoLink: string;
  dateTimeCreate: Date;
  dateTimeUpdate: Date;    
  subRows?: CourseProps[];
  id?: string;
};

export interface CoursePropsFormYup {
  courseName: string;
  courseDescription: string;
  category?: CATEGORIES;
  courseVideoLink: string;
  dateTimeCreate?: Date;
  dateTimeUpdate?: Date;    
};

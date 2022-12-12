/* 
*  Enum para as categorias 
* (Não realizei o cadastro da entidade no backend, está hardcode mesmo)
*/
export enum CATEGORIES {
  ONLY_LAW = 'Direito', 
  ONLY_JUDICIAL_EXPERTISE = 'Perícia Judicial', 
  ONLY_DEVELOPMENT = 'Desenvolvimento Pessoal', 
  ONLY_PEAPLE_MANAGEMENT = 'Gestão de Pessoas', 
  ONLY_CALCULATION = 'Cálculos'
}

/* 
* Rotas usadas nas URLS 
*/
export const URL_CADASTRO_LISTA: string = '/cadastro';
export const URL_CADASTRO_NOVO: string = '/cadastro/novo';
export const URL_CADASTRO_EDITAR: string = '/cadastro/editar';
export const URL_CADASTRO_CANCEL: string = '/';
export const URL_COURSE_ROOM: string = '/course';
export const URL_LOGO: string = 'http://146.190.112.92/logo.png';

/* 
* Strings Labels
*/
export const LABEL_LOADING: string = 'Carregando dados...';
export const LABEL_COURSE: string = 'CURSOS';
export const LABEL_COURSE_MORE_SALE: string = 'Mais vendidos';
export const LABEL_COURSE_POPULAR: string = 'Populares';
export const LABEL_LIST_COURSE: string = 'Lista de Cursos';
export const LABEL_ADD_COURSE: string = 'Novo Curso';
export const LABEL_ADD_CANCEL: string = 'Cancelar Curso';
export const LABEL_DELETE_COURSE_CONFIRM: string = 'ATENÇÃO: confirma a exclusão do curso?'
export const LABEL_ERROR_COURSE_GET: string = 'Falha ao trazer cursos!';
export const LABEL_ERROR_COURSE_DELETE: string = 'Falha ao excluir curso!';
export const LABEL_SUCCESS_COURSE_DELETE: string = 'Curso excuido com sucesso!';
export const LABEL_ACCESS_REGISTER: string = 'Acessar Área do Aluno';

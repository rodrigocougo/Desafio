import Link from 'next/link';
import React, { Dispatch } from 'react';
import { Container } from 'reactstrap';
import { dataQueryProps, PagionationProps, typeCrudListColumns } from 'src/common/typeCridList';
import Table from 'src/components/Table';
import { HeaderBox, HeaderButtonNew, HeaderTitle } from 'src/styles/crud/styled';

interface CrudListProps {
  columns: Array<typeCrudListColumns>;  
  dataListAll: dataQueryProps;
  descriptionList: string;
  descriptionButtonAdd: string;
  descriptionRouterLink: string;
  descriptionButtonCancel: string;
  descriptionRouterLinkCancel: string;
  pagination: PagionationProps;
  setPagination: Dispatch<PagionationProps>;
}  

export default function CrudList(props: CrudListProps) {
  const {
    columns,
    dataListAll,
    descriptionList,
    descriptionButtonAdd,
    descriptionRouterLink,
    descriptionButtonCancel,
    descriptionRouterLinkCancel,
    pagination,
    setPagination
  } = props; 

  return (
    <React.Fragment>      
      <Container>
        <HeaderBox>
          <HeaderTitle>{descriptionList}</HeaderTitle>
          <HeaderButtonNew>
            <Link href={descriptionRouterLink} className="btn btn-sm btn-success p-2">{descriptionButtonAdd}</Link>{' '}
            <Link href={descriptionRouterLinkCancel} className="btn btn-sm btn-danger p-2">{descriptionButtonCancel}</Link>
          </HeaderButtonNew>
        </HeaderBox>
        <Table 
          columns={columns} 
          dataQuery={dataListAll}  
          paginationCrud={pagination}
          setPaginationCrud={setPagination}
        />
      </Container>
    </React.Fragment>
  );
}
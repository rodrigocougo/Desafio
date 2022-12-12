import React, { Dispatch } from 'react'
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table'
import { Table as BTable } from 'react-bootstrap'
import { dataQueryProps, PagionationProps, typeCrudListColumns } from 'src/common/typeCridList'

interface typeTableProps {
  columns: Array<typeCrudListColumns>;
  dataQuery: dataQueryProps;
  paginationCrud: PagionationProps;
  setPaginationCrud: Dispatch<PagionationProps>;
}

export default function Table(props: typeTableProps) {
  const { dataQuery, paginationCrud, setPaginationCrud } = props;
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => props.columns,
    []
  )  

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 5,
    })

  const defaultData = React.useMemo(() => [], [])

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data: dataQuery.data ?? defaultData,
    columns,
    pageCount: dataQuery?.getPageCount ? Math.round(dataQuery?.getPageCount / pageSize) : -1,
    state: {
      pagination,
      sorting
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    debugTable: true,
  })

  return (
    <div className="p-2">
      <div className="h-2" />
      {dataQuery.data.length <= 0 ? (<>
        <p className='p-message'>SEM REGISTROS</p>
      </>) : (
        <BTable striped bordered hover responsive size="sm">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td 
                    key={cell.id}
                    style={{
                      minWidth: cell.column.getSize()
                        ? cell.column.getSize()
                        : "auto",
                      maxWidth: cell.column.getSize()
                        ? cell.column.getSize()
                        : "auto",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </BTable>
      )}
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1 m-1"
          onClick={() => {
            table.setPageIndex(0)
            setPaginationCrud({
              filter: paginationCrud.filter, 
              sort: paginationCrud.sort, 
              skip: 0, 
              limit: Number(pageSize), 
            })
          }}
          disabled={!table.getCanPreviousPage()}
        >
          {'Primeiro'}
        </button>
        <button
          className="border rounded p-1 m-1"
          onClick={() => {
            table.previousPage()
            setPaginationCrud({
              filter: paginationCrud.filter, 
              sort: paginationCrud.sort, 
              skip: paginationCrud.skip - pageSize, 
              limit: Number(pageSize), 
            })
          }}
          disabled={!table.getCanPreviousPage()}
        >
          {'Anterior'}
        </button>
        <button
          className="border rounded p-1 m-1"
          onClick={() => {
            
            table.nextPage()
            setPaginationCrud({
              filter: paginationCrud.filter, 
              sort: paginationCrud.sort, 
              skip: paginationCrud.skip + pageSize, 
              limit: Number(pageSize), 
            })
          }}
          disabled={!table.getCanNextPage()}
        >
          {'Próximo'}
        </button>
        <button
          className="border rounded p-1 m-1"
          onClick={() => {
            console.log(11, table.getPageCount()) //3
            console.log(22, pageSize) //5
            table.setPageIndex(table.getPageCount() - 1)            
            setPaginationCrud({
              filter: paginationCrud.filter, 
              sort: paginationCrud.sort, 
              skip: Number((table.getPageCount() * pageSize) - pageSize),
              limit: Number(pageSize), 
            })
          }}
          disabled={!table.getCanNextPage()}
        >
          {'Ultimo'}
        </button>
        <span className="flex items-center gap-1">
          <br />
          <br />
          <div>Páginação</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} de{' '}
            {table.getPageCount()}{' '}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Vá para página: {' '}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              if (page > pageSize) return
              table.setPageIndex(page)
              setPaginationCrud({
                filter: paginationCrud.filter, 
                sort: paginationCrud.sort, 
                skip: Number(page * pageSize), 
                limit: Number(pageSize), 
              })
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
            setPaginationCrud({
              filter: paginationCrud.filter, 
              sort: paginationCrud.sort, 
              skip: paginationCrud.skip, 
              limit: Number(e.target.value), 
            })
          }}
        >
          {[5, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
        {dataQuery.isFetching ? 'Loading...' : null}
      </div>      
    </div>
  )
}
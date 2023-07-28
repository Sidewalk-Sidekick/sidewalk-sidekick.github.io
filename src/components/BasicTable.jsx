import sData from '../short-north-businesses.json';
import * as React from 'react';
import {
  getCoreRowModel,
  flexRender,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { useMemo } from 'react';
import { useState } from 'react';
import '../ui/BasicTable.css';

const BasicTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className='container'>
      <input
        className='basic-table-global-search'
        type='text'
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder='Search by business name'
      />
      <table className='basic-table'>
        {/* <thead className='basic-table-head'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className='basic-table-row' key={headerGroup.image_url}>
              {headerGroup.headers.map((header) => (
                <th
                  className='basic-table-col-head'
                  key={header.image_url}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{ asc: '▴', desc: '▾' }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead> */}
        <tbody className='basic-table-body'>
          {table.getRowModel().rows.map((row) => (
            <tr className='basic-table-row' key={row.image_url}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.image_url}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.setPageIndex(0)}>First page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last page
        </button>
      </div>
    </div>
  );
};

export default BasicTable;

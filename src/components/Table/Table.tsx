import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import styles from "./styles.module.scss"

interface Props<T> {
    data: T[];
    columns: ColumnDef<T>[];
    page?: number;
    nextPage?: ()=>void;
    prevPage?: ()=>void;
    hasNextPage?: boolean; 
    hasPrevPage?: boolean;
    totalPages?: number;
    setSearchParam?: (param: string)=>void
}

export const Table = <T,>({
    data, columns, page, nextPage, prevPage, hasNextPage, hasPrevPage, totalPages, setSearchParam} : Props<T>) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  
  const { getHeaderGroups, getRowModel } = table

    
  return (
    <div>
        {(page || setSearchParam )&& 
        <div className={styles.tools}>
            {
                setSearchParam && 
                <input onChange={(e)=>setSearchParam(e.target.value)} className={styles.searchInput} type="text" placeholder="Search by name"/>
            }
                        {page && 
            <div className={styles.pageControl}>
                {hasPrevPage? 
                <p
                className={styles.prevPage} 
                onClick={prevPage}>
                    {"<"}
                </p> :
                <p 
                className={`${styles.prevPage} ${styles.disableAction}`} 
                >
                    {"<"}
                </p>
                }    
                <p>Page {page} of {totalPages}</p>

                {hasNextPage? 
                <p 
                className={styles.nextPage}
                onClick={nextPage}>
                    {">"}
                </p> : 
                <p 
                className={`${styles.nextPage} ${styles.disableAction}`}
                >
                    {">"}
                </p>
                }
            </div>}
        </div>}
        <table className={styles.country_table}>
            <thead>
                <tr>
                    {
                    getHeaderGroups()[1].headers.map((header)=>(
                        <th>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                    ))
                    }
                </tr>
            </thead>
            <tbody>
                {getRowModel().rows.map((row)=>{
                    return <tr key={row.id}>
                        {
                            row.getVisibleCells().map((cell)=>{
                               return <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                        })
                        }
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
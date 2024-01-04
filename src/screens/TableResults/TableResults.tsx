import { useState, useEffect } from "react"
import { Table } from "@components/index"
import { MOCK_COUNTRIES } from "@config/mocks"
import { columns } from "./constants"
import { ICountryData } from "src/types/Types"
import { fakePager } from "@utils/utilsFunctions"
import styles from "./styles.module.scss"

export const TableResults = () => {

  const [page, setPage] = useState<number>(1)
  const [searchParam, setSearchParam] = useState<string>("")
  const [data, setData] = useState<ICountryData[]>(MOCK_COUNTRIES)

  useEffect(()=>{
   if(searchParam){
    const filteredMock = MOCK_COUNTRIES.filter(item => item.name.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()))
    filteredMock.length === 0 && filteredMock.push({
     name: "No results",
     official_name: "No results", 
     capital_city: "No results", 
     region: "No results", 
     sub_region: "No results", 
     votes: 0})

     setData(filteredMock)
   }
   else {
    setData(MOCK_COUNTRIES)
   }

  }, [searchParam])

  const searchHandler = (param: string)=>{
    setPage(1)
    setSearchParam(param)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results</h1>
      <Table 
        data={fakePager(data)[page - 1]}
        columns={columns}
        page={page}
        nextPage={()=> setPage(prev => prev + 1)}
        prevPage={()=> setPage(prev => prev - 1)}
        hasPrevPage={page === 1? false : true}
        hasNextPage={page === Math.ceil(data.length / 10)? false : true}
        totalPages={Math.ceil(data.length / 10)}
        setSearchParam={searchHandler}
      />
    </div>
  )
} 

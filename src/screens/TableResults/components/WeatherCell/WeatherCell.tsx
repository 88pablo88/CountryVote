import { useState } from "react"
import { useQuery } from "react-query"
import { getWeather } from "@services/weather"
import styles from "./styles.module.scss"

export const WeatherCell = ({city}: {city:string})=>{

    const [error, setError] = useState<string>("")

    const { data, isLoading } = useQuery([city], {
        queryFn: ()=> getWeather(city),
        onError: ()=> setError("No Info")
    })

    return <>
            {isLoading? 
                <div className={styles.loading}>
                    Loading weather...
                </div> : 
                error? 
                    <div className={styles.loading}>
                        {error}
                </div> :
                <div style={{backgroundColor: "black", padding: "5px", color: "white"}} dangerouslySetInnerHTML={{__html:data?.data}} />
            }
            </>
}
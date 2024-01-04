import {  ColumnDef } from '@tanstack/react-table';
import { WeatherCell } from "./components/WeatherCell/WeatherCell"

export interface Headers {
    name: string,
    official_name: string,
    capital_city: string,
    region: string,
    sub_region: string,
    votes: number
}

export const columns: ColumnDef<Headers>[] = [
    {
        id: "name",
        columns: [{
            accessorKey: "name",
            header: "Name",
            cell: info => info.getValue()
        }]
    },
    {
        id: "official_name",
        columns: [{
            header: "Official Name",
            accessorKey: "official_name",
            cell: info => info.getValue()
        }]
    },
    {
        id: "capital_city",
        columns: [{
            header: "Capital City",
            accessorKey: "capital_city",
            cell: info => info.getValue()
        }]
    },
    {
        id: "region",
        columns: [{
            header: "Region",
            accessorKey: "region",
            cell: info => info.getValue()
        }]
        
    },
    {
        id: "sub_region",
        columns: [{
            header: "Sub Region",
            accessorKey: "sub_region",
            cell: info => info.getValue()
        }]        
    },
    {
        id: "votes",
        columns: [{
            header: "Votes",
            accessorKey: "votes",
            cell: info => info.getValue()

        }]

    },
    {
        id: "weather",
        columns: [{
            header: "Weather",
            accessorKey: "weather",
            cell: info => {
                return <WeatherCell city={info.row.original.name} />
            }

        }]

    }
]
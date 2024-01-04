/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IFormData {
    name: string;
    email: string; 
    favorite_country: {value: string, label: string}
}

type FormDataKeys = 'name' | 'email' | 'favorite_country';

export type RegisterInputProps = FormDataKeys


export interface ICountryData {
    name: string;
    official_name: string;
    capital_city: string;
    region: string;
    sub_region: string;
    votes: number
}


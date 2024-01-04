import { Input, Select } from "@components/index"
import { IFormData } from "@src/types/Types"
import { useForm, Controller } from "react-hook-form"
import { emailRegex } from "@utils/regex"
import { useSnackbar } from "@hooks/useSnackbar"
import { MOCK_COUNTRIES } from "@config/mocks"

import styles from "./styles.module.scss"

export const VotingForm = () => {

  const {formState: {errors, isValid}, 
  register, handleSubmit, reset, control, resetField } = 
  useForm<IFormData>({mode:"onBlur"})

  const {snackbar, showSnackbarMessage} = useSnackbar()

  const onsubmit = (data: IFormData)=>{
    console.log(data)
    showSnackbarMessage(`Thanks for vote ${data.name}`)
    resetField("favorite_country")
    reset()
  }
  console.log("first")
  return (
    <form onSubmit={handleSubmit(onsubmit)} className={styles.formContainer}>
        <h1 className={styles.title}>Choose your favorite Country</h1>
        <Input 
            label="Name" 
            error={errors.name?.message}
            type="text"
            id="name"
            register= {register("name", {required: "This field is require"})} 
        />
        <Input 
            label="e-mail" 
            error={errors.email?.type === "pattern" ? "Invalid format" : errors.email?.message}
            type="email"
            id="email"
            register= {register("email", {required: "This field is require", pattern: emailRegex})} 
        />
        <Controller 
            control={control}
            name="favorite_country"
            rules={{required: "This field is require"}}
            render={({ field })=>(
                <Select
                    value={field.value}
                    label={"Choose your country"}
                    error={errors.favorite_country?.message || ""}
                    onchange={field.onChange} 
                    options={MOCK_COUNTRIES.map((country)=>({value: country.name, label: country.name}))}/>
            )}
        />
       <button
            className={styles.submitButton} 
            disabled={!isValid}>Vote!</button>
        {snackbar}
    </form>
  )
}
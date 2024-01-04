import { UseFormRegisterReturn } from "react-hook-form";
import { RegisterInputProps } from "src/types/Types"
import styles from "./styles.module.scss"


interface Props {
    register: UseFormRegisterReturn<RegisterInputProps>;
    label: string;
    error?: string,
    id: string, 
    type: "text" | "email",
}

export const Input = ({ label, id, type, register, error }: Props) => {

  return (
    <div className={styles.inputContainer}>
        <label 
            htmlFor={id} 
            className={styles.labelInput}
            >{label}
        </label>
        <input 
            autoComplete="off"
            type={type}
            className={`${styles.inputField} ${error? styles.inputError : ""}`}
            id={id}
            {...register} 
        />
        <p className={styles.error}>{error}</p>
    </div>
  )
}
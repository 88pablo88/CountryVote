import ReactSelect, {ActionMeta, SingleValue} from "react-select"
import style from "./styles.module.scss"

interface Props {
    options: {value: string, label: string}[];
    label: string;
    error: string;
    value: {value: string, label: string};
    onchange: (newValue: SingleValue<{
        value: string;
        label: string;
    }>, actionMeta: ActionMeta<{
        value: string;
        label: string;
    }>) => void
}

export const Select = ({ options, onchange, label, error, value }: Props) => {

  return (
    <div>
    <p  className={style.selectLabel}>{label}</p>
    <ReactSelect 
        onChange={onchange}
        options={options}
        value={value}
        theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            border: "1px solid #B3B3B3",
            colors: {
              ...theme.colors,
              primary: '#FF5A00',
            },
          })}
        styles={{
        control: (provided) => ({
            ...provided,
            height: "46px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #B3B3B3"
        }),
        container: (provided) => ({
            ...provided,
            borderRadius: "4px",
            marginTop: -12
        }),
        valueContainer: (provided) => ({
            ...provided,
            overflow: 'visible',
            display: "flex",
            justifyContent: "start",
            border: "none"
        }),
        option: (provided, state) => ({
            ...provided,
            display: "flex",
            justifyContent: "start",
            backgroundColor: state.isFocused? "#FF5A00" : "white",
            color: state.isFocused? "white" : "black",
        })

    }}/>
    <p className={style.error}>{error}</p>
    </div>
  )
}
import { ChangeEvent, useState } from "react";
import { Input } from "~/components/ui/input"

type Props = {
    className: string
    placeholder: string
    name: string
    value?: string | number | null | undefined | any;  
    onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTextArea?: (event: ChangeEvent<HTMLTextAreaElement>) => undefined;
}


export default function InputUpdate({ name ,className, value, onChangeInput, placeholder } : Props) {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (onChangeInput) {
            onChangeInput(event);
        }
    };

    return(
        <Input 
            name={name}
            value={inputValue} 
            className={className} 
            onChange={handleChangeInput} 
            placeholder={placeholder}
        />
    )
}
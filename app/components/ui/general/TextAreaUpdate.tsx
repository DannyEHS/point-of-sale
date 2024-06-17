import { ChangeEvent, useState } from "react";
import { Textarea } from "~/components/ui/textarea"

type Props = {
    name: string
    className: string
    placeholder: string
    value?: string | number | null | undefined;  
    onChangeTextArea?: (event: ChangeEvent<HTMLTextAreaElement>) => undefined;
}


export default function TextAreaUpdate({ name ,className, value, onChangeTextArea, placeholder } : Props) {
    const [textAreaValue, setTextAreaValue] = useState(value || '');  // Usa un estado interno

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
        if (onChangeTextArea) {
            onChangeTextArea(event);
        }
    };

    return(
        <Textarea
            name={name} 
            value={textAreaValue} 
            className={className} 
            onChange={handleChange} 
            placeholder={placeholder}
        />
    )
}
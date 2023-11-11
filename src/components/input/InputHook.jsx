import React from 'react';
import { useController } from 'react-hook-form';

const InputHook = ({control, ...props}) => {
    const {field} = useController({
        control,
        name:props.name,
        defaultValue:""
    })
    return (
        <input type="text"  className='p-4 border-gray-100 rounded-lg
        bg-white border border-solid outline-none transition-all focus:border-blue-500'
             {...field} {...props} />
    );
};

export default InputHook;
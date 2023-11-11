import { useField } from "formik";
import React from "react";

const RadioFomik = (props) => {
  const [field,meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="cursor-pointer custom-radio">
        <input
          {...field}  
          type="radio"
          value={props.value}
          className="hidden"
          checked={props.checked}
        />
        <div className="w-full h-full bg-white rounded-full"></div>
      </label>
      <span>{props.label}</span>
      {/* {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )} */}
    </div>
  );
};

export default RadioFomik;

import React from "react";

interface InputProps {
  id: string;
  // onChange? : any;
  // value?: string;
  label: string;
  type?: string;
  className?: string;
}

const Input = ({
  id,
  // onChange,
  // value,
  label,
  type,
  className,
}: InputProps) => {
  return (
    <div className="relative">
      <input
        // onChange={onChange}
        type={type}
        // value={value}
        id={id}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder={label}
      />

      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3"
        htmlFor={id}
      ></label>
    </div>
  );
};

export default Input;

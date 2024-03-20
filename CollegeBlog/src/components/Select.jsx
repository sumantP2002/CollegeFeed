import React , {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
} , ref) {

    const id = useid();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {/* options is an array */}
            {options?.map((option) => {
                <option key={options} value={option}>
                    {option}
                </option>
            })}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
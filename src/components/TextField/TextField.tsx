import { useState, ChangeEvent } from 'react'
import { field, container, textArea, errorContainer, labelCls } from './TextField.css'

interface Props {
  id: string
  type: 'text' | 'number' | 'textarea' | 'password'
  name: string
  placeholder?: string
  changeHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  label: string
  error?: string
  autocomplete?: 'on' | 'off'
  disabled?: boolean
  autoFocus?: false
  rows?: number
  defaultValue?: string
}

export const TextField = ({
  id,
  type,
  name,
  placeholder,
  changeHandler,
  label,
  error,
  autocomplete,
  disabled = false,
  autoFocus = false,
  rows,
  defaultValue,
}: Props) => {
  const [tempType, setTempType] = useState(type)
  const handleClick = () => {
    if (tempType === 'password') {
      setTempType('text')
    } else {
      setTempType('password')
    }
  }

  return (
    <div className={container}>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      <div className='Field'>
        {type !== 'textarea' && (
          <input
            className={field}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => changeHandler(evt)}
            type={tempType}
            name={name}
            id={id}
            autoComplete={autocomplete}
            autoFocus={autoFocus}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
          />
        )}
        {type === 'textarea' && (
          <textarea
            className={textArea}
            name={name}
            id={id}
            autoComplete={autocomplete}
            onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => changeHandler(evt)}
            autoFocus={autoFocus}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            defaultValue={defaultValue}
          />
        )}
        {type === 'password' && <button onClick={handleClick}>{tempType === 'password' ? 'show' : 'hide'}</button>}
      </div>
      {error && <div className={errorContainer}>{error}</div>}
    </div>
  )
}

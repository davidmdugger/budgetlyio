import * as React from 'react'

export interface Errors {
  [key: string]: any
}

export const useForm = <T>(initialState: T, validation: () => boolean) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState<Errors | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

    // if characters are entered in input, remove errors
    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  }

  // onSubmitHandler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    return values
  }

  // onBlur (set errors if user clicks/tabs away from input)
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()

    // if the value is empty or 0, return an error with the name
    if (value.length === 0 || parseInt(value) === 0) {
      return setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} cannot be empty`
      })
    }

    // check if value is empty (after removing spaces)
    if (value === "") {
      setValues({
        ...values,
        [e.target.name]: ""
      })
    }

    // add errors if there are any
    setErrors({
      ...errors,
      [e.target.name]: ''
    })

    return value
  }

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim()

    if (value === "") {
      return setValues({
        ...values,
        [e.target.name]: ""
      })
    }
  }

  return {
    values,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit,
    errors
  }
}
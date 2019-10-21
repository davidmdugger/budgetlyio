import * as React from 'react'

interface Errors {
  item?: string
  amount?: number
}

export const useForm = (initialState: any) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return values
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()

    // if the value is empty or 0, return an error with the name
    if (value.length === 0 || parseInt(value) === 0) {
      return setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} cannot be empty`
      })
    }

    if (value === "") {
      setValues({
        ...values,
        [e.target.name]: ""
      })
    }

    setErrors({
      ...errors,
      [e.target.name]: ''
    })

    return value
  }

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
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
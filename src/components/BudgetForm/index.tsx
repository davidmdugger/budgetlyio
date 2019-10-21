import * as React from 'react';

interface Errors {
  item?: string
  amount?: string
}

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFocus: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: null | Errors
  item: string
  amount: number | ''
  errorMessage: string
  addBudgetItem: (e: React.FormEvent) => void
  isValid: () => boolean
}

export default ({ handleChange, handleBlur, handleFocus, errors, item, amount, addBudgetItem, isValid }: Props): React.ReactElement => (
  <form onSubmit={addBudgetItem}>
    <div>
      <input type="text" name="item" value={item} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
      {errors && errors.item && errors.item.length > 0 && (<div><small>{errors.item}</small></div>)}
    </div>

    <div>
      <input type="number" name="amount" value={amount} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
      {errors && errors.amount && (<div><small>{errors.amount}</small></div>)}
    </div>

    <input disabled={!isValid()} type="submit" value="Add To Budget" />
  </form>

)
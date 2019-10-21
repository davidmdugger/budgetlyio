import * as React from 'react';
import { useForm } from "../../hooks/useForm";

interface BudgetItem {
  item: string
  amount: number
}

const budgetItem: BudgetItem = {
  item: '',
  amount: 0
}

export default (): React.ReactElement => {
  const { handleChange, handleSubmit, handleBlur, handleFocus, errors, values: { item, amount } } = useForm(budgetItem);

  const isSubmitDisabled: boolean = errors === null || Object.keys(errors).length === 0 || amount <= 0;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="item" value={item} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
        {errors && errors.item && errors.item.length > 0 && (<div><small>{errors.item}</small></div>)}
      </div>

      <div>
        <input type="number" name="amount" value={amount} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
        {errors && errors.amount && (<div><small>{errors.amount}</small></div>)}
      </div>

      <input disabled={isSubmitDisabled} type="submit" value="Add To Budget" />
    </form>
  )
}
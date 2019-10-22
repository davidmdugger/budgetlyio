import * as React from 'react';
import { useForm } from "../../hooks/useForm";
import { useSetFocus } from '../../hooks/useSetFocus';
import HomeTitles from './HomeTitles';
import BudgetForm from '../../components/BudgetForm';
import AlertMessage from '../../components/AlertMessage/AlertMessage';

export interface BudgetItem {
  item: string
  amount: '' | number
}

const budgetItem: BudgetItem = {
  item: '',
  amount: ''
}

const initialBudgetList: BudgetItem[] = []

export default () => {
  const [budgetList, setBudgetList] = React.useState(initialBudgetList);
  const { handleChange, handleSubmit, handleBlur, handleFocus, errors, values: { item, amount } } = useForm(budgetItem, isValid);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isAlertDisplayed, setAlert] = React.useState(false)

  const alertRef: React.RefObject<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    // only invoke useSetFocus hook when Alert is displayed
    if (isAlertDisplayed) useSetFocus(alertRef)
  }, [errorMessage])

  function isValid(): boolean {
    if (item.trim().length === 0) return false
    if (amount <= 0) return false

    return true;
  }

  function isItemInBudgetList(itemToAdd: BudgetItem): boolean {
    const obj = budgetList.find((o: BudgetItem) => o.item === itemToAdd.item);
    const itemNotInList = obj === undefined;

    if (!itemNotInList) {
      setErrorMessage('Yo, you already added that item');
      setAlert(true)
    }

    return itemNotInList;
  }

  // budget form onSubmit
  const addBudgetItem = (e: React.FormEvent): void => {
    e.preventDefault();
    const itemToAdd: BudgetItem = handleSubmit(e);

    // if item is in budgetList
    if (!isItemInBudgetList(itemToAdd)) {
      return;
    }


    if (!isValid()) {
      setErrorMessage('Something is wrong with the form')
      return;
    }

    setBudgetList([itemToAdd, ...budgetList])
  }

  const displayBudgetList = (): React.ReactElement[] | React.ReactElement => {
    return budgetList.length > 0 ? budgetList.map((item: BudgetItem) => <div key={item.amount}>{item.item}: {item.amount}</div>) : <div>No items</div>;
  }

  const displayError = (): React.ReactElement => {
    return <AlertMessage ref={alertRef} message={errorMessage} />
  }

  return (
    <div>
      {isAlertDisplayed && displayError()}

      <HomeTitles />
      <div>Monthly salary goes here</div>
      <BudgetForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        errors={errors}
        item={item}
        amount={amount}
        errorMessage={errorMessage}
        addBudgetItem={addBudgetItem}
        isValid={isValid}
      />
      {displayBudgetList()}
    </div>
  )
}
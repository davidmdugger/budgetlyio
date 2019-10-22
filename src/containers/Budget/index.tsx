import * as React from 'react';
import { useForm } from "../../hooks/useForm";
import { useSetFocus } from '../../hooks/useSetFocus';
import HomeTitles from './BudgetHeading';
import BudgetForm from '../../components/BudgetForm';
import TextInput from '../../library/TextInput/TextInput';
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
  const [alertMessage, setAlertMessage] = React.useState('');

  const alertRef: React.RefObject<HTMLDivElement> = React.useRef(null);
  const itemRef: React.RefObject<HTMLSpanElement> = React.useRef(null);
  const amountRef: React.RefObject<HTMLSpanElement> = React.useRef(null);

  React.useEffect(() => {
    // only invoke useSetFocus hook when Alert is displayed
    if (alertMessage.length > 0) useSetFocus(alertRef)

    if (errors && errors.item.length > 0) {
      useSetFocus(itemRef)
      return;
    }

    if (errors && errors.amount) {
      useSetFocus(amountRef)
      return;
    }
  }, [alertMessage, errors])

  function isValid(): boolean {
    if (item.trim().length === 0) return false;
    if (amount <= 0) return false;

    return true;
  }

  function isItemInBudgetList(itemToAdd: BudgetItem): boolean {
    const obj = budgetList.find((o: BudgetItem) => o.item === itemToAdd.item);
    const itemNotInList = obj === undefined;

    if (!itemNotInList) {
      setAlertMessage('Yo, you already added that item');
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
      setAlertMessage('Something is wrong with the form');
      return;
    }

    setBudgetList([itemToAdd, ...budgetList]);
  }

  const displayBudgetList = (): React.ReactElement[] | React.ReactElement => {
    return budgetList.length > 0 ? budgetList.map((item: BudgetItem) => <div key={item.amount}>{item.item}: {item.amount}</div>) : <div>No items</div>;
  }

  const displayError = (): React.ReactElement => {
    return <AlertMessage ref={alertRef} message={alertMessage} />
  }

  return (
    <div>
      {alertMessage.length > 0 && displayError()}

      <HomeTitles />

      <BudgetForm handleSubmit={addBudgetItem} isValid={isValid}>
        <TextInput
          type="text"
          name="item"
          value={item}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          label="Budget Item"
          errorMsg={errors && errors.item}
          required={true}
          ref={itemRef}
        />

        <TextInput
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          label="Amount"
          errorMsg={errors && errors.amount}
          required={true}
          ref={amountRef}
        />
      </BudgetForm>

      {displayBudgetList()}
    </div>
  )
}
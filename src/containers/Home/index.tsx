import * as React from 'react';
import HomeTitles from './HomeTitles'
import BudgetForm from '../../components/BudgetForm'

export default () => (
  <div>
    <HomeTitles />
    <div>Monthly salary goes here</div>
    <BudgetForm />
    <div>Budget list items go here</div>
  </div>
)
import React from 'react';
import Button, { SelectButton } from './Button';

import styles from '../styles/modules/app.module.scss';

function Header() {
  return (
    <div className={styles.appHeader}>
      <Button variant='secondary'>Click</Button>
      <SelectButton id='status'>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </SelectButton>
    </div>
  );
}

export default Header;

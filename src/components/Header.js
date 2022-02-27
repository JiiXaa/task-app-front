import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import TaskModal from './TaskModal';

import styles from '../styles/modules/app.module.scss';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setIsModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id='status'>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </SelectButton>
      <TaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Header;

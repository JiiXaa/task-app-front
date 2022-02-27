import React from 'react';
import styles from '../styles/modules/modal.module.scss';

import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';

function TaskModal({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      {isModalOpen && (
        <div className={styles.wrapper} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.container}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              onKeyDown={() => setIsModalOpen(false)}
              tabIndex='0'
              role='button'
            >
              <MdOutlineClose />
            </div>
            <form className={styles.form}>
              <h1 className={styles.formTitle}> Add Task</h1>
              <label htmlFor='title'>
                Title
                <input type='text' id='title' />
              </label>
              <label htmlFor='status'>
                Title
                <select name='status' id='status'>
                  <option value='incomplete'>Incomplete</option>
                  <option value='complete'>Complete</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type='submit' variant='primary'>
                  Add Task
                </Button>
                <Button
                  type='button'
                  variant='secondary'
                  onClick={() => setIsModalOpen(false)}
                  onKeyDown={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskModal;

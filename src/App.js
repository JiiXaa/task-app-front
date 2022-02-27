import Content from './components/Content';
import Header from './components/Header';
import PageLogo from './components/PageLogo';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className='container'>
      <PageLogo>TASK APP</PageLogo>
      <div className={styles.app__wrapper}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;

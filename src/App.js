import Header from './components/Header';
import PageLogo from './components/PageLogo';
import style from './styles/modules/app.module.scss';

function App() {
  return (
    <div className='container'>
      <PageLogo>TASK APP</PageLogo>
      <div className={style.app__wrapper}>
        <Header />
      </div>
    </div>
  );
}

export default App;

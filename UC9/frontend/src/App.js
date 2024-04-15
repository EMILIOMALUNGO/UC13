import Rotas from './routes'
import  AuthProvider  from './Contexts/AuthContext'
import './App.scss'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <AuthProvider>
      <div className='container-fluid'>
        <Rotas />
        <ToastContainer 
        autoClose={5000}
        />
      </div>
    </AuthProvider>
  );
}

export default App;

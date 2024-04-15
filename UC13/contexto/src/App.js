import { ToastContainer } from 'react-toastify'

import Rotas from './Routes/RotasIndex'



import 'react-toastify/dist/ReactToastify.css';


import AuthProvider from './Pages/Contexts/Contexts';

function App() {
  return (
    <div className='container-fluid'>
     <AuthProvider>
       <Rotas />
        <ToastContainer
          autoClose={5000}
        />
     </AuthProvider>
    </div>

  );
}

export default App;

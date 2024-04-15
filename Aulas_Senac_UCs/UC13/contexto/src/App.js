import Rotas from './routes/index'
import AuthProvider from './Contexts/Contexts'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </AuthProvider>
    </div>
  )
}

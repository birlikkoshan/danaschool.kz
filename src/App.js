import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {MainPage, AboutPage, DocumentsPage, ErrPage, AdmissionPage, GraduatesPage, ContactPage} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/documents',
    element: <DocumentsPage />
  },
  {
    path: '/to-apply',
    element: <AdmissionPage />
  },
  {
    path: '/contacts',
    element: <ContactPage />
  },
  {
    path: '*',
    element: <ErrPage />
  },
  {
    path: '/graduates',
    element: <GraduatesPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
    // <MainPage/>
  );
}

export default App;


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}
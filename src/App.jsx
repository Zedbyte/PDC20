import { useState } from 'react'
// import './App.css'
import '../src/css/App.css'

import Registration from './partials/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app__container grid">
        <Registration/>
        <div className="image__container container-fluid">
          <img className="logo bounce" src="https://lh5.googleusercontent.com/proxy/BJBc_TLsXY7nN3IJlMRBjgS6I_ZLgGxfQS-pHFscev-KrWvBUe5OYM6wNs_yLtgd6RhbI9zx4h2KaSVhsrVoAXlf9AQoF3u6guoIyV8hrg"></img>
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'

const App = () => {
  return (
    <main>
      <Routes>
        {/* {Public routes}*/}

          <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={ <SigninForm/> } />
            <Route path='/sign-up' element={ <SignupForm/> } />
          </Route>


        {/* {Private Routes} */}
        <Route element={<RootLayout/>}>
          <Route index="/" />
        </Route>
      </Routes>
    </main>
  )
}

export default App
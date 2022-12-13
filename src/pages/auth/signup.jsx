import React from 'react'

import { signup } from '@/lib/auth'

import FormsAuthSignup from '@/forms/auth/Signup'

function PagesAuthSignup() {
  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center" style={{ marginBottom: '20px' }}>Thok Signup</h1>

          <FormsAuthSignup
            onSubmit={signup}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthSignup

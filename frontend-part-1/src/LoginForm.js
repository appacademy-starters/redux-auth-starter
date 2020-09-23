import React from 'react';

const LoginForm = props =>
  <form>
    <div>
      <input type="email" placeholder="Email" required />
    </div>
    <div>
      <input type="password" placeholder="Password" required />
    </div>
    <div>
      <button>Log in</button>
    </div>
  </form>
;

export default LoginForm;

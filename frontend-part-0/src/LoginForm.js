import React from 'react';

const LoginForm = props =>
  <>
    <div>
      <input onChange={props.updateEmailValue} type="email" placeholder="Email" required />
    </div>
    <div>
      <input onChange={props.updatePasswordValue} type="password" placeholder="Password" required />
    </div>
    <div>
      <button onClick={props.tryLogin}>Log in</button>
    </div>
  </>
;

export default LoginForm;

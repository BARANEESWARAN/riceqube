import React from 'react';

import Footer from '../../organisms/Footer/Footer';
import './LoginTemplate.css';

function LoginTemplate({ children }) {
  return (
    <div className="login-template_container">
      <main className="main-content">{children}</main>
      <Footer className="footer" />
    </div>
  );
}

export default LoginTemplate;

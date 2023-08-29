
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../config/msalconfig";
import {Row, Col} from 'antd'



export const SignInButton = () => {
  
  const { instance } = useMsal();

 const handleLogin = async () => {
    try {
      const tokenResponse =  await instance.loginRedirect(loginRequest);
      const accessToken = tokenResponse.accessToken;
   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <div className="wrap-input100 validate-input m-t-16 sign-inn">
            <span className="sign-in-btn" onClick={handleLogin}>
              <img src="/microsoft-icon.png"  alt="" className="signin-logo" />
              Sign in with Microsoft
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
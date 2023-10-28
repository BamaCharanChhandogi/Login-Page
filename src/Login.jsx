// Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import img from './1.png';

// Import an eye icon from FontAwesome or another icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 90%;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    display: none; /* Hide image on mobile */
  }
`;

const RightSection = styled.div`
  flex: 1;
  text-align: center;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px 60px;
  border-radius: 5px;

  @media (max-width: 768px) {
    // padding: 20px 40px; /* Adjust padding for tablets */
  }
  @media (max-width: 480px) {
    background: none;
    box-shadow: none;
    width: 80%;
  }
`;

const Logo = styled.img`
  max-width: 300px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 250px; /* Adjust image size for tablets */
  }

  @media (max-width: 480px) {
    max-width: 200px; /* Adjust image size for mobile */
  }
`;

const FormContainer = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 16px;
`;

const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 80%; /* Adjust input width for tablets */
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust input width for mobile */
  }
`;

const CheckboxLabel = styled.label`
  display: inline;
  margin-left: 5px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  width: 75%;
  padding: 10px;
  background: #1575A7;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #1575A6;
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjust button width for tablets */
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust button width for mobile */
  }
`;

const SubmitContainer = styled.div`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Adjust font size for mobile */
  }
`;
const H1 = styled.h1`
  text-align: center;
`;

const PasswordToggle = styled.div`
  position: relative;
`;

const ToggleIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 30px;
  top: 40%;
  cursor: pointer;
`;

const SpacedDiv = styled.div`
  margin: 10px 0; 
`;
const Anchor = styled.a`
  color: #F78719;
`;
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <LeftSection>
        <Logo src={img} alt="logo" />
      </LeftSection>
      <RightSection>
        <FormContainer>
          <H1>Login</H1>
          <SpacedDiv>
            <Label htmlFor="username">Login ID</Label>
            <InputField type="text" placeholder="Username" />
          </SpacedDiv>
          <SpacedDiv>
            <Label htmlFor="password">Password</Label>
            <PasswordToggle>
              <InputField
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <ToggleIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
              />
            </PasswordToggle>
          </SpacedDiv>
          <SpacedDiv>
            <input type="checkbox" id="rememberMe" />
            <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
          </SpacedDiv>
          <SpacedDiv>
            <input type="checkbox" id="termsAgreement" />
            <CheckboxLabel htmlFor="termsAgreement">
              Agree to <Anchor href="#">Terms & Conditions</Anchor>
            </CheckboxLabel>
          </SpacedDiv>
          <SubmitContainer>
            <SubmitButton type="submit">Login</SubmitButton>
          </SubmitContainer>
          <P>
            Don't have an account <Anchor href="#">Register here</Anchor>
          </P>
        </FormContainer>
      </RightSection>
    </LoginContainer>
  );
}

export default Login;
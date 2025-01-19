import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Hey there,</h1>
    <p>You have got an email from a {name} with the following detail.</p>
    <p>Email: {email}</p>
    <p>message: {message}</p>
  </div>
);

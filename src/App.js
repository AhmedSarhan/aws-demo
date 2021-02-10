import { withAuthenticator } from 'aws-amplify-react';

function App() {
  return (
    <div className="container">
      <h3>Hello World</h3>
    </div>
  );
}

export default withAuthenticator(App);

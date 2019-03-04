import { Auth } from 'aws-amplify';

function authenticate(username, password) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (err) {
    
  }
}

import { Auth } from 'aws-amplify';

async function authenticate(username, password) {
  try {
    const user = await Auth.signIn(username, password);

    return user;
  } catch (err) {
    
  }
}

export {
  authenticate
}


    // Auth.signIn({
    //   username: 'anguyen',
    //   password: 'Infinity_2581'
    // }).then(user => {
    //   if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
    //     const { requiredAttributes } = user.challengeParam;

    //     Auth.completeNewPassword(
    //       user,
    //       'Infinity_2581',
    //       {
    //         email: 'anguyen@compulse.com',
    //         phone_number: '6822604053'
    //       }
    //     ).then(user => {
    //       console.log(user);
    //     }).catch(e => {
    //       console.log(e);
    //     });
    //   } else {
    //     console.log(user);

    //     Auth.currentSession().then(data => console.log(data)).catch(err => console.log(err));

    //     this.setState({
    //       isLoggedIn: true
    //     });
    //   }
    // }).catch(err => console.log(err));
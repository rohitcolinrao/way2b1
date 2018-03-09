import axios from "axios"

export default class ApiGithub{

  static getUser(action){
    return new Promise(resolve => {
      axios.get("http://api.github.com/users/greggersh/repos")
      .then((response) => {
        const user = {
          user: {
            username: response.data[0].owner.login,
            repos: response.data
          }
        }
        resolve(user)
      })
      .catch((error) => {
        console.log(error);
      });

    })
  }
}

const BASE_URL ='https://strangers-things.herokuapp.com'
const COHORT = '2209-FTB-ET-WEB-FT'

export async function getUrl(){
    let response = await fetch( `${BASE_URL}/api/${COHORT}/posts`)
    let result = await response.json()
      let posts = result.data.posts
      return posts
    }

export async function registerUser(username, password){
  const options = {
    method: 'Post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      }
      }
    )
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
  const result = await response.json()
  return result.data.token
}

export async function loginUser(username, password){
  let options = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  }
  let response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, options)
  let result = await response.json()
  console.log(result)
  return result
}

export async function getUserData(){
let options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  }
}
  let response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`)
  let result = await response.json()
  return result
}
console.log(getUserData())
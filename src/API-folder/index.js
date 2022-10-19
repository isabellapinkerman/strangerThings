const BASE_URL ='https://strangers-things.herokuapp.com'
const COHORT = '2209-FTB-ET_WEB_FT'

export async function getUrl(){
    let response = await fetch( `${BASE_URL}/api/${COHORT}/posts`)
    let result = await response.json()
      let posts = result.data.posts
      return posts
    }

export async function registerUser(){
  const options = {
    method: 'Post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: 'MexicanCreeper',
        password: '1*yginoi1',
      }
      }
    )
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`)
  const result = await response.json()
  console.log(result)
}
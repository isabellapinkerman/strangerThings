const BASE_URL ='https://strangers-things.herokuapp.com'
const COHORT = '2209-FTB-ET_WEB_FT'

export async function getUrl(){
    let response = await fetch( `${BASE_URL}/api/${COHORT}/posts`)
    let result = await response.json()
      let posts = result.data.posts
      setData(posts)
    }
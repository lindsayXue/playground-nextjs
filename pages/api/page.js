// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const getPageData = async (slugArr) => {
  let slug = ''
  let parent = ''

  if (slugArr.length === 2) {
    parent = slugArr[0]
    slug = slugArr[1]
  } else {
    slug = slugArr[0]
  }


  const response = await fetch(`https://api.uat.rfaweb.co.nz/v2/corporate/pages?slug=${slug}&parent=${parent}`)

  return response.json()
}

export default (req, res) => {
  if (req.method !== 'GET') {
    new Error();
  }

  const { slug } = req.query;
}

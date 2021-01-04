import URLMap from '../database/schemas/URLMap'
import { v4 as uuidv4 } from 'uuid'
export async function findUrlByCode(code: string) {
  return URLMap.findOne({ code })
}

export async function createNewUrl(url: string) {
  let code = uuidv4().split('-').shift()
  let urlDB = await URLMap.findOne({ code })
  while (urlDB) {
    code = uuidv4().split('-').shift()
    urlDB = await URLMap.findOne({ code })
  }
  const newURL = new URLMap({ code, url })
  return newURL.save()
}

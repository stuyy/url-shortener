import { Request, Response } from 'express'
import { createNewUrl, findUrlByCode } from '../services'

export async function handleRedirect(req: Request, res: Response) {
  const { code } = req.params
  // Query the database and find one by the code
  // If found, redirect, if not, return a 404
  const url = await findUrlByCode(code)
  return url ? res.redirect(url.url) : res.sendStatus(404)
}

export async function addUrl(req: Request, res: Response) {
  const { url } = req.body
  const newUrl = await createNewUrl(url)
  const domain = 'localhost:4300'
  res.render('url.ejs', { url: `http://${domain}/${newUrl.code}` })
}

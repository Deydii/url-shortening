import { rest } from 'msw';
import links from './links.json';
import { Results } from '../interfaces/results';

interface UrlParams {
  url: string
}

export const handlers = [
  rest.get<Results, UrlParams>('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
    const url = req.url.searchParams.get('url');
    if (url === "google.com") {
      return res (
        ctx.status(200),
        ctx.json(links[0])
      )
    }
    if (url === "github.com") {
      return res (
        ctx.status(200),
        ctx.json(links[1])
      )
    }
  })
]
const Router = require('./lib/router')
const Rewriter = require('./lib/rewriter')
const config = require('./config')

// TODO: Use a Builder for this mess
const Transformer = new HTMLRewriter()
    .on('head', new Rewriter.Meta(config('favicon')))
    .on('title', new Rewriter.InnerContent(config('title'), false))
    .on('body', new Rewriter.SetAttribute('class', config('bgClass')))
    .on('#profile', new Rewriter.RemoveAttribute('style'))
    .on('#avatar', new Rewriter.SetAttribute('src', config('avatar')))
    .on('#name', new Rewriter.InnerContent(config('name'), false))
    .on('#social', new Rewriter.RemoveAttribute('style'))
    .on('#links', new Rewriter.Links(config('links')))
    .on('#social', new Rewriter.SocialLinks(config('socials')))

const templateURL = 'https://static-links-page.signalnerve.workers.dev/'

async function handleIndex(request) {
    const template = await fetch(templateURL)
    const body = Transformer.transform(template)
    body.headers.append('content-type', 'text/html')
    return body
}

function handleLinks(links) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    const body = JSON.stringify(links)
    return new Response(body)
}

async function handleRequest(request) {
    const r = new Router()

    r.get('/links', () => handleLinks(config('links')))
    r.get('/socials', () => handleLinks(config('socials')))

    r.get('/', handleIndex)

    return await r.route(request)
}

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request))
})

function getIconSvg(name) {
    const src = 'https://simpleicons.org/icons/' + name.toLowerCase() + '.svg'
    return `<img src="${src}" />`
}

module.exports = {
    getIconSvg,
}

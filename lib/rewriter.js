const utils = require('./utils')

class RemoveAttribute {
    constructor(name) {
        this.name = name
    }
    element(el) {
        el.removeAttribute(this.name)
    }
}

class InnerContent {
    constructor(content, isHTML) {
        this.content = content
        this.isHTML = isHTML || false
    }
    element(el) {
        el.setInnerContent(this.content, { html: this.isHTML })
    }
}

class SetAttribute {
    constructor(attr, val) {
        this.attr = attr
        this.val = val
    }
    element(el) {
        el.setAttribute(this.attr, this.val)
    }
}

class Meta {
    constructor(favicon) {
        this.favicon = favicon
    }
    element(el) {
        el.prepend(
            `<link rel="icon" href="${this.favicon}" sizes="any" type="image/svg+xml">`,
            { html: true }
        )
    }
}

class SocialLinks {
    constructor(links) {
        this.links = links
    }

    element(el) {
        const content = this.links
            .map((s) => `<a href="${s.link}">${utils.getIconSvg(s.name)}</a>`)
            .join('\n')
        el.setInnerContent(content, { html: true })
    }
}

class Links {
    constructor(links) {
        this.links = links
    }

    element(el) {
        const content = this.links
            .map((s) => `<a href="${s.link}">${s.name}</a>`)
            .join('\n')
        el.setInnerContent(content, { html: true })
    }
}

module.exports = {
    Meta,
    InnerContent,
    SetAttribute,
    RemoveAttribute,
    SocialLinks,
    Links,
}

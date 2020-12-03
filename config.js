const config = {
    title: 'Rachel Chen - All My Links',
    favicon: 'https://miragespace.com/images/logo/miragespace.svg',

    // See https://tailwindcss.com/docs/customizing-colors#default-color-palette
    bgClass: 'bg-indigo-900',

    name: 'Rachel Chen',
    avatar: 'https://github.com/zllovesuki.png',

    links: [
        {
            name: 'miragespace',
            link: 'https://miragespace.com',
        },
        {
            name: 'photography',
            link: 'https://photos.rachel.sh',
        },
        {
            name: 'SlugSurvival',
            link: 'https://slugsurvival.com',
        },
    ],
    socials: [
        {
            name: 'Matrix',
            link: 'https://matrix.to/#/@rachel:owo.lu',
        },
        {
            name: 'ProtonMail',
            link: 'mailto:rachel@chens.email',
        },
        {
            name: 'GitHub',
            link: 'https://github.com/zllovesuki',
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/msrachelchen',
        },
        {
            name: 'git',
            link: 'https://github.com/zllovesuki/all-my-links',
        },
    ],
}

module.exports = (name) => config[name]

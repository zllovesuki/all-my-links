const config = {
    title: 'Rachel Chen - All My Links',
    favicon: 'https://miragespace.com/images/logo/miragespace.svg',

    bgClass: 'bg-indigo-800',

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
            name: 'GitHub',
            link: 'https://github.com/zllovesuki',
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/msrachelchen',
        },
    ],
}

module.exports = (name) => config[name]

import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
                await import('./translations/en/common.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'home',
            routes: ['/'], // you can use regexes as well!
            loader: async () => (
                await import('./translations/en/home.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'about',
            routes: ['/about'],
            loader: async () => (
                await import('./translations/en/about.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'work',
            routes: ['/work'],
            loader: async () => (
                await import('./translations/en/work.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'common',
            loader: async () => (
                await import('./translations/hu/common.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'home',
            routes: ['/'],
            loader: async () => (
                await import('./translations/hu/home.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'about',
            routes: ['/about'],
            loader: async () => (
                await import('./translations/hu/about.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'work',
            routes: ['/work'],
            loader: async () => (
                await import('./translations/hu/work.json')
            ).default,
        },
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
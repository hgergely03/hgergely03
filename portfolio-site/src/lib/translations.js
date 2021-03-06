import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
                await import('./locales/en/common.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'home',
            routes: ['/'], // you can use regexes as well!
            loader: async () => (
                await import('./locales/en/home.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'about',
            routes: ['/about'],
            loader: async () => (
                await import('./locales/en/about.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'competitions',
            routes: ['/about'],
            loader: async () => (
                await import('./locales/en/competitions.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'work',
            routes: ['/works', /\/works\/.*/, '/'], // Regex:  translations are loaded for all pages under works
            loader: async () => (
                await import('./locales/en/works.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'contact',
            routes: ['/contact'],
            loader: async () => (
                await import('./locales/en/contact.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'privacy',
            routes: ['/privacy'],
            loader: async () => (
                await import('./locales/en/privacy.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'common',
            loader: async () => (
                await import('./locales/hu/common.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'home',
            routes: ['/'],
            loader: async () => (
                await import('./locales/hu/home.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'about',
            routes: ['/about'],
            loader: async () => (
                await import('./locales/hu/about.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'competitions',
            routes: ['/about'],
            loader: async () => (
                await import('./locales/hu/competitions.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'work',
            routes: ['/works', /\/works\/.*/, '/'],
            loader: async () => (
                await import('./locales/hu/works.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'contact',
            routes: ['/contact'],
            loader: async () => (
                await import('./locales/hu/contact.json')
            ).default,
        },
        {
            locale: 'hu',
            key: 'privacy',
            routes: ['/privacy'],
            loader: async () => (
                await import('./locales/hu/privacy.json')
            ).default,
        },
    ],
    fallbackLocale: 'en',
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
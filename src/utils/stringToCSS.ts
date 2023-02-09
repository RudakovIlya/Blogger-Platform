export const stringToCSS = (str: string | number | undefined) => {
    return typeof str === 'string' ? str : `${str}px`
}
const getUrlExtension = (url: string): string => {
    const urlExtension = url
        .split('.')
        .pop()
        ?.toLowerCase()

    return urlExtension || 'unknown'
};

export default getUrlExtension
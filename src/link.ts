export const link = (str: string, href?: string): string => {
    if (href) {
        return '<a href="' + href + '">' + str + '</a>';
    } else {
        return '<a>' + str + '</a>';
    }
}

export const a = link;

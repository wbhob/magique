export const header = (level: number) => {
    return (str: string): string => {
        return '<h' + level + '>' + str + '</h' + level + '>';
    }
}

export const h = header;
export const h1 = header(1);
export const h2 = header(2);
export const h3 = header(3);
export const h4 = header(4);
export const h5 = header(5);
export const h6 = header(6);

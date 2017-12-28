import { expect } from 'chai';

import { h1, header } from '../header';

describe('Header', () => {
    let str: any;

    beforeEach(() => {
        str = 'hello';
    });

    it('should return a string wrapped in given header level', () => {
        expect(header(3)(str)).to.equal('<h3>hello</h3>');
    });

    it('should register header aliases', () => {
        expect(h1(str)).to.equal('<h1>hello</h1>');
    });
});


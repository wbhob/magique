import { expect } from 'chai';

import { link } from '../link';

describe('Links', () => {
    let str: any;

    beforeEach(() => {
        str = 'hello';
    });

    it('should return an empty <a> tag when no link is passed', () => {
        expect(link('hello')).to.equal('<a>hello</a>');
    });

    it('should set href when passed a link', () => {
        expect(link(str, 'http')).to.equal('<a href="http">hello</a>');
    });
});


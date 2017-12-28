import { expect } from 'chai';

import { italic } from '../italic';

describe('Italic', () => {
    let str: any;

    beforeEach(() => {
        str = 'hello';
    });

    it('should return str wrapped in <em>', () => {
        expect(italic(str)).to.equal('<em>hello</em>');
    });
});

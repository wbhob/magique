import { expect } from 'chai';

import { bold } from '../src/bold';

describe('Bold', () => {
    let str: any;

    beforeEach(() => {
        str = 'hello';
    });

    it('should return str wrapped in <strong>', () => {
        expect(bold(str)).to.equal('<strong>hello</strong>');
    });
});

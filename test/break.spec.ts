import { expect } from 'chai';

import { br } from '../src/break';

describe('Break', () => {
    it('should only return a break', () => {
        expect(br()).to.equal('<br />');
    });
});

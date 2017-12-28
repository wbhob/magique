import { expect } from 'chai';

import { br } from '../break';

describe('Break', () => {
    it('should only return a break', () => {
        expect(br()).to.equal('<br />');
    });
});

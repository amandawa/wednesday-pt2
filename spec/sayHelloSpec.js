import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('Greet', function() {
    it('renders without problems', function() {
        var sayhello = TestUtils.renderIntoDocument(<TestWrapper>
            <SayHello />
            </TestWrapper>);
        expect(sayhello).toEqual(jasmine.anything());
    });
});
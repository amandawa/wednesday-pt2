import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollContainer from '../src/containers/PollContainer.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('Poll Container', function() {
    it('renders without problems', function() {
        var pollcontainer = TestUtils.renderIntoDocument(<TestWrapper>
            <PollContainer />
            </TestWrapper>);
        expect(pollcontainer).toEqual(jasmine.anything());
    });
});
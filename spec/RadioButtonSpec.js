import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButton.js';

describe('Radio Button', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
            <RadioButton text="Answer 1" />
        );
    });

    it('renders without problems', function() {
        expect(component).toEqual(jasmine.anything());
    });

    // it('prints a message', function() {
    //     var actual = TestUtils.findRenderedDOMComponentWithTag(component,'span')
    //         .textContent;
    //     var expected = 'Answer 1';
    //     expect(actual).toEqual(expected);
    // });
});
import React from 'react';
import renderer from 'react-test-renderer';

import comingsoonpage from '../src/component/comingsoonpage.js';

describe('<comingsoonpage />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<comingsoonpage />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
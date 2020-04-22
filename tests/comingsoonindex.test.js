import React from 'react';
import renderer from 'react-test-renderer';

import comingsoonindex from '../src/component/comingsoonindex.js';

describe('<comingsoonindex />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<comingsoonindex />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
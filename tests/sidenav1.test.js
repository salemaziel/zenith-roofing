import React from 'react';
import renderer from 'react-test-renderer';

import sidenav1 from '../src/component/sidenav1.js';

describe('<sidenav1 />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<sidenav1 />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
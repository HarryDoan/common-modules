import React from 'react';
import TabViewExample from '../src/common/TabViewExample';
import {fireEvent, render} from '@testing-library/react-native';

describe('TabViewExample', () => {
  it('renders the component', () => {
    const {getByText} = render(<TabViewExample />);

    // Ensure that the component renders successfully by looking for a tab label
    expect(getByText('Tab 1')).toBeTruthy();
  });

  it('switches tabs when a tab is clicked', async () => {
    const {getByText} = render(<TabViewExample />);

    // Initially, Tab 1 should be active
    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');

    expect(tab1).toHaveStyle({backgroundColor: 'crimson'});
    expect(tab2).not.toHaveStyle({backgroundColor: 'crimson'});

    // Click on Tab 2
    fireEvent.press(tab2);

    // Now, Tab 2 should be active
    expect(tab1).not.toHaveStyle({backgroundColor: 'crimson'});
    expect(tab2).toHaveStyle({backgroundColor: 'crimson'});
  });

  it('renders the correct number of items in Tab 1', () => {
    const {getByText, queryByText} = render(<TabViewExample />);

    // Initially, Tab 1 should be active, and it should have 5 items
    const tab1 = getByText('Tab 1');
    expect(tab1).toHaveStyle({backgroundColor: 'crimson'});

    for (let i = 1; i <= 5; i++) {
      const item = queryByText(`Item ${i}`);
      expect(item).toBeTruthy();
    }
  });

  it('does not render items in Tab 2 when it is not active', () => {
    const {queryByText} = render(<TabViewExample />);

    // Initially, Tab 1 should be active, and Tab 2 should not be active
    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');

    expect(tab1).toHaveStyle({backgroundColor: 'crimson'});
    expect(tab2).not.toHaveStyle({backgroundColor: 'crimson'});

    // Check if items in Tab 2 are not rendered
    for (let i = 1; i <= 5; i++) {
      const item = queryByText(`Item ${i}`);
      expect(item).toBeNull();
    }
  });
});

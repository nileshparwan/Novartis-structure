import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { contexts } from './context';

// The viewport resolution has been taken on the following website https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  }
});

addDecorator(withContexts(contexts));

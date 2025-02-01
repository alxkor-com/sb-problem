import AllStories from './button.stories.portable';
import {
  test,
} from '@playwright/experimental-ct-react';
import { createTest } from '@storybook/react/experimental-playwright';

const sbTest = createTest(test);

sbTest.describe('Button', () => {
  sbTest('Primary', async ({ mount }) => {
    await mount(<AllStories.Primary onClick={() => {}} />);
  });
});

/*
Works

// test.describe('Button', () => {
//   test('Primary', async ({ mount }) => {
//     await mount(<AllStories.Primary onClick={() => {}} />);
//   });
// });

*/
import type { StoryObj } from '@storybook/react';
import { Center as BaseCenter } from '~/components/base/Center/Center';
import { BodyMediumSingleLine } from '~/components/base/Typography/Body';

const Center = BaseCenter<'div'>;

export default {
  title: 'Base/Center',
  component: Center,
};

const render = () => {
  return (
    <Center>
      <BodyMediumSingleLine>コンテンツ</BodyMediumSingleLine>
    </Center>
  );
};

export const Default: StoryObj<typeof Center> = {
  render,
};

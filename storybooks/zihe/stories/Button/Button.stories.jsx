import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
  backgroundColor: 'orange',
  padding: '10px 10px',
  disabled: false,
  onClick: () => alert('the small button is clicked!'),
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium Button',
  backgroundColor: 'yellow',
  padding: '20px 20px',
  disabled: false,
  onClick: () => alert('the medium button is clicked!'),
}
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
  backgroundColor: 'green',
  padding: '30px 30px',
  disabled: false,
  onClick: () => alert('the large button is clicked!'),
};
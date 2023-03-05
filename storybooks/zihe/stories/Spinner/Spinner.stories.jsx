import React from "react";
import Spinner from "./Spinner";

export default {
    title: "components/Spinner",
    component: Spinner,
    argTypes: {},
};

const Template = (args) => <Spinner {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
};
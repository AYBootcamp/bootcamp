import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default {
    title: "MUI/Checkbox",
    component: Checkbox,
    argTypes: {}
}
const Template = (args) => {
    return <Checkbox {...args}>MUI Checkbox</Checkbox>
}
export const Basic = Template.bind({});
Basic.args = {
    size: 'large',
    color: 'success',
};

const StyledCustomize = styled(Checkbox)`
    background-color: #f3f3ca;
`
export const Customize = (args) => (
    <StyledCustomize {...args}>Customized Checkbox</StyledCustomize>
)
Customize.args = {}

const theme = createTheme({
    palette: {
        primary: {
            main: '#dae9f9',
        },
        secondary: {
            main: '#fbd4e2',
        },
    },
});
export const ThemeCustomize = () => {
    return (
        <ThemeProvider theme={theme}>
            <Checkbox sx={{ backgroundColor: theme.palette.primary.main }}>Customized Checkbox</Checkbox>
        </ThemeProvider>
    )
}
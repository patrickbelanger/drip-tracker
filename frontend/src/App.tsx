import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import ErrorPageNotFound from "./pages/error-page-not-found";
import LoginLayout from "./pages/login-layout";
import LoginForm from "./pages/login-form";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import Welcome from "./pages/welcome";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Welcome /> },
            { path: '*', element: <ErrorPageNotFound /> },
        ],
    },
];



function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    // @ts-ignore
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    {routes.map(({path, element, children}) => (
                        <Route key={path} path={path} element={element}>
                            {children &&
                                children.map((child) => (
                                    <Route key={`${path}${child.path}`} {...child} />
                                ))}
                        </Route>
                    ))}
                    <Route path="/login" element={<LoginLayout/>}>
                        <Route index element={<LoginForm/>}/>
                        <Route path="*" element={<ErrorPageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
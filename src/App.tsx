import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./store";

import { HomePage } from "./views/home";

// Define global style constants
const PRIMARY_COLOR = "#4289b3";
const SECONDARY_COLOR = "#6153cc";

declare module "@material-ui/core/styles/createMuiTheme" {
    interface Theme {
        scrollbar: {
            boxSizing: React.CSSProperties["boxSizing"];
            overflow: React.CSSProperties["overflow"];
            "&::-webkit-scrollbar-track": {
                background: React.CSSProperties["background"];
            };
            "&::-webkit-scrollbar": {
                width: React.CSSProperties["width"];
            };
            "&::-webkit-scrollbar-thumb": {
                borderRadius: React.CSSProperties["borderRadius"];
                background: React.CSSProperties["background"];
                height: React.CSSProperties["height"];
            };
        };
    }

    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        scrollbar?: {
            boxSizing?: React.CSSProperties["boxSizing"];
            overflow?: React.CSSProperties["overflow"];
            "&::-webkit-scrollbar-track"?: {
                background: React.CSSProperties["background"];
            };
            "&::-webkit-scrollbar"?: {
                width: React.CSSProperties["width"];
            };
            "&::-webkit-scrollbar-thumb"?: {
                borderRadius: React.CSSProperties["borderRadius"];
                background: React.CSSProperties["background"];
                height: React.CSSProperties["height"];
            };
        };
    }
}

// Generate custom Material UI theme
let theme = createMuiTheme({
    // Setup global color palette
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
        error: {
            main: red[600],
        },
    },
    // Setup global scrollbar mixin
    scrollbar: {
        boxSizing: "border-box",
        overflow: "auto",
        "&::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "&::-webkit-scrollbar": {
            width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "3px",
            background: "#cacad0",
            height: "20px",
        },
    },
    // Declare default overrides
    overrides: {
        // Custom tooltip
        MuiTooltip: {
            tooltip: {
                backgroundColor: PRIMARY_COLOR,
                fontWeight: "bold",
            },
            arrow: {
                color: PRIMARY_COLOR,
            },
        },
    },
});

// Enable Material UI Responsive Fonts
theme = responsiveFontSizes(theme);

// Setup browser history API for
//  usage with Google Analytics
const history = createBrowserHistory({ basename: process.env.REACT_APP_BASENAME as string });

// Initialize Google Analytics page view tracking
history.listen((location) => {
    ReactGA.set({ page: window.location.pathname }); // Update the user's current page
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
});

// Setup Google Analytics
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS as string);

// Setup App
// @ts-ignore
export const App: React.FC = () => {
    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <React.Fragment>
            {/* Setup CSS Baseline for Material UI */}
            <CssBaseline />
            {/* Redux Provider */}
            <Provider store={store}>
                {/* Provide Material UI Theme to App */}
                <ThemeProvider theme={theme}>
                    {/* Instantiate Primary Application Router */}
                    <Router history={history}>
                        <Switch>
                            <Route exact path={"/"} component={HomePage} />
                            <Redirect to="/" />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    );
};

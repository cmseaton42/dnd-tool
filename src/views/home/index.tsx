import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { InitiativeTracker } from "./initiative-tracker";

import Grid from "@material-ui/core/Grid";

export const HomePage: React.FC = () => {
    const cls = useStyles();

    return (
        <Grid container justify="center" className={cls.root}>
            <Grid item sm={12} md={8} lg={7} xl={6}>
                <InitiativeTracker />
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        padding: theme.spacing(2),
    },
}));

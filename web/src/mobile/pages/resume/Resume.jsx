import { Container, Divider, Grid } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'
import { Chart } from "react-google-charts";
import { Alert, AlertTitle } from '@material-ui/lab'

export const Resume = () => {
    const classes = white();
    //["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data1 = [
        ["Hours", "Assigned", "Worked"],
        ["Monday", 9, 9.1],
        ["Tuesday", 6, 4.3],
        ["Wednesday", 6, 7.2],
        ["Thursday", 5, 0],
        ["Friday", 5, 4.9],
        ["Saturday", 0, 0],
        ["Sunday", 0, 0],
    ];

    const options1 = {
        title: "Summary of hours worked this week",
        chartArea: { width: "55%" },
        colors: ["#b0120a", "#ffab91"],
        hAxis: {
            title: "Hours",
            minValue: 0,
        },
        vAxis: {
            title: "Day",
        },
    };

    const data2 = [
        ["Task", ""],
        ["days late", 3],
        ["days marking before", 2],
    ];

    return (
        <Fragment>
            <Topbar title={'Resume'} table={false}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    <Alert severity="info">
                        <AlertTitle>Weekly summary</AlertTitle>
                        <ul>
                            <li>In this section you can see the weekly summary of your brands.</li>
                            <li>See the number of hours you work.</li>
                        </ul>
                    </Alert>

                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data={data1}
                        options={options1}
                    />
                    <Divider />
                    <Chart
                        chartType="PieChart"
                        data={data2}
                        options={{title: "Days late last week",}}
                        width={"100%"}
                        height={"250px"}
                    />
                    <Divider />
                </Grid>
            </Container>

            <Bottombar index={0}/>
        </Fragment>
    )
}
import React, { useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
// import { useSprings, animated } from 'react-spring'
// import clamp from 'lodash-es/clamp'
// import { useGesture } from 'react-use-gesture'
import {
    H2Course,
    H4Course,
    H4Form,
    ChoosenForm,
    H5Choosen,
    SelectChoosenLevel,
    SelectChoosenCate,
    SelectChoosen,
    SubChoosen,
    BodyChoosen,
    ChoosenFormItem,
} from "./styled-courseInfor";

const pages = [
    'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        formCourse: {
            backgroundColor: '#000000',
            padding: '40px 30px 40px',
            marginTop: '0em',

        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            color: '#fff',
        },
        optionBack: {
            backgroundColor: '#2d3e50',
            textAlign: 'left',
            display: 'block',
            outline: 'none'
        }
    }),
);

export default function CourseInfor() {
    const classes = useStyles();
    const index = useRef(0)
    const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2)
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
            const sc = down ? 1 - distance / window.innerWidth / 2 : 1
            return { x, sc, display: 'block' }
        })
    })
    return (
        <div className={classes.root}>
            <Container fixed>
                <Grid container >




                </Grid>
            </Container>
        </div>
    );
}




















{/* <Grid item xs={12} sm={7}>
                        <H2Course>WELCOME TO PICKBAZAR</H2Course>
                        <H4Course>PickBazar exploits the need to recruit programmers from the business and integrates projects with the latest technology into an active training approach for students. Our dynamic curriculum is always refined and optimized over time by our founding members - a team of seasoned software developers and technology directors.</H4Course>
                    </Grid>
                    <Grid item xs={12} sm={5} style={{ backgroundColor: 'black', paddingBottom: 30 }}>
                        <H4Form>Search for a course</H4Form>
                        <BodyChoosen>
                            <ChoosenForm>
                                <H5Choosen>Choose your level : </H5Choosen>
                                <SelectChoosenLevel className={classes.formControl}>
                                    <option className={classes.optionBack} label="Choose level" value="1" />
                                    <option className={classes.optionBack}>Introductory</option>
                                    <option className={classes.optionBack}>Intermediate</option>
                                    <option className={classes.optionBack}>Profession</option>
                                </SelectChoosenLevel>
                            </ChoosenForm>
                            <ChoosenFormItem>
                                <H5Choosen>Category : </H5Choosen>
                                <SelectChoosenCate className={classes.formControl}>
                                    <option value="-1" label="Choose the category" className={classes.optionBack} />
                                    <option value="-1" className={classes.optionBack}>Please choose your level</option>
                                </SelectChoosenCate>
                            </ChoosenFormItem>
                            <ChoosenFormItem>
                                <H5Choosen>Subjects : </H5Choosen>
                                <SelectChoosen className={classes.formControl}>
                                    <option value="-1" label="choose the subject" className={classes.optionBack} />
                                    <option value="-1" className={classes.optionBack}>Please select level, category</option>
                                </SelectChoosen>
                            </ChoosenFormItem>
                            <ChoosenFormItem>
                                <SubChoosen>Submit </SubChoosen>
                            </ChoosenFormItem>
                        </BodyChoosen>
                    </Grid> */}
import Box_1 from "../levels/Box_1";
import Box_2 from "../levels/Box_2";
import Box_3 from "../levels/Box_3";
import Box_4 from "../levels/Box_4";
import Box_5 from "../levels/Box_5";
import React from "react";
import Box_6 from "../levels/Box_6";
import Box_7 from "../levels/Box_7";
import {useSelector} from "react-redux";
import Box from "../levels/Box";
import Box_8 from "../levels/Box_8";
import Box_9 from "../levels/Box_9";

export default function Levels(props) {
    const selectExit = useSelector((state) => state.gameExitLevel);

    switch (props.selectLevel) {
        case 1:
            return <Box_1 level={1}/>;
        case 2:
            return <Box_2 level={2}/>;
        case 3:
            return <Box_3 level={3}/>;
        case 4:
            return <Box_4 level={4}/>;
        case 5:
            return <Box_5 level={5}/>;
        case 6:
            return <Box_6 level={6}/>;
        case 7:
            return <Box_7 level={7}/>;
        case 8:
            return <Box_8 level={8}/>;
        case 9:
            return <Box_9 level={9}/>;
        default:
            return <Box_1 level={1}/>
    }
}
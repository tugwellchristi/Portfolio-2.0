import React from "react";
import { GridItem } from "@chakra-ui/react";

const Project = ({ name, description, bgColor, area }) => {
    return (
        <GridItem pl='2' bg={bgColor} area={area}>
            <h3>{name}</h3>
            <p>{description}</p>
        </GridItem>
    );
};

export default Project;
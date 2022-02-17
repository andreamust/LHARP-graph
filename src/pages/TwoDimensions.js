import { ForceGraph2D, ForceGraph3D } from "react-force-graph";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

const hsimData = require("./hsim.json");
// let hsimDataFiltered = hsimData.filter((threshold) => )
const dataFiltered = hsimData.links.filter((n) => n.name > 0.3);

const hsimDataFiltered = { nodes: hsimData.nodes, links: dataFiltered };
console.log(hsimDataFiltered);

function ThreeDimensions() {
  return (
    <Flex>
      <ForceGraph2D
        graphData={hsimDataFiltered}
        // backgroundColor="white"
        nodeLabel="name"
        nodeAutoColorBy="group"
        nodeRelSize={0.8}
        nodeOpacity={0.88}
        nodeResolution={10}
        // linkAutoColorBy="group"
        linkOpacity={0.05}
        linkWidth={0.5}
      />
    </Flex>
  );
}

export default ThreeDimensions;

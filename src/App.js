import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ThreeDimensions from "./pages/ThreeDimensions";
import TwoDimensions from "./pages/TwoDimensions";
import MainNavigation from "./components/layout/MainNavigation";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/3d-graph">
            <ThreeDimensions />
          </Route>
          <Route path="/2d-graph">
            <TwoDimensions />
          </Route>
        </Switch>
      </ChakraProvider>
    </div>
  );
}

export default App;

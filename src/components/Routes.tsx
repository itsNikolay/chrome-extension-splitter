import React from 'react'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import Grid from "./Grid";
import Layout from "./Layout";
import {
  FOUR_COLUMN_TYPES, ONE_COLUMN_TYPES,
  THREE_COLUMN_TYPES, TWO_COLUMN_TYPES
} from "../lib/columnsInfo";
import {
  FOUR_COLUMNS_PATH,
  ROOT_PATH,
  THREE_COLUMNS_PATH, TWO_COLUMNS_PATH
} from "../lib/routePathes";

const Routes = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path={ROOT_PATH}>
          <Grid columnTypes={ONE_COLUMN_TYPES} />
        </Route>
        <Route exact path={TWO_COLUMNS_PATH}>
          <Grid columnTypes={TWO_COLUMN_TYPES} />
        </Route>
        <Route exact path={THREE_COLUMNS_PATH}>
          <Grid columnTypes={THREE_COLUMN_TYPES} />
        </Route>
        <Route exact path={FOUR_COLUMNS_PATH}>
          <Grid columnTypes={FOUR_COLUMN_TYPES} />
        </Route>
      </Switch>
    </Layout>
  </HashRouter>
)

export default Routes

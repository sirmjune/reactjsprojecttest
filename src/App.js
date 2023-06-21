import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./components/layout/Layout";
import AddData from "./pages/AddDataPage";
import {Provider} from "react-redux";
import store from "./api/store";
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {postsApi} from "./api/api"

function App() {

  return (
      <Provider store={store}>
          <ApiProvider api={postsApi}>
          <Layout>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="add" element={<AddData/>}/>
              </Routes>
          </Layout>
          </ApiProvider>
      </Provider>
  );
}

export default App;

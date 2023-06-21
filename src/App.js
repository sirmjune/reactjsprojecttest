import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import NewSuresPage from "./pages/AddDataPAge";
import Layout from "./components/layout/Layout";
import {QueryClient, QueryClientProvider} from 'react-query';
import AddData from "./pages/AddDataPAge";

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <Layout>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="add" element={<AddData/>}/>
              </Routes>
          </Layout>
      </QueryClientProvider>
  );
}

export default App;

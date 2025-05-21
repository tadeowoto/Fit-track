import { Layout } from "./layouts/Layout";
import { Main } from "./components/Main";
import { StatsProvider } from "./context/StatsContext";

function App() {
  return (
    <StatsProvider>
      <Layout>
        <Main />
      </Layout>
    </StatsProvider>
  );
}

export default App;

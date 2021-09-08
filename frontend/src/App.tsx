import BarChart from "components/barChar";
import DonutChart from "components/donutChart"
import DataTable from "components/datatable";
import Footer from "components/footer";
import NavBar from "components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5>Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5>Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>

        <DataTable />
        
      </div>
      <Footer />
    </>
  );
}

export default App;

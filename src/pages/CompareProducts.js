import ProductComparisonTable from "../components/ProductComparisonTable";
import ProductComparisonCard from "../components/ProductComparisonCard";

function CompareProducts() {
  return (
    <>
      <div className="tabled">
        <ProductComparisonCard />
        <ProductComparisonTable />
      </div>
    </>
  );
}

export default CompareProducts;


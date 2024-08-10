import {
  Row,
  Col,
  Card,
} from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProductToCompare } from "../store/slice/compareSlice";
import ProductTable from "../components/ProductTable";


function Home() {
  const history = useHistory();
  const dispatch = useDispatch();


  const handleCompareButtonClick = (table) => {
    dispatch(addProductToCompare(table));
    history.push("/product-compare");
  };

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Products"
            >
              <div className="table-responsive">
                <ProductTable handleCompareButtonClick={handleCompareButtonClick} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;

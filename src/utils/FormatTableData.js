import { Avatar, Button, Typography } from "antd";
import { Tag } from "antd";
import { FaStar } from "react-icons/fa";

const { Title } = Typography;


export const formatTableData = (tableData, handleButtonClick, comparisonProductList) => {
  if (!tableData.length) return [];

  return tableData.map((table) => {
    const isDisabled = comparisonProductList.find(el => el.id === table.id)
    return {
      key: table.id,
      product: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={table.thumbnail}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{table.title}</Title>
              <div className="">
                <span>{table.rating}</span>
                <FaStar size={10} />
              </div>
            </div>
          </Avatar.Group>
        </>
      ),
      category: (
        <>
          <div className="author-info">
            <Tag>{table.category}</Tag>
          </div>
        </>
      ),
      price: (
        <>
          <p>{table.price}</p>
        </>
      ),
      brand: (
        <>
          <p>{table.brand ?? "-"}</p>
        </>
      ),
      discountPercentage: (
        <>
          <p>{table.discountPercentage}%</p>
        </>
      ),
      compare: (
        <>
          <Button type="primary" disabled={isDisabled} onClick={() => handleButtonClick(table)} >
            Compare
          </Button>
        </>
      ),
    };
  });
};

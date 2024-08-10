import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCompare, removeProductFromCompare } from '../store/slice/compareSlice';
import ProductTable from './ProductTable';

const { Meta } = Card;

function ProductComparisonCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const { compareList } = useSelector((state) => state.comparisonList);

  const handleProductRemove = (productId) => {
    dispatch(removeProductFromCompare(productId));
  }

  const prepareProductCard = (listData) => {
    const cardArray = listData.map((list) => (
      <Col className="gutter-row" span={6} key={list.id}>
        <Card style={{ width: "100%", height: '110px' }}>
          <CloseCircleOutlined className="compare-product-cancel" size={90} onClick={() => handleProductRemove(list.id)} />
          <Meta
            avatar={<Avatar src={list.thumbnail} />}
            title={list.title}
            description={`${list.description.substring(0, 20) + "...."}`}
            style={{ marginTop: '5px' }}
          />
        </Card>
      </Col>
    ));

    return cardArray;
  };

  const handleCancel = () => setIsModalOpen(false)

  const handleCompareClick = (table) => {
    dispatch(addProductToCompare(table));
    handleCancel()
  }

  return (
    <>
      <Modal open={isModalOpen} style={{ width: 'auto' }} onCancel={handleCancel}>
        <ProductTable handleCompareButtonClick={handleCompareClick} />
      </Modal>
      <Row gutter={[16, 0]}>

        {prepareProductCard(compareList)}
        {compareList.length < 4 ? (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          >
            Add More
          </Button>
        ) : null}
      </Row>
    </>
  )
}

export default ProductComparisonCard
import React, { useEffect, useState } from 'react'
import { Table, Typography } from 'antd';
import { useSelector } from 'react-redux';


import { PRODUCT_DETAILS } from '../utils/constant';

const { Text } = Typography;

const ProductComparisonTable = () => {
  const { compareList } = useSelector((state) => state.comparisonList);
  const [column, setColumns] = useState([])
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    if (compareList.length) {
      const columns = [
        {
          title: 'Feature',
          dataIndex: 'feature',
          key: 'feature',
          render: (text) => <Text strong>{text}</Text>,
        },
        ...compareList.map((product, index) => ({
          title: product.title || `Product ${index + 1}`,
          dataIndex: `product${index}`,
          key: `product${index}`,
        })),
      ];
      setColumns(columns)
    }
  }, [compareList]);

  useEffect(() => {
    if (compareList.length) {
      const data = PRODUCT_DETAILS.map((feature, rowIndex) => {
        const row = { key: rowIndex, feature: feature.name }

        compareList.forEach((product, index) => {
          if (feature.key === 'dimensions') {
            row[`product${index}`] = `${product[feature.key].width} X ${product[feature.key].width} X ${product[feature.key].width}` || 'N/A'
          } else if (feature.key === 'tags') {
            row[`product${index}`] = `${product[feature.key].join(', ')}`
          } else {
            row[`product${index}`] = product[feature.key] || 'N/A';
          }
        })
        return row;
      })
      setDataSource(data)
    }
  }, [compareList])

  return (
    <Table
      columns={column}
      dataSource={dataSource}
      pagination={false}
      bordered
      style={{ marginTop: '16px' }}
    />
  )
}

export default ProductComparisonTable;

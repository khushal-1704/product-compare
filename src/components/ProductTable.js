import { Table } from 'antd';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addProductList } from '../store/slice/productsSlice';

import { formatTableData } from '../utils/FormatTableData';
import { columns } from '../utils/constant';

const ProductTable = ({ handleCompareButtonClick }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [tableData, setTableData] = useState([]);

  const dispatch = useDispatch()
  const { products, totalProducts } = useSelector((state) => state.productList);
  const { compareList } = useSelector((state) => state.comparisonList);

  useEffect(() => {
    setTableData(products);
  }, [products]);

  const fetchMoreProducts = async (page, pageSize) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${(page - 1) * pageSize
        }`
      );
      const data = await res.json();
      dispatch(
        addProductList({
          productsList: data.products,
          totalProducts: data.total,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreProducts(1, 15);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={formatTableData(
        tableData,
        handleCompareButtonClick,
        compareList
      )}
      pagination={{
        hideOnSinglePage: true,
        total: totalProducts,
        onChange: (page, pageSize) => {
          fetchMoreProducts(page, pageSize);
        },
      }}
    />
  )
}

export default ProductTable
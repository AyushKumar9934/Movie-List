import React from "react";


import { Table } from "antd";

const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
  ];
const MovieList = ({currentList}) => {
  return <Table style={{marginTop:"30px"}} dataSource={currentList} columns={columns} />;
};

export default MovieList;

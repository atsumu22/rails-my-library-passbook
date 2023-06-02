import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import LogsEditCard from '../../atoms/cards/LogsEditCard';

const LogsEditCards = (props) => {
  const { booksDatas } = props;

  return (
    <SLogsContaienr>
      {booksDatas.length > 0 ? booksDatas.map((bookData) => <LogsEditCard bookData={bookData} key={bookData.id} />) : <SLogsPlaceHolder><h3>通帳にはまだ何も保存されていません</h3></SLogsPlaceHolder> }
    </SLogsContaienr>
  );
};

const SLogsContaienr = styled.div`
`;

const SLogsPlaceHolder = styled.div`
  margin: 40px 14px 14px 14px;
  text-align: left;
  background-color: #fff;
  height: 150px;
  border-radius: 15px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LogsEditCards;

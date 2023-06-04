import React from 'react';
import BookmarkCard from '../../atoms/cards/BookmarkCard';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const BookmarkCards = (props) => {
  const { booksFromServer, url } = props;

  return (
    <SContaienr>
      {booksFromServer.length > 0 ? booksFromServer.map((bookData) => <BookmarkCard bookData={bookData} url={url} key={bookData.id}/>) : <SPlaceHolder><h3>ブックマークにはまだ何も保存されていません</h3></SPlaceHolder> }
    </SContaienr>
  );
};

const SContaienr = styled.div`
`;

const SPlaceHolder = styled.div`
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

export default BookmarkCards;

'use client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollItems from '../model/ScrollItems';

export default function App() {
  const [hasMore, setMore] = useState(true);
  const [items, setItems] = useState([
    <ScrollItems key={1} />,
    <ScrollItems key={2} />,
    <ScrollItems key={3} />,
    <ScrollItems key={4} />,
  ]);

  const fetchMoreData = () => {
    if (items.length >= 4) {
      setMore(false);
      return;
    }
    setTimeout(() => {
      setItems(prevItems => [...prevItems, <ScrollItems key={prevItems.length + 1} />]);
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      next={fetchMoreData}
    >
      {items}
    </InfiniteScroll>
  );
}
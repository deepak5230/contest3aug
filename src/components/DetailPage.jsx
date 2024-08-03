import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetail } from '../redux/actions';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.currentItem);
  const { loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItemDetail(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return item ? (
    <div className="container">
      <h1>{item.title}</h1>
      <p>User ID: {item.userId}</p>
      <p>{item.body}</p>
    </div>
  ) : (
    <p>No item found</p>
  );
};

export default DetailPage;

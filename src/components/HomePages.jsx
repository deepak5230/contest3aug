import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/actions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Items List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            <Link to={`/item/${item.id}`}>
              <img src={`https://picsum.photos/200?random=${item.id}`} alt={item.title} className="img-thumbnail" />
              <h5>{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</h5>
              <p>{item.body.length > 100 ? `${item.body.slice(0, 100)}... Read More` : item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CategoriesElement from '../components/CategoriesElement';
import { getData } from '../utils';

const Categories = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(location.pathname);

      if (data && data.length > 0) {
        setData(data);
      }
    }

    fetchData();
  }, [location.pathname]);

  return (
    <div className='categories-list'>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
              <CategoriesElement el={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
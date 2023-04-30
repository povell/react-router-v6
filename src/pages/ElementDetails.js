import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getData, removeSlash } from '../utils';

const ElementDetails = () => {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(()=> {
    async function fetchData() {
      const propsArray = removeSlash(location.pathname).split('/');;
      const data = await getData(propsArray[0], propsArray[1]);

      if (data) {
        setData(data);
      }
    }

    fetchData();
  }, [location.pathname]);
  

  const getJSX = (key) => {
    if (key === 'image') {
      return (
        <img key={key} src={data[key]} alt={data.name ? data.name : ''} />
      );
    }
    return (
      <div key={key}>
        {key}: {data[key]}
      </div>
    );
  }

  return (
    <div className="element-details">
      {Object.keys(data).map((key) => getJSX(key, data))}
    </div>
  )
}

export default ElementDetails;
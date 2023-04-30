export const getData = async (categorie, id) => {
  let data;
  switch(removeSlash(categorie)) {
    case 'characters':
      data = await require('./characters.json');
      break;
    case 'locations':
      data = await require('./locations.json');
      break;
    case 'episodes':
      data = await require('./episodes.json');
      break;
    default:
      data = null;
      break;
  }

  if (!id) {
    return data;
  }

  const item = data.find((el) => +el.id === +id);
  if (item) {
    return item;
  }
  return {};
};

export const removeSlash = (string) => {
  return string.replace(/^\/|\/$/g, '');
};
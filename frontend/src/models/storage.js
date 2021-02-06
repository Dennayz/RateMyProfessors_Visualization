export const storage = (name) => {
  var myData = sessionStorage.getItem(name);
  myData = JSON.parse(myData);

  return myData;
};

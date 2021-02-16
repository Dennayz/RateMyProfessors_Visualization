export const storage = (name) => {
  var myData = sessionStorage.getItem(name);
  if (name === "tid") {
    return myData;
  }
  myData = JSON.parse(myData);

  return myData;
};

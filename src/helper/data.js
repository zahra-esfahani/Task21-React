const cities = async () => {
    const res = await fetch("../src/cities.json");
    const Data = await res.json();
    return Data;
  };
  const RandomNumber=(num)=>{
    return Math.floor(Math.random()*(num))
  }
  export {cities , RandomNumber}
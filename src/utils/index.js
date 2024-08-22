export function getPrice(rawData) {
    if(!rawData){
        return 0;
    }
    return Number(rawData?.slice(2));
  }
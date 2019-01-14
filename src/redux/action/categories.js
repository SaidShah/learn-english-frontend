export const getItemsFromCategory=(type)=>{
  return {
    type: "GET_ITEMS",
    payload: type
  }
}

export const getItemsFromCategory=(type)=>{
  return {
    type: "GET_ITEMS",
    payload: type
  }
}

export const selectItem = (item)=>{
  return {
    type: "SELECT_ITEM",
    payload: item
  }
}

export const unSelectItem =(item)=>{
  return {
    type: "UNSELECT_ITEM",
    payload: {}
  }
}

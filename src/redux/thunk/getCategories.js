import { getItemsFromCategory} from '../action/categories'

export const getItems =(category)=>{
  return function thunk(dispatch){
    fetch(`http://localhost:3002/vocabularies`)
    .then(res=>res.json())
    .then(items =>{
      let selectedItems = items.words.filter(a=>{
            return a.category === category
      })
      let finalResults = selectedItems.map(eachItem=>{
          return {...eachItem,isCorrect: false}
      })
      dispatch(getItemsFromCategory(finalResults))
    })
  }
}

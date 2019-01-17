import { getItemsFromCategory, getSpeechParts} from '../action/categories'



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


export const getPartsOfSpeech=(category)=>{
  return function thunk(dispatch) {
    fetch(`http://localhost:3002/part_of_speeches`)
    .then(res => res.json())
    .then(eachItem =>{
      let arr = eachItem.parts_of_speech.filter(e =>{
        return e.category === category
      })
      dispatch(getSpeechParts(arr))
    })

  }
}

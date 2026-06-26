export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    naves:[],
    navesFav:[],
    message: 'a despertar'
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'Load_starships':

      const { nuevasNaves } = action.payload

      return {
        ...store,
        naves: nuevasNaves
      };

    case 'change_message':

      const { nuevasMessage } = action.payload

      return {
        ...store,
        message: nuevasMessage
      };
    case 'toggle_nave':

      const { name } = action.payload

      let newNaves = []

      if(store.navesFav.includes(name)){
        //quitar
        newNaves = store.navesFav.filter( (item)=> item != name)
      }else{
        newNaves = [...store.navesFav,name]
        // agregar
      }

      return {
        ...store,
        navesFav:newNaves
      };
    default:
      throw Error('Unknown action.');
  }    
}

function cloneObject(obj){
  return JSON.parse(JSON.stringify(obj));
}
const initialState = {
  data: [],
  THIS: {}
}
function delcart(name,ARR) {
  var mArr = [];
  for (var i = 0; i < ARR.length; i++) {
    if (ARR[i].name !== name) {
      mArr.push(ARR[i])
    }
  }
  ARR.splice(0, ARR.length-1);
  for (var i = 0; i < mArr.length; i++) {
    ARR[i] = mArr[i];
  };
}
export default function Reducers (state = initialState ,action){
 switch (action.type) {
   case "ADDCART":
     newState = cloneObject(state);
     newState.data.push(action.noidung);
     return newState;
     break;
   case "RESETCART":
     newState = cloneObject(state);
     newState.data = [];
     return newState;
     break;
   case "REFRESH":
     newState = cloneObject(state);
     newState.THIS=action.noidung;
     return newState;
     break;
   case "MINUS":
     newState = cloneObject(state);
     for (var i = 0; i < newState.data.length; i++) {
       if (newState.data[i].name == action.noidung) {
         newState.data.splice(i,1);
         break;
       }
     }
     return newState;
     break;
   case "PLUS":
     newState = cloneObject(state);
     for (var i = 0; i < newState.data.length; i++) {
       if (newState.data[i].name == action.noidung) {
         let x = newState.data[i];
         newState.data.splice(i,0,x);
         break;
       }
     }
     return newState;
     break;
   case "DELCART":
     newState = cloneObject(state);
     let mArr = [];
     for (let i = 0; i < newState.data.length; i++) {
       if (newState.data[i].name !== action.noidung) {
         mArr.push(newState.data[i])
       }
     }
     newState.data.splice(0, newState.data.length);
     for (var i = 0; i < mArr.length; i++) {
       newState.data[i] = mArr[i];
     };
     return newState;
     break;
   default:
   return state;
 }
}

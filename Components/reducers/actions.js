export function ADDCART(data){
  return {
    type: "ADDCART",
    noidung: data.ITEM
  }
}
export function DELCART(data){
  return {
    type: "DELCART",
    noidung: data.NAME
  }
}
export function MINUS(data){
  return {
    type: "MINUS",
    noidung: data.NAME
  }
}
export function PLUS(data){
  return {
    type: "PLUS",
    noidung: data.NAME
  }
}
export function REFRESH(data){
  return {
    type: "PLUS",
    noidung: data.THIS
  }
}
export function RESETCART(data){
  return {
    type: "RESETCART"
  }
}

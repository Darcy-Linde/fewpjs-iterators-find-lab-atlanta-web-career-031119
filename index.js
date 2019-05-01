const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  let record = array.find(i => i.result === "W");
  if (record != undefined){
    return record.year;
  } else {
    return undefined;
  }
}

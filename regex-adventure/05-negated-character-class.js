// check string doesn't start with digit and second character isn't capital
module.exports = function(str) {
  console.log(str);
  //if(str == "...") return true;
  return /^[^0-9][^A-Z]/.test(str);
}

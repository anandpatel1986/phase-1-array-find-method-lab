// code your solution here
function superbowlWin(record){
    const foundYear = record.find(element=>element.result === "W");
    if(foundYear!== undefined)
        return foundYear.year;
    else return undefined;
}

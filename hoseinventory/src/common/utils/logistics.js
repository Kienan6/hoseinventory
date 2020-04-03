import moment from 'moment';
//ex. input "2020-02-16"
export const validateDate = (date) => {
    var current = moment();
    var difference = current.diff(date, 'days');
    return difference < 365;
};

export const percentageComplete = (hoses, size) => {
    var percentages = [
    {label:'2"', percentage: 0}, 
    {label:'2 1/2"', percentage: 0}, 
    {label:'3"', percentage: 0}, 
    {label:'3 1/2"', percentage: 0}, 
    {label:'4"', percentage: 0}];

    //hoses.test
    //hoses.size
    var filteredHoses = hoses.filter(hose => hose.size == size);
    if(filteredHoses.length == 0){
        return 100;
    }
    //loop through each and check whether the test date is valid
    var valid = 0;
    var total = filteredHoses.length;
    filteredHoses.forEach(hose => {
        if(validateDate(hose.dateTest)) {
            valid++;
        }
    });
    return Math.ceil((valid/total) * 100);
};

export default {}
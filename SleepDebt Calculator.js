
const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else {
     console.log(getSleepHours('monday'));
    }
   
};
const getActualSleepHours = () =>
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') 
+ getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday')
+ getSleepHours('Sunday');

const getIdealSleepHours = () => {
const idealHours = 7.5; 
return idealHours * 7;
};
const calculateSleepDebt = () => 
    const getActualSleep = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();


if (actualSleepHours === idealSleepHours) {
    console.log('You have slept just enough!');
} else if
(actualSleepHours > idealSleepHours) {
    console.log('You have got more sleep than needed.');
} else {
    console.log('You need to go to rest more!');
}
if (actualSleepHours <
    idealSleepHours) {
        console.log('You got ' +
        (idealSleepHours - actualSleepHours) + '
        hour(s) less sleep than you needed this week. Get some rest.');
    }
 calculateSleepDebt();
};

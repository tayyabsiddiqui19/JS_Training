

let today = new Date();
let christmisDay = new Date(today.getFullYear(), 11, 25);



if (today.getMonth() === 11 && today.getDate() === 25) {
    console.log("today is crst");
} else {


    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmisDay.setFullYear(christmisDay.getFullYear() + 1);
    }

    let one_day = 1000 * 60 * 60 * 24;
    let offsetMilis = christmisDay.getTime() - today.getTime();
    let offsetDays = offsetMilis / one_day



    console.log(Math.ceil(offsetDays) + " days left until Christmas!");

}

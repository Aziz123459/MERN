import dayjs from "dayjs";
import relativeTime  from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime)

const form1 = (date) => dayjs(date).format('MMMM D, YYYY h:mm A');
const form2=(date) => dayjs(date).format('dddd,MMMM DD,YYYY');
const form3=(date) => dayjs(date).format('MM,DD,YYYY');
const ago=(date) => dayjs(date).fromNow();
export{form1,form2,form3,ago}
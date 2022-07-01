var isDrop = true;
const ans = document.querySelector('#answer');
ans.style.display = 'none';
function dropdown(){
    // ans.style.margin='-40px 0 0 0';
    isDrop = !isDrop;
    if(isDrop)
        ans.style.display = 'none';
    else
        ans.style.display = 'block';
}
var isDrop2 = true;
const ans2 = document.querySelector('#answer2');
ans2.style.display = 'none';
function dropdown2(){
    isDrop2 = !isDrop2;
    if(isDrop2)
        ans2.style.display = 'none';
    else
        ans2.style.display = 'block';
}
var isDrop3 = true;
const ans3 = document.querySelector('#answer3');
ans3.style.display = 'none';
function dropdown3(){
    isDrop3 = !isDrop3;
    if(isDrop3)
        ans3.style.display = 'none';
    else
        ans3.style.display = 'block';
}
var isDrop4 = true;
const ans4 = document.querySelector('#answer4');
ans4.style.display = 'none';
function dropdown4(){
    isDrop4 = !isDrop4;
    if(isDrop4)
        ans4.style.display = 'none';
    else
        ans4.style.display = 'block';
}
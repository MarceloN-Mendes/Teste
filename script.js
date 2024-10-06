/*=========RESPOSTAS================*/

const areaResp = document.getElementById('respostas')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')
const resp3 = document.getElementById('resp3')
const resp4 = document.getElementById('resp4')
const resp5 = document.getElementById('resp5')

let test;

function people1() {
    resp1.classList.add('viewQuest')
    resp1.classList.remove('hide')
    test = 1
    areaResp.classList.remove('hide')
}

function people2(){
    resp2.classList.add('viewQuest')
    resp2.classList.remove('hide')
    test = 2
    areaResp.classList.remove('hide')
}

function people3(){
    resp3.classList.add('viewQuest')
    resp3.classList.remove('hide')
    test = 3
    areaResp.classList.remove('hide')
}

function people4(){
    resp4.classList.add('viewQuest')
    resp4.classList.remove('hide')
    test = 4
    areaResp.classList.remove('hide')
}

function people5(){
    resp5.classList.add('viewQuest')
    resp5.classList.remove('hide')
    test = 5
    areaResp.classList.remove('hide')
}

function closeIcon(){
    switch (test) {
        case 1:
            resp1.classList.add('hide')
            break;
        case 2:
            resp2.classList.add('hide')
            break;
        case 3:
            resp3.classList.add('hide')
            break;
        case 4:
            resp4.classList.add('hide')
            break;
        case 5:
            resp5.classList.add('hide')
            break;
        default:
            break;
    }

    areaResp.classList.add('hide')
}


/*=========GROUP==============*/ 
const groupCell = document.getElementById('groupCell')
function group(){
    groupCell.classList.toggle('hide')
}
function closeIconGroup(){
    groupCell.classList.toggle('hide')
}


/*=======Menu==============*/ 
const navCell = document.getElementById('cellMenu')

function menu(){
    navCell.classList.toggle('hide')
}
function clickNav(){
    navCell.classList.toggle('hide')
}

function closeIconMenu(){
    navCell.classList.toggle('hide')
}
console.log('Here are all the available people:', people);

$(ready);
let counter = 1;
let currentPerson = 0;
function ready() {
    for (let person of people) {
        let row = $(`
            <div class="faces">
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>
            `)
        row.data(`name`, counter);
        counter++;
        $('#container').append(row);
        console.log(row.data('name'));
    }

    currentPerson = faceSelector(randomNumber(1, 7));

    $('.faces').on('click', imageClicked);
}

function imageClicked() {
    console.log('click');
    let faceNumber = $(this).data(`name`);
    if (faceNumber === currentPerson) {
        alert('You Found Them!')
        
    } else {
        alert('Oh no, try again!')
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function faceSelector(numb) {
    switch (numb) {
        case 1:
            $(`h2`).text(`Find Dev`)
            return 1;
            break;
        case 2:
            $(`h2`).text(`Find Dane`)
            return 2;
            break;
        case 3:
            $(`h2`).text(`Find Matt`)
            return 3;
            break;
        case 4:
            $(`h2`).text(`Find Kris`)
            return 4;
            break;
        case 5:
            $(`h2`).text(`Find Edan`)
            return 5;
            break;
        case 6:
            $(`h2`).text(`Find Liz`)
            return 6;
            break;
        case 7:
            $(`h2`).text(`Find Chris`)
            return 7;
            break;
        default:
            break;
    }
}


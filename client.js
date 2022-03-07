console.log('Here are all the available people:', people);

$(ready);
let counter = 1;
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

    randomNumber(1,7);

    faceSelector(randomNumber(1,7))

    $('.faces').on('click', imageClicked);
}

function imageClicked() {
    console.log('click');
    let faceNumber= $(this).data(`name`);

    console.log( faceNumber );

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function faceSelector( numb ){

        switch ( numb ) {
            case 1:
                $(`h2`).text(`Find Dev`)
                break;
            case 2:
                $(`h2`).text(`Find Dane`)
                break;
            case 3:
                $(`h2`).text(`Find Matt`)
                break;
            case 4:
                $(`h2`).text(`Find Kris`)
                break;
            case 5:
                $(`h2`).text(`Find Edan`)
                break;
            case 6:
                $(`h2`).text(`Find Liz`)
                break;
            case 7:
                $(`h2`).text(`Find Chris`)
                break;
            
        
            default:
                break;
        
    }
}


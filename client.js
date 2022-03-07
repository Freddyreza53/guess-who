console.log('Here are all the available people:', people);

$(ready);
let counter = 1;
function ready() {
for (let person of people) {

    let row = $(`
    <div>
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
    </div>
    `)
    row.data(`name`, counter);
    counter++;
    $('#container').append(row);
    console.log(row.data('name'));
    
    } 


}

    
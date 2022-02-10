//array of stuff
const list = [];

//prompt
let option = prompt('What do you want to do?  "add" | "list" | "delete" | "quit"');

while (option !== 'quit') {
    if (option === 'add') {
        let item = prompt('What event would you like to schedule?')
        list.push(item);
        console.log(`Added ${item} to the list!`);
    } else if (option === 'list') {
        console.log('**********');
        for (let event of list) {
            console.log(`${list.indexOf(event)}: ${event}`)
        }
        console.log('**********');
    // "Delete" section utilizing user text.
    // } else if (option === 'delete') {
    //     let deletedItem = prompt('Which event would you like to delete?')
    //     if (!list.includes(deletedItem)) {
    //         alert('That event is not located in this list.');
    //     } else {
    //         let deleteIndex = list.indexOf(deletedItem);
    //         list.splice(deleteIndex, 1);
    //         console.log(`Deleted: ${deletedItem}`);
    //     }
    // "Delete" section utilizing index number.
    } else if (option === 'delete') {
        let deletedNumber = parseInt(prompt('Which number event would you like to delete?'));
        if (Number.isNaN(deletedNumber) || !list.includes(list[deletedNumber])) {
            alert('Invalid option!!!');
        } else {
            const deleted = list.splice(deletedNumber, 1);
            console.log(`Deleted: ${deleted}`);
        }
    } else {
        alert('Invalid option!!!');
    }
    option = prompt('What do you want to do?  "add" | "list" | "delete" | "quit"')
}

console.log('Thanks for using the ToDo program!');

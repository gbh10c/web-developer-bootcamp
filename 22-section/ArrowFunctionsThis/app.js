const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    // fullName: () => {
    //     return `${this.firstName} ${this.lastName}`
    // } ***returns 'undefined undefined' because arrow function refers to window scope***
    
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }, //returns 'Viggo Mortensen'
    
    // shoutName: function() {
    //     setTimeout(function() { 
    //         console.log(this.fullName);
    //     }, 3000);
    // } ***returns error because setTimeout refers to window scope***
    
    shoutName: function() {
        setTimeout(() => { 
            console.log(`${this.fullName().toUpperCase()}!!!!!`);
        }, 3000);
    } //returns 'VIGGO MORTENSEN!!!!!' IF AND ONLY IF referring to a non-arrow function
    // IF referring back to another arrow function ***returns 'undefined undefined' because arrow function refers to window scope***
}
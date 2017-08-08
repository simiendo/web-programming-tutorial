function getRow(contact) {
    var id = contact.id || '';
    var firstName = contact.firstName || '';
    var lastName = contact.lastName || '';
    var phone = contact.phone || '';

    return '<tr><td>'+lastName+'</td><td>'+firstName+'</td><td>'+phone+'</td>'+ '' +
        '<td class="actions">' +
        '<span><a href="date/remove.html?id=' + id + '">&#x2716</a></span>'+
        '<span><a href="#">&#x270E</a></span>'+
        '</td>' +
        '</tr>0';
}

var contacte = [];

var tableContent = '';

// for(var i = 0; i < contacte.length; i++) {
//     createRow(contacte[i])
// }

function createRow(contact){
    tableContent += getRow(contact);
}

$.ajax('date/contacte.json').done(function(contacte){
    console.info('contacte', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);

    $(.edit).click(function (){
        editContact('Matei', 'Nicolae', '0232');
    });
});

function editContact(firstName, lastName, phone) {
    $('input[name=firstName]').val(firstName);
    $('input[name=lastName]').val(lastName);
    $('input[name=phone]').val(phone);
}
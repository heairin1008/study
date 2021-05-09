var person = {
    name : 'jin',
    age : 27
}

$('#result').empty();
$('#result').append('<span>from script! name : ' + person.name + ', age : ' + person.age + '</span>');
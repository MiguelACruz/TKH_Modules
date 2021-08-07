//https://codepen.io/miguelacruz/pen/vYmVMpK

arrNames = ['Westly Snipes', 'Nicholas Cage', 'Nasir Jones', 'Sean Carter',
                'Sean Combs', 'Michael Jordan', 'Patrick Ewing'];

first_name = [];
last_name = [];

for (let i = 0; i < arrNames.length; i++) {

    let pos = arrNames[i].search(" ");

    first_name.push(arrNames[i].substr(0, pos));

    last_name.push(arrNames[i].substr(pos+1, arrNames[i].length));

}

for (var i = 0; i < first_name.length; i++) {
  console.log(first_name[i]);
}

for (var i = 0; i < last_name.length; i++) {
  console.log(last_name[i]);
}

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

const data=( JSON.stringify(meetup, function replacer(key, value) {
    return (key !== "" && value === meetup) ? undefined : value;
}));

console.log(data)
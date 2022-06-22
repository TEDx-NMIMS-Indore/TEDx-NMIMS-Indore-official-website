import data from "./masterData.json";

test(`Checking names of speakers`, () => {
    let speakersNames = [
        "Vani Kabir",
        "Divya Rathod",
        "Karan Shah",
        "Nihad Panju",
        "Nikita Sharma",
        "Neha Jain",
        "Dilip Auti",
        "Manish Tyagi",
        "Athar Ali Nagpurwala",
        "Ankit Aggarwal",
        "Navrajvir Singh",
        "Rahul Bhatnagar",
        "Tarang Chandola"
    ];
    for (let i = 0; i < speakersNames.length; i++){
        expect(data.speakers[2019].speakersList[i]).toBe(speakersNames[i])
    }
})


test(`Checking posts of speakers`, () => {
    let speakersNames = {
        "Vani Kabir": "The Modern Head",
        "Divya Rathod": "The Modern Head",
        "Karan Shah": "The Modern Head",
        "Nihad Panju": "The Modern Head",
        "Nikita Sharma": "The Modern Head",
        "Neha Jain": "The Modern Head",
        "Dilip Auti": "The Modern Head",
        "Manish Tyagi": "The Modern Head",
        "Athar Ali Nagpurwala": "The Modern Head",
        "Ankit Aggarwal": "The Modern Head",
        "Navrajvir Singh": "The Modern Head",
        "Rahul Bhatnagar": "The Modern Head",
        "Tarang Chandola": "The Modern Head",
    };
});
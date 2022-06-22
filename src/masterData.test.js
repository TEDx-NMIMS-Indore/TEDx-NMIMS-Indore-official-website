import data from "./masterData.json";

test(`Checking names of speakers`, () => {
    let speakersNames = [
        "Vani Kabir",
        "Divya Rathod",
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
        "Vani Kabir": "The Modern Sufi",
        "Divya Rathod": "The ResearchPreneur",
        "Nihad Panju": "Marathon Runner",
        "Nikita Sharma": "Motivational Speaker",
        "Neha Jain": "Civil Servant",
        "Dilip Auti": "Life Mentor",
        "Manish Tyagi": "Knotty Commander",
        "Athar Ali Nagpurwala": "Co-Founder Chai-Kapi",
        "Ankit Aggarwal": "Founder Dare2Compete",
        "Navrajvir Singh": "CEO Raletta Technology",
        "Rahul Bhatnagar": "Co-Founder, USP",
        "Tarang Chandola": "Co-Founder CWAT Apps"
    };
    for (let key in speakersNames) {
        expect(data.speakers[2019].speakersDescription[key].post).toBe(speakersNames[key])
        
    }
});
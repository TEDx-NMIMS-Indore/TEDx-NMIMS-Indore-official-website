import data from "./membersProfile.json";

test(`Checking names of TEDx team`, () => {
    let team = {
        Organizer: ["Swayam Jasoria"],
        Curators: ["Nandini Malani", "Vanshika Nyati"],
        "Executive producers": ["Sara Saxena"],
        "Event managers": ["Ashri Neema", "Sarthak Waliwadekar"],
        "Finance heads": ["Ananya Motwani", "Vinayak Agarwal"],
        "Digital designs heads": ["Varnika Singh", "Ishan Khandelwal"],
        "Manual designs head": ["Soumya Nagar", "Presksha Bhagwani"],
        "Technical team": ["Sam Varghese"],
        "Content & marketing head": ["Devansh Jain", "Simran Khanduja"],
        "Media head": ["Aryaman Batra"],
        "Logistics head": ["Akshat Khandelwal", "Arsh Parwez"],
    };
    for (let post in team) {
        for (let j = 0; j < data.teamMembers[post].length; j++){
            expect(data.teamMembers[post][j].name).toBe(team[post][j]);
        }
    }
});

test(`Checking posts of team members`, () => {
    let team = {
        Organizer: "Licensee",
        Curators: "Curator",
        "Executive producers": "Executive Head",
        "Event managers": "Event Head",
        "Finance heads": "Finance Head",
        "Digital designs heads": "Design Head (Digital)",
        "Manual designs head": "Design Head (Manual)",
        "Technical team": "Tech Head",
        "Content & marketing head": "Content & Marketing Head",
        "Media head": "Media Head",
        "Logistics head": "Logistics Head",
    };

    for (let memberPost in team) {
        for (let i = 0; i < data.teamMembers[memberPost].length; i++){
            expect(data.teamMembers[memberPost][i].post).toBe(team[memberPost]);
        }
    }
})
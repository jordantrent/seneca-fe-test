export interface Question {
    title: string;
    optionsPerSlider: string[][];
    correctAnswers: string[];
}

export const questions: Question[] = [
    {
        title: "An animal cell contains:",
        optionsPerSlider: [
            ['Cell wall', 'Ribosomes'],
            ['Cytoplasm', 'Chloroplast'],
            ['Partially permeable membrane', 'Impermeable membrane'],
            ['Cellulose', 'Mitochondria'],
        ],
        correctAnswers: ['Ribosomes', 'Cytoplasm', 'Partially permeable membrane', 'Mitochondria']
    },
    {
        title: "Which of these are characters from The Lord of the Rings?",
        optionsPerSlider: [
            ['Frodo', 'Luke Skywalker'],
            ['Harry Potter','Aragorn'],
            ['Gandalf', 'Dumbledore']
        ],
        correctAnswers: ['Frodo', 'Aragorn', 'Gandalf']
    },
    {
        title: "Which of these are from Star Wars?",
        optionsPerSlider: [
            ['The Force', 'The Ring', 'The Hammer'],
            ['The Orcs', 'The Sith', 'The Elves'],
            ['Wand', 'Sword', 'Lightsaber']
        ],
        correctAnswers: ['The Force', 'The Sith', 'Lightsaber']
    },
    {
        title: "Which of these are planets in our solar system?",
        optionsPerSlider: [
            ['Tatooine', 'Vulcan', 'Krypton', 'Mars'],
            ['Arrakis', 'Neptune', 'Hoth', 'Gallifrey']
        ],
        correctAnswers: ['Mars', 'Neptune']
    }
];

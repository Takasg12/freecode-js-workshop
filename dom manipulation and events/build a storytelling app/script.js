const storyContainer = document.querySelector('.story-container')

const scaryStoryBtn = document.getElementById('scary-btn')
const funnyStoryBtn = document.getElementById('funny-btn')
const adventureStoryBtn = document.getElementById('adventure-btn')

const resultParagraph = document.getElementById('result')

/* Data Stories */
const storyObj = {
    scary: {
        story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
        borderColor: "#ee4b2b"
    },
    funny: {
        story: "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
        borderColor: "#f1be32"
    },
    adventure: {
        story: "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
        borderColor: "#acd157"
    }
};

/* function click buttons */
const displayStory = (genre) => {
    /* Cek apakah story memiliki properti yang sesuai genre */
    if (storyObj[genre]) {
        /* Set teks paragraf #result dengan story dari genre yang dipilih */
        document.querySelector('#result').textContent = storyObj[genre].story;

        /* Set border color storyContainer */
        storyContainer.style.borderColor = storyObj[genre].borderColor
    }
}

scaryStoryBtn.addEventListener("click", () => displayStory("scary"))
funnyStoryBtn.addEventListener("click", () => displayStory("funny"))
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"))
const classes = [
    {
      name: "Warrior",
      description: "A strong melee fighter.",
      stats: {
        health: 100,
        energy: 50,
        attackPower: 20,
        defense: 10,
      },
      attacks: [
        { name: "Basic Attack", description: "A standard attack." },
        { name: "Shield Slam", description: "A powerful shield attack." },
      ],
      utilities: [
        { name: "Heal", description: "Restores some health." },
      ],
    },
    {
      name: "Mage",
      description: "Spellcaster with high damage but low defense.",
      stats: {
        health: 60,
        energy: 80,
        attackPower: 25,
        defense: 5,
      },
      attacks: [
        { name: "Fireball", description: "A fireball attack." },
      ],
      utilities: [
        { name: "Ice Barrier", description: "A barrier of ice." },
      ],
    },
    // other classes...
  ];
  
  export default classes;  // default export
  
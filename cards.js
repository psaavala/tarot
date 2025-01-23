const MajorCards = [
    {
        "name": "The Fool",
        "number": 0,
        "img": require("/.assets/images/0_The_Fool.jpg"),
        "type": "Major",
        "keywords": ["beginning", "innocence", "spontaneity", "free spirit"],
        "meaning": "The Fool is the first card in the Tarot deck because he is the most important. He is the Fool because only a fool would take such a leap of faith. The Fool is the card of infinite possibilities. The bag on the staff indicates that he has all he needs to do or be anything he wants, he has only to stop and unpack. He is on his way to a brand new beginning. But the card carries a little bark of warning as well. Stop daydreaming and fantasizing and watch your step, lest you fall and end up looking the fool."
    },

    {
        "name": "The Magician",
        "number": 1,
        "img": require("/.assets/images/1_The_Magician.jpg"),
        "type": "Major",
        "keywords": ["manifestation", "resourcefulness", "power", "inspiration"],
        "meaning": "The Magician is the bridge between the world of the spirit and the world of humanity. His right hand holds a staff raised toward the sky and his left hand points to the earth. He takes power from spiritual energy and manifests it on the physical plane. The infinity sign over his head indicates the infinite possibilities of creation. The Magician is a reminder that you are a creator too, and have the power to manifest your dreams."
    },

    {
        "name": "The High Priestess",
        "number": 2,
        "img": require("/.assets/images/2_The_High_Priestess.jpg"),
        "type": "Major",
        "keywords": ["intuition", "unconscious", "mystery", "hidden truths"],
        "meaning": "The High Priestess is the guardian of the unconscious. She sits in front of the thin veil of awareness, which is all that separates us from our inner selves. The High Priestess knows the secret of how to access these realms. She represents spiritual enlightenment and inner illumination, divine knowledge and wisdom. She has a deep, intuitive understanding of the Universe and uses this knowledge to teach rather than to try to control others. The High Priestess is associated with the Moon. Like The Moon card, The High Priestess can be mysterious and confusing. She represents the unknown and the things that are hidden from us. The High Priestess is a card of mystery, stillness and passivity. This is not a time to act, but to listen, dream and reflect. You may feel that you are stuck in a situation that is not going to change, or you may be withdrawn, waiting for others to act first."
    },

    {
        "name": "The Empress",
        "number": 3,
        "img": require("/.assets/images/3_The_Empress.jpg"),
        "type": "Major",
        "keywords": ["fertility", "nurturing", "abundance", "mother"],
        "meaning": "The Empress is the mother of all creation. She is a symbol of fertility, stability, and abundance. She represents the Earth Mother. She is associated with the Greek goddess Demeter, the goddess of the harvest. The Empress is the giver of life, from her comes all the pleasures and abundance of the world. The Empress is a creator, be it life, ideas, projects, or art. She has a deep connection with nature and has a love of all living things. She is nurturing and caring and appears when you are pregnant with an idea that you are ready to bring to life. The Empress is a positive card to receive if you are starting a new business or a family."
    },

    {
        "name": "The Emperor",
        "number": 4,
        "img": require("/.assets/images/4_The_Emperor.jpg"),
        "type": "Major",
        "keywords": ["authority", "structure", "control", "father"],
        "meaning": "The Emperor is the father figure of the Tarot deck. He is the head of the family and is a protector and provider. In the Emperor card, he is seen as the ruler of the world. He sits on a throne, holding a scepter. He is a symbol of power and authority and can represent achievement in the material world. The Emperor is a ruler, a patriarch, and a father figure. He is the embodiment of authority and power, as well as the traditional father figure. He is a symbol of accomplishment and control. The Emperor is a reminder that you have the power to shape your world, and that your will is the most powerful tool you have in your possession."
    },

    {
        "name": "The Hierophant",
        "number": 5,
        "img": require("/.assets/images/5_The_Hierophant.jpg"),
        "type": "Major",
        "keywords": ["tradition", "conformity", "morality", "ethics"],
        "meaning": "The Hierophant is the teacher and the seeker of spiritual truth. He acts as a guide to the inner world. He represents the link between God and man, and the bridge between the spiritual and the physical. The Hierophant is a symbol of tradition, conformity, and morality. He is a reminder to follow the rules and to seek guidance from a higher authority. The Hierophant can also represent a spiritual mentor or teacher who can help you on your path to enlightenment."
    },

    {
        "name": "The Lovers",
        "number": 6,
        "img": require("/.assets/images/6_The_Lovers.jpg"),
        "type": "Major",
        "keywords": ["love", "union", "relationships", "choices"],
        "meaning": "The Lovers card is a symbol of love and relationships. It represents the union of opposites, and the choices we must make in order to grow. The Lovers card is a reminder that we are all connected, and that we must learn to love and accept ourselves before we can truly love and accept others. The Lovers card is a reminder that we are all connected, and that we must learn to love and accept ourselves before we can truly love and accept others."
    },

    {
        "name": "The Chariot",
        "number": 7,
        "img": require("/.assets/images/7_The_Chariot.jpg"),
        "type": "Major",
        "keywords": ["control", "willpower", "victory", "determination"],
        "meaning": "The Chariot is a symbol of determination and willpower. It represents the need to focus on a goal and to overcome any obstacles that may stand in your way. The Chariot is a reminder that you have the power to shape your own destiny. The Chariot is a symbol of determination and willpower. It represents the need to focus on a goal and to overcome any obstacles that may stand in your way. The Chariot is a reminder that you have the power to shape your own destiny."
    },

    {
        "name": "Strength",
        "number": 8,
        "img": require("/.assets/images/8_Strength.jpg"),
        "type": "Major",
        "keywords": ["courage", "patience", "inner strength", "compassion"],
        "meaning": "Strength is a symbol of courage and inner strength. It represents the need to be patient and to have compassion for yourself and others. Strength is a reminder that you have the power to overcome any obstacle that may stand in your way. Strength is a symbol of courage and inner strength. It represents the need to be patient and to have compassion for yourself and others."
    },

    {
        "name": "The Hermit",
        "number": 9,
        "img": require("/.assets/images/9_The_Hermit.jpg"),
        "type": "Major",
        "keywords": ["introspection", "solitude", "inner guidance", "patience"],
        "meaning": "The Hermit is a symbol of introspection and solitude. He represents the need to take time to reflect on your life and to seek inner guidance. The Hermit is a reminder that you have the answers you seek within you, and that you must take the time to listen to your inner voice. The Hermit is a symbol of introspection and solitude. He represents the need to take time to reflect on your life and to seek inner guidance."
    },

    {
        "name": "Wheel of Fortune",
        "number": 10,
        "img": require("/.assets/images/10_Wheel_of_Fortune.jpg"),
        "type": "Major",
        "keywords": ["change", "destiny", "luck", "fortune"],
        "meaning": "The Wheel of Fortune is a symbol of change and destiny. It represents the need to go with the flow and to accept the changes that life brings. The Wheel of Fortune is a reminder that life is always changing, and that we must learn to adapt to the changes that come our way. The Wheel of Fortune is a symbol of change and destiny. It represents the need to go with the flow and to accept the changes that life brings."
    },

    {
        "name": "Justice",
        "number": 11,
        "img": require("/.assets/images/11_Justice.jpg"),
        "type": "Major",
        "keywords": ["justice", "fairness", "truth", "law"],
        "meaning": "Justice is a symbol of fairness and truth. It represents the need to be honest and to do what is right. Justice is a reminder that we must take responsibility for our actions and that we must be fair to ourselves and others. Justice is a symbol of fairness and truth. It represents the need to be honest and to do what is right."
    },

    {
        "name": "The Hanged Man",
        "number": 12,
        "img": require("/.assets/images/12_The_Hanged_Man.jpg"),
        "type": "Major",
        "keywords": ["sacrifice", "release", "surrender", "letting go"],
        "meaning": "The Hanged Man is a symbol of sacrifice and release. He represents the need to let go of old patterns and to surrender to the flow of life. The Hanged Man is a reminder that sometimes we need to let go of control and allow things to unfold naturally. He is a symbol of patience and acceptance, and a reminder that sometimes we need to take a step back and look at things from a different perspective."
    },

    {
        "name": "Death",
        "number": 13,
        "img": require("/.assets/images/13_Death.jpg"),
        "type": "Major",
        "keywords": ["endings", "change", "transformation", "transition"],
        "meaning": "Death is a symbol of endings and new beginnings. It represents the need to let go of the past and to embrace the future. Death is a reminder that change is a natural part of life, and that we must learn to accept the things that we cannot change. Death is a symbol of endings and new beginnings. It represents the need to let go of the past and to embrace the future."
    },

    {
        "name": "Temperance",
        "number": 14,
        "img": require("/.assets/images/14_Temperance.jpg"),
        "type": "Major",
        "keywords": ["balance", "moderation", "patience", "harmony"],
        "meaning": "Temperance is a symbol of balance and moderation. It represents the need to find harmony in all areas of your life. Temperance is a reminder that we must learn to be patient and to take things one step at a time. Temperance is a symbol of balance and moderation. It represents the need to find harmony in all areas of your life."
    },
    
    {
        "name": "The Devil",
        "number": 15,
        "img": require("/.assets/images/15_The_Devil.jpg"),
        "type": "Major",
        "keywords": ["addiction", "materialism", "self-destructive behavior", "bondage"],
        "meaning": "The Devil is a symbol of addiction and self-destructive behavior. He represents the need to break free from the things that hold us back. The Devil is a reminder that we must learn to let go of our attachments and to embrace the things"
    },

    {
        "name": "The Tower",
        "number": 16,
        "img": require("/.assets/images/16_The_Tower.jpg"),
        "type": "Major",
        "keywords": ["sudden change", "upheaval", "chaos", "destruction"],
        "meaning": "The Tower is a symbol of sudden change and upheaval. It represents the need to let go of old patterns and to embrace the new. The Tower is a reminder that sometimes we need to let go of control and allow things to unfold naturally. The Tower is a symbol of sudden change and upheaval. It represents the need to let go of old patterns and to embrace the new."
    },

    {
        "name": "The Star",
        "number": 17,
        "img": require("/.assets/images/17_The_Star.jpg"),
        "type": "Major",
        "keywords": ["hope", "inspiration", "serenity", "guidance"],
        "meaning": "The Star is a symbol of hope and inspiration. It represents the need to have faith in the future and to trust that things will work out. The Star is a reminder that we must learn to be patient and to take things one step at a time. The Star is a symbol of hope and inspiration. It represents the need to have faith in the future and to trust that things will work out."
    },

    {
        "name": "The Moon",
        "number": 18,
        "img": require("/.assets/images/18_The_Moon.jpg"),
        "type": "Major",
        "keywords": ["illusion", "fear", "anxiety", "unconscious"],
        "meaning": "The Moon is a symbol of illusion and fear. It represents the need to face our fears and to overcome them. The Moon is a reminder that we must learn to trust our intuition and to listen to our inner voice. The Moon is a symbol of illusion and fear. It represents the need to face our fears and to overcome them."
    },

    {
        "name": "The Sun",
        "number": 19,
        "img": require("/.assets/images/19_The_Sun.jpg"),
        "type": "Major",
        "keywords": ["success", "joy", "vitality", "confidence"],
        "meaning": "The Sun is a symbol of success and joy. It represents the need to be confident and to trust in yourself. The Sun is a reminder that we must learn to be patient and to take things one step at a time. The Sun is a symbol of success and joy. It represents the need to be confident and to trust in yourself."
    },

    {
        "name": "Judgement",
        "number": 20,
        "img": require("/.assets/images/20_Judgement.jpg"),
        "type": "Major",
        "keywords": ["judgement", "rebirth", "inner calling", "forgiveness"],
        "meaning": "Judgement is a symbol of rebirth and inner calling. It represents the need to let go of the past and to embrace the future. Judgement is a reminder that we must learn to accept the things that we cannot change. Judgement is a symbol of rebirth and inner calling. It represents the need to let go of the past and to embrace the future."
    },

    {
        "name": "The World",
        "number": 21,
        "img": require("/.assets/images/21_The_World.jpg"),
        "type": "Major",
        "keywords": ["completion", "fulfillment", "wholeness", "integration"],
        "meaning": "The World is a symbol of completion and fulfillment. It represents the need to be whole and to integrate all aspects of your life. The World is a reminder that we must learn to be patient and to take things one step at a time. The World is a symbol of completion and fulfillment. It represents the need to be whole and to integrate all aspects of your life."
    }
];
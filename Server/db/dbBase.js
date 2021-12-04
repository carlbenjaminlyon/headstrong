const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const dotenv = require('dotenv').config();

const host = process.env.host || 'localhost';
const database = process.env.database || 'headstrong';
const password = process.env.password || '';
const username = process.env.user || 'root';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',

});

sequelize.authenticate()
  .then(() => console.info('Connected to the Database'))
  .catch((err) => console.warn(err));

const Entries = sequelize.define('entries', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  username: {
    type: Sequelize.STRING(50),
    allowNull: false
  },

  title: {
    type: Sequelize.STRING(100),
    allowNull: false
  },

  blog: {
    type: Sequelize.STRING(10000),
    allowNull: false
  },

  journalImage: {
    type: Sequelize.STRING(500)
  },

  imageURL: {
    type: Sequelize.STRING(500)
  },

  temp: {
    type: Sequelize.STRING
  },

  weatherDescription: {
    type: Sequelize.STRING
  },

  visible: {
    type: Sequelize.BOOLEAN
  },

  moonPhase: {
    type: Sequelize.STRING(50)
  },

});
const Friends = sequelize.define('friends', {
  username: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  friends: Sequelize.STRING(50)
});
const Quote = sequelize.define('quote', {
  author: Sequelize.STRING,
  body: {
    type: Sequelize.STRING,
    unique: true
  }

});

const Profile = sequelize.define('profile', {
  username: Sequelize.STRING,
  imageURL: Sequelize.STRING
});

const getAllJournals = (user) => {
  if (user) {
    return Entries.findAll({
      where: {
        username: user
      }
    });
  } else {
    return Entries.findAll();
  }
};

const getAllPublicJournals = () => {
  return Entries.findAll({
    where: {
      visible: true
    }
  });
};

const getProfile = (user) => {
  return Profile.findAll({
    where: {
      username: user
    }
  });
};

const addProfile = async(body, user) => {
  const { imageURL } = body;
  const newProfile = await Profile.create({
    username: user,
    imageURL: imageURL
  });
  return newProfile.save();
};

const deleteJournal = (body) => {
  const { id } = body;
  return Entries.destroy({
    where: {
      id: id
    }
  });
};

const addJournals = async(body, user) => {

  const { mood, title, blog, journalImage, temp, weatherDescription, visible, moonPhase } = body;

  const newEntry = await Entries.create({
    username: user,
    title: title,
    blog: blog,
    journalImage: journalImage,
    temp: temp,
    weatherDescription: weatherDescription,
    mood: mood,
    visible: visible,
    moonPhase: moonPhase
  });

  return newEntry.save();
};

const updateJournal = (body) => {
  const { username, title, blog, id, journalImage } = body;
  //first object is what you want to change
  return Entries.update({
    username: username,
    blog: blog,
    title: title,
    journalImage: journalImage,
  },
  {
    where: {
      id: id
    }
  });

};
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  }).catch((err) => { console.log(err); });

module.exports = {
  Quote,
  getAllJournals,
  addJournals,
  deleteJournal,
  updateJournal,
  getAllPublicJournals,
  addProfile,
  getProfile,
  Entries,
  Friends
};

const {db, DataTypes} = require('../db/config.js');

const Card = db.define('Card', {
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
});


module.exports = Card;
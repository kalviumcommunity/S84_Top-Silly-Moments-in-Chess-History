const {connect} = require('mongoose');

const connectToDb = async (url) => {
    await connect(url, { dbName: "SillyChessDB" })
}

module.exports = connectToDb;
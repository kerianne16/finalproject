module.exports = function (sequelize, DataTypes) {
    var Tech = sequelize.define("Tech", {
        techName: DataTypes.STRING,
        location: DataTypes.STRING,
        contactName: DataTypes.STRING,
        contactNumber: DataTypes.STRING,
        email: DataTypes.STRING
    }
    );
    return Tech;
};
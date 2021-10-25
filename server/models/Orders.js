module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("Orders", {
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      shipDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfItems: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      containerType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      materialType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalGrossWeight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalNetWeight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  
    return Orders;
  };
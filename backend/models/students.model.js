model.exports = (sequelize, Sequelize) => {
  const Students= sequelize.define('students',{
    fname: {
      type: Sequelize.STRING
    },
    lname:{
      type: Sequelize.STRING
    },

   adm_no: {
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: false,
   },

   dob: {
     type: Sequelize.DATE,
   }



  });

  return Students;
}

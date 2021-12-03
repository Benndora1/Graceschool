const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Students');


  // let qr = `select * from students`;

  //  db.query(qr, (err,result) => {
      

  //   if(err) 
  //   {
  //     console.log(err,'errs');

  //   }

  //   if(result.length>0)

  //   {
  //     res.send({
  //       message: "All Students",
  //       data:result
  //     });
  //   }
  //  });
   
});

module.exports = router;
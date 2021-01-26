 //line28:
 /*app.get('/', (req, res)=> {
  // res.send('this is working')
  // res.send(database.users);
} );
*/
 
 
 //line24:
 /*const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    },
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: 'john@gmail.com'
    }
  ]
}
*/ 
 

//register
 /*try {
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash( password, salt )
      console.log(salt)
      console.log(hashedPassword)
      database.users.push({
        id: '125',
        name: name,
        email: email,
        // password: hashedPassword,
        entries: 0,
        joined: new Date()
    
      })
    }catch{
  
    }
  res.json(database.users[database.users.length-1]);
*/


  //   /signin
  // if (req.body.email === database.users[0].email &&
  //    req.body.password === database.users[0].password ){
  //     //  res.json('signin success');
  //      res.json(database.users[0]);
  //    }else{
  //      res.status(400).json('error logging in');
  //     }
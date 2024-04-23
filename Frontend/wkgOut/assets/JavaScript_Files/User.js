class User
   {
    //TODO: THIS CLASS CURRENTTLY HAS SKELENTON CODE NEEDS TO BE WORKED ON

    /*
      WHAT DO USERS HAVE

      username: string
      password: string
      email: string
      level: level

      WHAT METHODS DO THEY HAVE

      getUserName(): string
      setUserName(name: string): void
      getPassword(): string
      setPassword(password: string): void
      getEmail(): string
      setEmail(email: string): void


    */

    // User constructor
    constructor(username, password, email, level)
       {
        this.username = username;
        this.password = password;
        this.email = email;
        this.level = level; 
       }

    //TODO: alter these to be able to use the database

    // getter and setter for username
    getUserName()
       {
        return this.username; 
       }
    
    setUserName(name)
       {
        this.username = name; 
       }
    
    // getter and setter for password
    getPassword()
       {
        return this.password; 
       }
    
    setPassword(password)
       {
        this.password = password; 
       }

    // getter and setter for email
    getEmail()
       {
        return this.email; 
       }
    
    setEmail(email)
       {
        this.email = email; 
       }
    
   }
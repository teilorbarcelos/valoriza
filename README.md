## Valoriza
 
<p>This API was developed in a programming course of NodeJs of the <a target="_blank" href="https://app.rocketseat.com.br/">Rocketseat</a> online school, in the Next Level Week event for programmers of all levels.</p>

<p>This API was created with <a target="_blank" href="https://nodejs.org/en/">[NodeJs]</a> and, basically, creates a back-end system to answer to a front-end app in other or same server.</p>

<p>The data is all stored in a mySQL database, you can use other server, originally, in the course, was used the little sqlite, but, for learning more, I decided to use a free online server with mysql, I choose the <a target="_blank" href="http://remotemysql.com">Remote MySQL</a>, fill free to use what you want.</p>
 
## Technology 
 
Here are the technologies used in this project.
 
* typeorm version ^0.2.36
* reflect-metadata version ^0.1.13
* mysql version ^2.18.1
* jsonwebtoken version ^8.5.1
* express-async-errors version ^3.1.1
* express version ^4.17.1
* cors version ^2.8.5
* class-transformer version ^0.4.0
* bcryptjs version ^2.4.3
* uuid version ^8.3.2
 
## Services Used
 
* Github
* <a target="_blank" href="https://heroku.com/">Heroku</a>
* <a target="_blank" href="http://remotemysql.com">Remote MySQL</a>
 
## Getting started
 
<p>You can see this API runing <a target="_blank" href="https://valorize.herokuapp.com/">here</a></p>
<p>But, if you want to run this API by yourself, simply create a mySQL database in any online server like <a target="_blank" href="http://remotemysql.com">Remote MySQL</a>.</p>

<p>In next, you need to write the app credentials in a file ".env" in the root directory like it:</p>

<pre><code>
# .env

TYPE=mysql
HOST=remotemysql.com
DB_PORT=3306
USER_NAME=eKJ242AF5H
DATABASE=eKJ242AF5H
PASSWORD=iVsoDUtm8b
ENVIRONMENT=development

HASH_MD5=d48946382f0b249f659bbf519747fb65
</code></pre>

<p>In next, you need to run the migrations with the command "yarn typeorm migration:run" to create the tables in your MySQL, and for last, run "yarn dev" to run the local test server and to test the app locally in "http:localhost:3000".</p>

 
## How to use
 
- To use this API you will need of a front-end app that was coded to comunnicate with it, you can see one of it <a target="_blank" href="https://github.com/teilorbarcelos/icompliment">here</a> and runing and ready to use <a target="_blank" href="http://icompliment.vercel.app/">here</a>.
 
 
## Features
 
  - With this API, you can create a place where you and your colleagues of job, can share compliments and thanks, generating a nice feeling of thanks and motivation in the workplace, enjoy, it is free for all.
 
 
## Links
 
  - Link of deployed application: https://valorize.herokuapp.com/
  - Repository: https://github.com/teilorbarcelos/valoriza
    - In case of sensitive bugs like security vulnerabilities, please contact
      OUR EMAIL directly instead of using issue tracker. We value your effort
      to improve the security and privacy of this project!
 
 
## Versioning
 
1.0.0.0
 
 
## Authors
 
* **TEILOR SOUZA BARCELOS**: @teilorbarcelos (https://github.com/teilorbarcelos)
 
 
## Learn More

You can learn more in the <a target="_blank" href="https://nodejs.org/en/docs/">[NodeJs documentation]</a>.

To learn Express, check out the <a target="_blank" href="https://expressjs.com/">[ExpreJs oficial Site]</a>.

<p>I hope it help you like it helped me too! Thanks for see it and give a repo star if you like it!</p>

# Valorize
Manage your income and expenses efforlessly, thanks to Money Master web app presented to you with stunning visuals, which are simplistic, yet very appealing and modern.

[1] See Live Version Immediately: http://moneymaster123.herokuapp.com/

[2] Author: Mohmed Ishak

[3] Name of Web Application: Money Master

[4] Intro: Money Master is an expense tracker with simplistic and appealing UI. It is built using the famous MERN stack (MongoDB, Express.js, React.js, Node.js).
I've implemented a RESTful API so that the frontend and backend may interact seamlessly with each other.
Using this web application, you can record your income and expenses as well as delete them (CRUD operation).
Also, you'll see your balance after considering your income/expenses at the very top.  
As soon as you open the web app, you'll see your balance presented in a beautiful and simplistic card which is calculated by accumulating all expenses as well as
income, and then subtracting the total expenses from the total income.
In the history panel, you may delete any transaction and see the balance and income/expense component render the new value depending on updated history.
You may also add a transaction with a description and amount. Note that for every expense, please prefix the amount with a '-' sign as stated in the instructions
above the amount input box. Add the new transaction and see the entire view get updated with new values.
The frontend of this app is made using React.js, a popular frontend JavaScript library to build UI easily.
The backend of this app is made using Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine, which means it can get executed outside of browser,
unlike React.js or vanilla/plain JavaScript. This means it can handle databases and other things outside the browser. 
Together with Node.js, Express.js, a framework for Node.js is used which abstracts away all the complexity of having to create a web server using plain Node.js.
The database that is used in this app is MongoDB, a super popular document-oriented database with a NoSQL flavour. In simple words, the data aren't divided to multiple
tables like in a traditional SQL databases such as MySQL or SQL Server, rather, all related data are stored in a document and they can be easily queried.
These four technologies make up the MERN stack, where M=MongoDB, E=Express.js, R=React.js, N=Node.js. 
In this web application, I've used the best software engineering practices and new features throughout the codebase. For instance, I've used React Context API and
several React Hooks such as useState, useContext and useReducer. This means that I don't have to prop drill my components to pass data from a component high up 
the component tree to lower components. Also, the codebase is written according to ECMAScript 6 specifications such as object destructuring, template
literals (wherever needed instead of strings), and so on. I hope you like this project made with so much of enthusiasm. 

[5] Technologies/Features Used:
* Node.js
* Express.js
* MongoDB
* Mongoose
* React.js
* React Context API 
* React Hooks (useState, useContext, useReducer)
* Axios (library to make HTTP requests)
* CSS
* CSS Flexbox

[6] How to Run The Project: If you want to see the live, deployed version, head over to this link: http://moneymaster123.herokuapp.com/ If you want to run the source code
locally on your machine, start by downloading the source code. Make sure Node.js is installed globally on your machine. Also, make sure that MongoDB is installed
and the MongoDB server is up and running by opening the terminal and typing "mongod". Then, open the terminal and navigate to the root of the downloaded folder,
and then install all backend dependencies by typing "npm i". From the root, navigate to the client folder by typing in "cd client/" in terminal,
and then again, type "npm i" to install all frontend dependencies. Now, you need to get back to root folder (one step backwards) by typing "cd .." in the terminal. Now
that you're in the root again and that you've installed all dependencies, run the application by typing the final command, which is "npm run dev" and you'll see Money
Master app launched on your favorite web browser (probably Google Chrome).

import React from 'react';
import logo0 from './0.png'
import logo1 from './1.png'
import logo2 from './2.png'
import logo3 from './3.png'
import logo4 from './4.png'
import logo5 from './5.png'
import logo6 from './6.png'
import logo7 from './7.png'
import logo8 from './8.png'
import logo9 from './9.png'
let imgArr = [
    logo0,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9
]
let javascript = 'JavaScript is primarily a client-side scripting language used for front-end development. JavaScript is compatible across all browsers and is used to create interactive web apps, often through libraries such as jQuery, AngularJS, Ember.js, React, and more.';
let php = 'PHP is a server-side scripting language and is usually considered beginner-friendly. It’s easy to conceptualize what the PHP code will do, which makes it easy to pick up.';
let cpp = 'C++ is a powerful language based on C. It is designed for programming systems software, but has also been used to build games/game engines, desktop apps, mobile apps, and web apps. C++ is powerful and fast.';
let c_sharp = 'C# ("C Sharp") is developed to be used for Microsoft’s .NET framework, which runs primarily on Microsoft Windows. C# is used for web development, game development, and general Microsoft development.';
let python = 'Python is another highly recommended language for beginners. Developers have used Python to build desktop apps and web apps alike, and it has great tools for data mining. ';
let ruby = 'Ruby was developed so developers can have fun and be productive at the same time. Ruby was made popular by the Ruby on Rails framework, a full-stack web framework optimized for programming happiness.';
let swift = 'Swift 4 is a new programming language developed by Apple Inc for iOS and OS X development. Swift 4 adopts the best of C and Objective-C, without the constraints of C compatibility. Swift 4 uses the same runtime as the existing Obj-C system on Mac OS and iOS.';
let asp = 'ASP.NET is a web application framework developed and marketed by Microsoft to allow programmers to build dynamic web sites. It allows you to use a full featured programming language such as C# or VB.NET to build web applications easily.';
let sql = 'SQL ("Sequel"), or Structured Query Language, is a query language used to communicate with databases. Although SQL cannot be used to build apps, it is used to manage the data in apps that use relational database manage systems (RDMS).';
let scala = 'Scala is a modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way. Scala has been created by Martin Odersky and he released the first version in 2003.';
let infoArray = [
    javascript,
    php,
    cpp,
    c_sharp,
    python,
    ruby,
    swift,
    asp,
    sql,
    scala
];
class Information extends React.Component {
    render() {
        let src = imgArr[this.props.number]
        return (<div className="information col-lg-5">
            <img className="info-img" src={src} alt=''></img>
            <p>{infoArray[this.props.number]}</p>
        </div>)
    }
}

export default Information;

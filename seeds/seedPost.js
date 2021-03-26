const sequelize = require('../config/connection');
const { Post } = require('../models');


const postData = 
  [
    {
      "postId": "1",
      "title": "bacon ipsum",
      "body": "Bacon ipsum dolor amet kielbasa swine boudin, pastrami short ribs pork chop porchetta ball tip sausage frankfurter meatloaf tri-tip ham capicola cupim. Pork chop porchetta biltong spare ribs pork. Ribeye bresaola pig, chislic landjaeger turducken meatball. Chicken pancetta strip steak pastrami, jowl flank frankfurter kevin prosciutto alcatra pork belly leberkas."
    },
    {
      "postId": "2",
      "title": "starwars ipsum",
      "body": "Rump beef filet mignon shoulder porchetta jowl chicken andouille hamburger prosciutto kevin picanha bacon ball tip spare ribs. Pork meatloaf pancetta shank. Chuck corned beef spare ribs ham hock cow, sirloin flank short ribs biltong pork chop porchetta. Pancetta venison hamburger meatloaf turkey. Beef ribs kevin buffalo shoulder doner shankle prosciutto. Turducken boudin kevin, chicken shank meatball meatloaf sausage andouille ham sirloin pig ground round porchetta swine."
    },
    {
      "postId": "3",
      "title": "lorem ipsum",
      "body": "Porchetta buffalo hamburger jowl ham hock. Flank short ribs brisket bacon chislic salami shank frankfurter boudin beef jerky hamburger cow andouille tenderloin. Flank doner salami tongue short loin picanha pig ham fatback. Venison ham fatback bacon meatball filet mignon ham hock corned beef buffalo jerky kevin pork chop."
    }
  ];

  const seedPosts = () => Post.bulkCreate(postData);

  module.exports = seedPosts;
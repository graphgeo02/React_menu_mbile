import About from "../about/About"
import Contact from "../contacts/Contact";
import Home from "../home/Home"
import Shop from "../shop/Shop"



let id= 0;
export const navGroup1 = [
     
{
id: id++,
path: '/',
text: 'Home',
component: <Home />
},
{
id: id++,
path: '/shop',
text: 'Shop',
component: <Shop />
},
{
    id: id++,
    path: '/about',
    text: 'About',
    component: <About />
},

{
    id: id++,
path: "/contacts",
text: 'Contact',
component: <Contact />
},


]

export const navGroup2 = [


    {
      id: id++,
      path: '/#',
      text:" icon1"

    },
    {
      id: id++,
      path: '/#',
      text:" icon2"

    }
]
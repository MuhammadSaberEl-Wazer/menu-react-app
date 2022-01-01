// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./data";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

// function App() {
//   const [menuItem, setmenuItem] = useState(items);
//   const [categories, setcategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === "all") {
//       setmenuItem(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setmenuItem(newItems);
//   };
//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>Our Menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItem} />
//       </section>
//     </main>
//   );
// }

// export default App;

import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import Data from "./data";

const allCategories = ["All", ...new Set(Data.map((item) => item.category))];

const App = () => {
  const [menuItems, setmenuItems] = useState(Data);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      return setmenuItems(Data);
    }

    const newItems = Data.filter((eachItem) => eachItem.category === category);
    setmenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;

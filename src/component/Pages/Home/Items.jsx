import React from "react";

export const Items = ({ items, deleteItem }) => {
  const itemList = items.length ? (
    items.map((item) => {
      return (
        <div
          key={item.id}
          className="border-indigo-600 px-10 py-3 mt-4 bg-white rounded-lg"
        >
          <h1
            onClick={() => {
              deleteItem(item.id);
            }}
            className="text-xl"
          >
            {item.content}
          </h1>
        </div>
      );
    })
  ) : (
    <p className="border-indigo-600 px-10 py-3 mt-4 bg-white rounded-lg text-center">
      Dream List is nothing
    </p>
  );

  return (
    <div>
      <h1>{itemList}</h1>
    </div>
  );
};

export default Items;

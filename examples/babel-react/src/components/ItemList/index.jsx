import React, { useCallback, useState } from 'react';

import { ItemForm } from '../ItemForm';

/**
 * Display a list of items.
 */
export function ItemList() {
  const [items, setItems] = useState([]);

  const addItem = useCallback((item) => setItems([{ ...item, id: items.length }, ...items]), [
    items,
  ]);

  return (
    <div>
      <ItemForm onSubmit={addItem} />
      {items.length ? (
        <ul>
          {items.map(({ id, link, text }) => (
            <li key={id}>
              {link ? (
                <a href={link} key={id} rel="noopener noreferrer" target="_blank">
                  {text}
                </a>
              ) : (
                text
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
}

export const explorerData = {
  id: 1,
  name: 'root',
  isFolder: true,
  items: [
    {
      id: 2,
      name: 'public',
      isFolder: true,
      items: [{ id: 11, name: 'vite.svg', isFolder: false }],
    },
    {
      id: 3,
      name: 'src',
      isFolder: true,
      items: [
        {
          id: 4,
          name: 'components',
          isFolder: true,
          items: [
            { id: 5, name: 'Explorer.jsx', isFolder: false },
            { id: 6, name: 'Explorer.css', isFolder: false },
          ],
        },
        {
          id: 7,
          name: 'constants',
          isFolder: true,
          items: [{ id: 10, name: 'explorerData.js', isFolder: false }],
        },
        { id: 8, name: 'App.jsx', isFolder: false },
        { id: 9, name: 'App.css', isFolder: false },
      ],
    },
  ],
};

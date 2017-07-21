# Storybook Boilerplate

A boilerplate example of how to use React's Storybook UI development kit

---

## Install

```sh
npm i
```

---

## Starting the Storybook server

```sh
npm start
```

---

## Notes

- I didn't want to use `create-react-app`, so in order to get `storybook` 
  initialized I ran `npm i -D react` and then `npm run getstorybook` which then 
  installs all required modules and updates the `package.json`.
  - `package.json` gets `storybook` added to `scripts` with a default ports of
    `6006`; if you need it on another port, that's where to change it.

# Nutrition Analyzer using CalorieNinjas API

This is a React.js based application which is connected to [CalorieNinjas API](https://rapidapi.com/calorieninjas/api/calorieninjas).

All you need to do is type in the name of your favourite snack and you will get all the `nutrients specifications` of that food item. Easy!

## Preview
> This app is deployed on Netlify, feel free to [check it out!](https://stunning-semifreddo-32a809.netlify.app/)

## Installation

1. Make sure you have `node` and `npm` installed. For this project, I used `node==16.17.1` and `npm==8.15.0`.
2. Clone and go to root directory.
3. Goto Rapid API > CalorieNinjas API ... and get your API keys.
4. Put those Keys in `.env` file in root directory.
5. contents of the .env file should be like this:
   ```
   VITE_API_KEY="SomeRandomHexadecimalKeyEnclosedInQuotes"
   VITE_API_HOST="nameOfTheHost"
   ```
6. run the following commands:
   ```
    npm install
    npm run dev
   ```
7. To `build` just use:
   ```
    npm run build
   ```

## Warnings
Not much of a warning but the code is still buggy in some ways. It's still usable though!
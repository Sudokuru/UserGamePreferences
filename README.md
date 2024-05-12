> [!IMPORTANT]  
> This repository is read-only / archived and will not recieve updates.

# [Typedoc Documentation Website](https://sudokuru.github.io/UserActiveGames/)<br>


# Developer Setup

1. Get the .env file from the MSB building next to the water fountain. 
2. Install Docker on your machine. Tutorial is linked below:<br>
   [![Docker Tutorial](https://img.youtube.com/vi/2ezNqqaSjq8/0.jpg)](https://www.youtube.com/watch?v=2ezNqqaSjq8)<br>
2. Once docker is installed, the Mongo image can be run with this command:<br>
Note use ```sudo``` on Linux/Mac<br>
```console
npm run docker
```
3. The app can then be run with the command:<br>
```console
npm run start
```
4. Integration tests can be run when the app is running with this command:<br>
```console
npm run test:integration
```

# Google Drive API Javascript Access Example

Run via `pnpm dlx live-server`.

## Creation History

The code in this repository is based on the following videos.

- [Google drive API javascript #1](https://youtu.be/JBtA44OMelk?si=eT6sFaqjdr8zfOKw)

## Code History

### Google Cloude Project Creation

- go to cloud.google.com
- click `console` in the upper right
- click `create  or select a project`
- click `new project` with name `diveAccessApp` and click `create`
- select the project from the popup or otherwise
- select `APIs & Services` menu and then `OAuth consent screen`
- select `External` and then click the `create` button
- provide an `App name`, `User support email` and `developer contact email`
  provide the `authorized domain` as `localhost.com` then hit `save and continue`
- click `save and continue` on the `scopes` and `test user` page
- click `back to dashboard` on the `summary` page
- select `APIs & Services` menu and then `Credentials`
- select the top menu `create credentials` and `oauth client id`
- select the `application type` of `web application` use the default name
- add an `authorized javascript origins` of `http://localhost` and click `create`
- select `download json` and save the client id and secrete
- select the top menu `create credentials` and `api key`
- save the `api key` in the `downloaded json` file
- select `APIs & Services` menu and then `Enable API's & services` and click `+ ENABLE APIS AND SERVICES`
- select `Google Drive API` card then click on `ENABLE`

### Create And Serve HTML File

- create `index.html` and server via `pnpm dlx live-server`

### JSDOC And Typescript

```bash
npm init -y
npm i -D typecript
```

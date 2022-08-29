# Rick and Morty App

This app is list of rick and morty cartoon series.

# Demo

![Demo1](https://s1.gifyu.com/images/Screen-Recording-2022-08-29-at-01.07.21.gif)
![Demo2](https://s1.gifyu.com/images/Screen-Recording-2022-08-29-at-01.06.15.gif)
![Demo3](https://s1.gifyu.com/images/Screen-Recording-2022-08-29-at-01.05.36.gif)
![Demo4](https://s1.gifyu.com/images/Screen-Recording-2022-08-29-at-01.06.49.gif)

### General Folder Structure have to be below as for src folder

**Naming case type of util files:** `camelCase`

**Naming case type of folder:** `kebab-case`

**Naming case type of components:** `PascalCase`

# Installation Steps
## For macOSx
### Install Brew

If you not have brew package manager you have to this tool.
Below are the commands required to install

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Detail information: https://brew.sh/index_tr

### Install NodeJS with NVM (version: 14.xx)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

If it didn't add path. You have to add by manually 
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Let's install nodejs with nvm 
```
    nvm install 14.xx.x
```
Detail information: https://github.com/nvm-sh/nvm

### Project Installation
```
git clone https://github.com/Ecancan/RickAndMorty.git
mv .env.example .env
```
Change env app url with https://rickandmortyapi.com/api
```
yarn install
yarn start
yarn talwind:watch (on new terminal)
```

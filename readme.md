# Required stack

## Node js

### Using NVM

1. Start by updating the package repository with the command:
```bash
sudo apt update
```
2. Download the following dependencies by typing:
```bash
sudo apt install build-essential checkinstall libssl-dev
```
3. Install NVM using the curl command:
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
```
4. Close and reopen the terminal.
5. Then, verify if you have successfully installed NVM:
```bash
nvm --version
```
6. Before upgrading Node.js, check which version you have running on the system:
```bash
nvm ls
```
7. Now you can check for newly available releases with:
```bash
nvm ls-remote
```
8. To install the latest version, use the nvm command with the specific Node.js version:
```bash
nvm install 14.17.0 // Use 14 latest version.
```

## Sass
npm install -g sass

## Description
Recreating the [website](https://preview.colorlib.com/theme/academia/).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)


# nodejs-demo-app
This is a simple nodejs demo application, which is written in nodejs and implemented CI/CD with Github Actions.


## Project Structure
```
nodejs-demo-app/
├── .github/
|   └── workflows
|       └── main.yml
├── public/
│   ├── index.html
│   └── styles.css
|── test/
|    └── users.test.mjs
├── .gitignore
├── .mocharc.json
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── Dockerfile

```

## Installation & Setup

To deploy this project launch the EC2 instance on AWS.
In our case we launching ubuntu machine.
After that run following command on your Machine.

### Update the Machine.
```
  sudo apt-get update
```
### Install Git
```
  sudo apt-get install -y git
```
### Install Docker 
```
  sudo apt-get install -y docker.io
```
### Add current user (ubuntu) in docker group.
```
  sudo usermod -aG docker $USER
```
### update the group
```
  newgrp docker
```


### Now, Create ssh key on ubuntu Machine by running following command.

```
ssh-keygen -t rsa -b 4096
```
```
cd ~/.ssh
```
### Copy public key into "authorized_keys" file
```
cp *.pub >> authorized_keys
```
### Copy private key
```
cat id_rsaddd 
```

## Setup Secrets in GitHub
To run this project, you will need to add the following Secrets to your github Repo settings.

```Create Repository in your github account and add Following secrets```

| Secret name       | Value                      | 
| :---------------- | :------------------------- | 
| `DOCKER_USERNAME` | `Your Docker Hub username` | 
| `DOCKER_PASSWORD` | `Your Docker Hub Password` | 
| `SSH_HOST`        | `EC2 instance Public IP`   | 
| `SSH_USER`        | `ubuntu`                   | 
| `SSH_PRIVATE_KEY` | `private key of your EC2 instance that you generated earlier`| 


## Clone this Repository on your local machine
```
git clone https://github.com/Pankajarya1058/nodejs-demo-app.git
```
### Now, push to your own Repository that you have recently created
```
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<Your-user-name>/<Your-repo-name>.git
git push origin main 
```

## Access the application through browser

Note:- Make sure you allowed 3000 port in you instance Security group
```
http://<instance-public-ip>:3000
```

## Author
- [@pankajarya](https://github.com/Pankajarya1058)

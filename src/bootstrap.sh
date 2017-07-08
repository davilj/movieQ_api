#Install Node.js
apt-get install --yes curl
curl --silent --location https://deb.nodesource.com/setup_7.x | bash
apt-get install --yes nodejs
apt-get install --yes build-essential

#Install react app created
npm install serverless -g

#amazon sdk
npm install aws-sdk --save-dev
npm install uuid --save

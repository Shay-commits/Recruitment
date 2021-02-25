npm install aws-sdk
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install node
npm install --global expo-cli
expo install expo-network
export env REACT_NATIVE_PACKAGER_HOSTNAME=127.0.0.1
ssh-keygen -N '' <<< /home/ec2-user/.ssh/id_rsa
cat /home/ec2-user/.ssh/id_rsa.pub >> /home/ec2-user/.ssh/authorized_keys
npm install --global yarn
nvm use node
yarn install
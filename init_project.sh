npx react-native init $1 --template react-native-template-typescript

cd $1
npm install --save styled-components
npm install --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import

mkdir src
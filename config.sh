cd libs
cd vanilla-ds && npm install && npm run build && npm link
cd ../litelement-ds && npm install && npm run build && npm link
cd ../stencil-ds && npm install && npm run build && npm link
cd ../svelte-ds && npm install && npm run build && npm link
cd ../targets
cd ../react-target-app && npm install && npm run build
npm link vanilla-ds
npm link litelement-ds
npm link stencil-ds
npm link svelte-ds
cd ../vue-target-app && npm install && npm run build
npm link vanilla-ds
npm link litelement-ds
npm link stencil-ds
npm link svelte-ds
cd ../angular-target-app && npm install && npm run build
npm link vanilla-ds
npm link litelement-ds
npm link stencil-ds
npm link svelte-ds

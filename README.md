### Getting started

```tsx
npm install -g firebase-tools
cd functions
npm install @xmtp/xmtp-js ethers
firebase deploy
```

```tsx
exports.xmtp = onRequest(async (req, res) => {
  const xmtp = await Client.create(ethers.Wallet.createRandom(), {
    env: "production",
  });
  const conv = await xmtp.conversations.newConversation(
    "{YOUR WALLET ADDRESS}"
  );
  const msg = conv.send("gm firebase-functions");
  console.log(msg.id);
  res.status(200).send();
});
```

### Call your function in the browser

```jsx
//In my case it is
//https://xmtp-br42u53weq-uc.a.run.app/
```

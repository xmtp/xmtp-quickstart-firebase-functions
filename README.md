### Getting started

```tsx
npm install -g firebase-tools
npm install @xmtp/xmtp-js ethers
```

```tsx
exports.xmtp = onRequest(async (req, res) => {
  const xmtp = await Client.create(ethers.Wallet.createRandom(), {
    env: "production",
  });
  const conv = await xmtp.conversations.newConversation(
    "0x7E0b0363404751346930AF92C80D1fef932Cc48a"
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
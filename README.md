![Status](https://img.shields.io/badge/Deprecated-brown)

> [!CAUTION]
> This repo is no longer maintained.

The documentation below is provided for historical reference only.

---

# XMTP Firebase Functions Quickstart

![xmtp](https://github.com/xmtp/xmtp-quickstart-reactjs/assets/1447073/3f2979ec-4d13-4c3d-bf20-deab3b2ffaa1)

## Concepts

Head to our docs to understand XMTP's concepts

- [Get started](https://xmtp.org/docs/build/get-started/overview?sdk=react)
- [Authentication](https://xmtp.org/docs/build/authentication?sdk=react)
- [Conversations](https://xmtp.org/docs/build/conversations?sdk=react)
- [Messages](https://xmtp.org/docs/build/messages/?sdk=react)
- [Streams](https://xmtp.org/docs/build/streams/?sdk=react)

## Get started

```tsx
npm install -g firebase-tools
cd functions
npm install @xmtp/xmtp-js ethers
firebase deploy
```

## Server call

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

**Call your function in the browser**

Eg. https://xmtp-br42u53weq-uc.a.run.app/

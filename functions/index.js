const { onRequest } = require("firebase-functions/v2/https");
const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

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

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Cloud Firestore
// https://firebase.google.com/docs/firestore

// 初期化
admin.initializeApp();
// admin権限でFirestore操作
const firestore = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

// Cloud Functionsでhttps関数作成
export const addDataset = functions.https.onRequest(async (req: functions.Request, res: functions.Response) => {
  if (req.method !== "POST") {
    sendResponse(res, 405, { error: "Invalid Request: Method Not Allowed" });
  } else {
    const dataset = req.body;
    let num = 0;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      // qustionsコレクションにデータ追加
      await firestore.collection("questions").doc(key).set(data);
      num += 1;
    }
    sendResponse(res, 200, { message: `Successfully added dataset (${num})` });
  }
});

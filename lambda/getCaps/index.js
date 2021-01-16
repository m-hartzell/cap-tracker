const AWS = require("aws-sdk");
const { error } = require("console");

const client = new AWS.DynamoDB.DocumentClient();
const params = { TableName: "caps" };
AWS.config.update({ region: "us-east-2" });

exports.handler = async (event) => {
  let res = {};

  switch (event.requestContext.http.method) {
    case "GET":
      res = await getAllCaps();
      break;
    case "POST":
      res = await addCap(event.body);
      break;
  }

  return res;
};

async function getAllCaps() {
  try {
    const data = await client.scan(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
}

async function addCap(json) {
  try {
    params.Item = JSON.parse(json);
    const data = await client.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
}

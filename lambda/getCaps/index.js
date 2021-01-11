const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();
const params = { TableName: "Caps" };
AWS.config.update({ region: "us-east-2" });

exports.handler = async () => {
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
};

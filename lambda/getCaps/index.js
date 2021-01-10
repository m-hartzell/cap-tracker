const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();
const tableName = "Caps";
AWS.config.update({ region: "us-east-2" });

const params = { TableName: tableName };

exports.handler = async () => {
  const caps = [];

  const res = client.scan(params, (err, data) => {
    if (err) {
      return {
        statusCode: 500,
        body: err.message,
      };
    } else {
      caps.push(...Object.values(data.items));
      console.log(caps);
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(caps),
      };
    }
  });

  return res;
};

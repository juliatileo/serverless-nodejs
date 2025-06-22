"use strict";
const AWS = require("aws-sdk");

module.exports.deleteCustomer = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, "base64").toString());

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const deleteParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Key: {
      primary_key: body.name,
    },
  };

  await dynamoDb.delete(deleteParams).promise();

  return { statusCode: 204 };
};

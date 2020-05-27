'use strict';
const data = require("../data/tutors");

module.exports.tutors = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v1.0! Your function executed successfully!",
                data: data.tutors.map((p) => ({
                   Name: p.name,
                   Id: p.id,
                    })),
            }),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

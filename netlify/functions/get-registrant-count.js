const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  useCDN: true,
});

//https://ee8solvh.api.sanity.io/v2021-06-07/data/query/production/?query=count(*[_type==%22registrant%22])
const query = "count(*[_type=='registrant'])";

exports.handler = async (event, context, callback) => {
  try {
    await client.fetch(query).then((registrantCount) => {

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ data: registrantCount })
      });
    });
  } catch (error) {
    console.log(error);

    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    });
  }
};

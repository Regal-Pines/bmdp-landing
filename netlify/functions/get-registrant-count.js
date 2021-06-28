const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  apiVersion: 'v2021-06-07',
  useCDN: false,
});

//https://ee8solvh.api.sanity.io/v2021-06-07/data/query/production/?query=count(*[_type==%22registrant%22])
//https://ee8solvh.api.sanity.io/v2021-06-07/data/query/production/?query=*[_id==%27siteSettings%27]{registrantCount}
const query = "count(*[_type=='registrant'])";
const querySettings = "*[_id=='siteSettings']{registrantCount}";

exports.handler = async (event, context, callback) => {
  // Fetch - find number of registrant documents
  const fetchNumberOfRegDocs = new Promise((resolve, reject) => {
    try {
      client.fetch(query).then((count) => {
        resolve(count);
      });
    } catch (error) {
      console.log(error);

      reject(error);
    }
  });

  // Fetch - find site settings: registrant count value
  const fetchSiteSettingsRegCount = new Promise((resolve, reject) => {
    try {
      client.fetch(querySettings).then(([ regCount ]) => {
        resolve( regCount.registrantCount );
      });
    } catch (error) {
      console.log(error);

      reject( error );
    }
  });

  await Promise.allSettled([fetchNumberOfRegDocs, fetchSiteSettingsRegCount]).then(
    (results) => {
      const { value } = results.reduce((total, value) => {
        return { value: value.value + total.value }
      });

      // Success
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ data: value }),
      });
    },
    ( error ) => {
      
      console.log( error);

      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed fetching data" }),
      });
    }
  );
};

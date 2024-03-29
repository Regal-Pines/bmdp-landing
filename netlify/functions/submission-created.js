const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  apiVersion: 'v2021-06-07',
  useCDN: true,
});

exports.handler = async function (event, context, callback) {
  // Pulling out the payload from the body
  const { payload } = JSON.parse(event.body);

  // Checking which form has been submitted
  const isContactForm = payload.data.formId === "contact-form";

  // Build the document JSON and submit it to SANITY
  if (isContactForm) {
    const contact = {
      _type: "registrant",
      name: payload.data.name,
      email: payload.data.email,
      phone: payload.data.phone,
    };

    const result = await client
      .create(contact)
      .catch((err) => console.log(err));
  }

  callback(null, {
    statusCode: 200,
  });
};

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-PNvEJILEJcGycl7Jl7mfkymp",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const main = async () => {
  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    prompt: "Testing"
  })

  console.log(response.data)
}

main()
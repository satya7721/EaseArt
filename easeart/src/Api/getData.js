const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{role: "user", content: "Write Article on Python and its future"}],
//   });

// name.data.choices[0].message.content
const completion = "Python is a general-purpose, high-level programming language that is widely used in the tech industry today. It was first introduced in 1991 by Guido van Rossum, and has since become one of the most popular programming languages in the world. \n Python is known for its simple syntax, ease of use, and wide range of applications. It is used in a variety of areas, such as web development, data science, artificial intelligence, machine learning, and more. Its popularity has only continued to grow in recent years, and there are several reasons why Python is expected to remain relevant for years to come. \n Firstly, Python has a thriving community of developers who continuously contribute to its development and evolution. This community is dedicated to developing new libraries, frameworks, and tools that make Python more versatile and powerful. This means that developers who choose to work with Python will have access to an ever-growing pool of resources and support. \n Another reason why Python is expected to remain relevant in the future is its versatility. Python can be used for a wide range of applications, from web development to scientific computing. This versatility makes it an excellent choice for developers who want to work on a variety of projects. \n In addition, Python has become a popular choice for machine learning and artificial intelligence projects. This is due to its simplicity and the availability of powerful libraries such as TensorFlow, NumPy, and SciPy. As these areas continue to grow in importance, Python is expected to play a significant role in their development. \n Finally, Python's ease of use and simple syntax also make it an excellent programming language for beginners. It is often used in introductory programming courses and coding boot camps, which means that a new generation of developers will continue to learn and use it in the years to come. \n In conclusion, Python is a versatile, powerful, and easy-to-use programming language that is expected to remain relevant for years to come. Its growing community of developers, versatility, and popularity in areas such as machine learning make it an ideal choice for developers who want to stay ahead of the curve. If you're considering learning a programming language, Python is definitely worth considering."
export default function getData(){
    return {
        "data" : completion
    }
}

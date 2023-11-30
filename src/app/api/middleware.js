import bodyParser from "body-parser";
import nextConnect from "next-connect";

const middleware = nextConnect();

middleware.use(bodyParser.json());
middleware.use(bodyParser.urlencoded({ extended: true }));

export default middleware;

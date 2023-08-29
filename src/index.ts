import { Context, S3Event, SQSEvent } from "aws-lambda";
import { logger } from "./libs/powertools";

export const handler = async (event: SQSEvent, context: Context) => {
  logger.info(`Hello World!`);
  return {
    event: event.Records[0].body,
    context,
  };
};

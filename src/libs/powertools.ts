import { Logger } from "@aws-lambda-powertools/logger";

export const logger = new Logger({
  persistentLogAttributes: {
    service: process.env.SERVICE_NAME || "",
  },
});

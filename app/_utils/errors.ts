import { ZodError } from "zod";

export const convertZodErrors = (errors: ZodError): StringMap => {
  return errors.issues.reduce((acc: StringMap, issue) => {
    const key = issue.path[0];
    acc[key] = issue.message;
    return acc;
  }, {});
};

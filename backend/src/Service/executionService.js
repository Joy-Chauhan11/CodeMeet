import { execute } from "../engine/engine.js";

export const executeCodeService = async ({ language, code, stdin }) => {
  try {
    const result = await execute({
      language,
      code,
      stdin,
    });

    return result;
  } catch (error) {
    throw error;
  }
};
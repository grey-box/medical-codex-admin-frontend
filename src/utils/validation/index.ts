export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>?/gm, "").replace(/[^\p{L}\p{N}\s]/gu, "");
};

export const validateInput = (
  input: string,
): { sanitizedInput: string; invalidChars: string | null } => {
  const invalidCharsMatch = input.match(/[^\p{L}\p{N}\s]/gu);
  const sanitizedInput = sanitizeInput(input);

  const invalidChars = invalidCharsMatch
    ? `Invalid characters removed: ${invalidCharsMatch.join(", ")}`
    : null;

  return { sanitizedInput, invalidChars };
};

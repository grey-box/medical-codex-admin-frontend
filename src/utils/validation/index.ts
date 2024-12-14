export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>?/gm, "").replace(/[^\w\s]/gi, "");
};

export const validateInput = (
  input: string,
): { sanitizedInput: string; invalidChars: string | null } => {
  const invalidCharsMatch = input.match(/[^\w\s]/gi);
  const sanitizedInput = sanitizeInput(input);

  const invalidChars = invalidCharsMatch
    ? `Invalid characters removed: ${invalidCharsMatch.join(", ")}`
    : null;

  return { sanitizedInput, invalidChars };
};

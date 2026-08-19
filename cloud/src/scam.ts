const SCAM_PATTERNS: RegExp[] = [
  /\b(?:pay|payment)\b.{0,40}\bgift\s*cards?\b/i,
  /\bgift\s*cards?\b.{0,40}\b(?:code|codes|numbers?)\b/i,
  /\b(?:wire|transfer)\b.{0,50}\bmoney\b.{0,40}\b(?:urgent|immediately|today)\b/i,
  /\b(?:send|transfer)\b.{0,40}\b(?:bitcoin|btc|crypto|usdt|ethereum|eth)\b/i,
  /\b(?:share|send|give)\b.{0,50}\b(?:otp|one[\s-]*time\s*(?:password|passcode)|verification\s*code)\b/i,
];

export function detectScamContent(text: string): boolean {
  if (!text.trim()) return false;
  return SCAM_PATTERNS.some((pattern) => pattern.test(text));
}

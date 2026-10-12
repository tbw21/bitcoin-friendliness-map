/**
 * Get flag image URL for a country code
 * Uses flagcdn.com service
 */
export function getFlagUrl(countryCode: string, size: string = "w40"): string {
  const code = countryCode.toLowerCase();
  return `https://flagcdn.com/${size}/${code}.png`;
}

/**
 * Get alt text for flag image
 */
export function getFlagAltText(countryName: string): string {
  return `Flag of ${countryName}`;
}

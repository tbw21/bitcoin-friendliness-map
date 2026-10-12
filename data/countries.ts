export type BitcoinScore = 1 | 2 | 3 | 4 | 5;

export interface CountrySource {
  label: string;
  url: string;
}

export interface CountryData {
  code: string;
  name: string;
  score: BitcoinScore;
  summary: string;
  details: string;
  sources?: CountrySource[];
}

/**
 * Mapping of ISO-3166 alpha-2 codes to full country names
 */
const countryNames: Record<string, string> = {
  AD: "Andorra", AE: "United Arab Emirates", AF: "Afghanistan", AG: "Antigua and Barbuda",
  AI: "Anguilla", AL: "Albania", AM: "Armenia", AO: "Angola", AQ: "Antarctica", AR: "Argentina",
  AS: "American Samoa", AT: "Austria", AU: "Australia", AW: "Aruba", AX: "Åland Islands",
  AZ: "Azerbaijan", BA: "Bosnia and Herzegovina", BB: "Barbados", BD: "Bangladesh",
  BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria", BH: "Bahrain", BI: "Burundi",
  BJ: "Benin", BL: "Saint Barthélemy", BM: "Bermuda", BN: "Brunei", BO: "Bolivia",
  BQ: "Caribbean Netherlands", BR: "Brazil", BS: "Bahamas", BT: "Bhutan", BV: "Bouvet Island",
  BW: "Botswana", BY: "Belarus", BZ: "Belize", CA: "Canada", CC: "Cocos Islands",
  CD: "Democratic Republic of the Congo", CF: "Central African Republic", CG: "Republic of the Congo",
  CH: "Switzerland", CI: "Côte d'Ivoire", CK: "Cook Islands", CL: "Chile", CM: "Cameroon",
  CN: "China", CO: "Colombia", CR: "Costa Rica", CU: "Cuba", CV: "Cape Verde", CW: "Curaçao",
  CX: "Christmas Island", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DJ: "Djibouti",
  DK: "Denmark", DM: "Dominica", DO: "Dominican Republic", DZ: "Algeria", EC: "Ecuador",
  EE: "Estonia", EG: "Egypt", EH: "Western Sahara", ER: "Eritrea", ES: "Spain", ET: "Ethiopia",
  FI: "Finland", FJ: "Fiji", FK: "Falkland Islands", FM: "Micronesia", FO: "Faroe Islands",
  FR: "France", GA: "Gabon", GB: "United Kingdom", GD: "Grenada", GE: "Georgia",
  GF: "French Guiana", GG: "Guernsey", GH: "Ghana", GI: "Gibraltar", GL: "Greenland",
  GM: "Gambia", GN: "Guinea", GP: "Guadeloupe", GQ: "Equatorial Guinea", GR: "Greece",
  GS: "South Georgia and the South Sandwich Islands", GT: "Guatemala", GU: "Guam", GW: "Guinea-Bissau",
  GY: "Guyana", HK: "Hong Kong", HM: "Heard Island and McDonald Islands", HN: "Honduras",
  HR: "Croatia", HT: "Haiti", HU: "Hungary", ID: "Indonesia", IE: "Ireland", IL: "Israel",
  IM: "Isle of Man", IN: "India", IO: "British Indian Ocean Territory", IQ: "Iraq", IR: "Iran",
  IS: "Iceland", IT: "Italy", JE: "Jersey", JM: "Jamaica", JO: "Jordan", JP: "Japan",
  KE: "Kenya", KG: "Kyrgyzstan", KH: "Cambodia", KI: "Kiribati", KM: "Comoros", KN: "Saint Kitts and Nevis",
  KP: "North Korea", KR: "South Korea", KW: "Kuwait", KY: "Cayman Islands", KZ: "Kazakhstan",
  LA: "Laos", LB: "Lebanon", LC: "Saint Lucia", LI: "Liechtenstein", LK: "Sri Lanka",
  LR: "Liberia", LS: "Lesotho", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", LY: "Libya",
  MA: "Morocco", MC: "Monaco", MD: "Moldova", ME: "Montenegro", MF: "Saint Martin",
  MG: "Madagascar", MH: "Marshall Islands", MK: "North Macedonia", ML: "Mali", MM: "Myanmar",
  MN: "Mongolia", MO: "Macau", MP: "Northern Mariana Islands", MQ: "Martinique", MR: "Mauritania",
  MS: "Montserrat", MT: "Malta", MU: "Mauritius", MV: "Maldives", MW: "Malawi", MX: "Mexico",
  MY: "Malaysia", MZ: "Mozambique", NA: "Namibia", NC: "New Caledonia", NE: "Niger", NF: "Norfolk Island",
  NG: "Nigeria", NI: "Nicaragua", NL: "Netherlands", NO: "Norway", NP: "Nepal", NR: "Nauru",
  NU: "Niue", NZ: "New Zealand", OM: "Oman", PA: "Panama", PE: "Peru", PF: "French Polynesia",
  PG: "Papua New Guinea", PH: "Philippines", PK: "Pakistan", PL: "Poland", PM: "Saint Pierre and Miquelon",
  PN: "Pitcairn Islands", PR: "Puerto Rico", PS: "Palestine", PT: "Portugal", PW: "Palau",
  PY: "Paraguay", QA: "Qatar", RE: "Réunion", RO: "Romania", RS: "Serbia", RU: "Russia",
  RW: "Rwanda", SA: "Saudi Arabia", SB: "Solomon Islands", SC: "Seychelles", SD: "Sudan",
  SE: "Sweden", SG: "Singapore", SH: "Saint Helena", SI: "Slovenia", SJ: "Svalbard and Jan Mayen",
  SK: "Slovakia", SL: "Sierra Leone", SM: "San Marino", SN: "Senegal", SO: "Somalia", SR: "Suriname",
  SS: "South Sudan", ST: "São Tomé and Príncipe", SV: "El Salvador", SX: "Sint Maarten",
  SY: "Syria", SZ: "Eswatini", TC: "Turks and Caicos Islands", TD: "Chad", TF: "French Southern Territories",
  TG: "Togo", TH: "Thailand", TJ: "Tajikistan", TK: "Tokelau", TL: "Timor-Leste", TM: "Turkmenistan",
  TN: "Tunisia", TO: "Tonga", TR: "Turkey", TT: "Trinidad and Tobago", TV: "Tuvalu", TW: "Taiwan",
  TZ: "Tanzania", UA: "Ukraine", UG: "Uganda", UM: "United States Minor Outlying Islands",
  US: "United States", UY: "Uruguay", UZ: "Uzbekistan", VA: "Vatican City", VC: "Saint Vincent and the Grenadines",
  VE: "Venezuela", VG: "British Virgin Islands", VI: "United States Virgin Islands", VN: "Vietnam",
  VU: "Vanuatu", WF: "Wallis and Futuna", WS: "Samoa", XK: "Kosovo", YE: "Yemen", YT: "Mayotte",
  ZA: "South Africa", ZM: "Zambia", ZW: "Zimbabwe",
  // Alternative codes
  EL: "Greece", // Alternative code for Greece
};

/**
 * Editable data source for all country scores.
 *
 * Keyed by ISO-3166 alpha-2 country code (e.g. "SE", "NL", "US").
 * Add or adjust entries here to change the map.
 */
export const countries: Record<string, CountryData> = {
  // Score 5: Very Friendly (Legal tender, tax-friendly, highly supportive)
  SV: { code: "SV", name: "El Salvador", score: 5, summary: "First country to adopt Bitcoin as legal tender.", details: "El Salvador made Bitcoin legal tender in 2021, allowing it to be used for all transactions alongside the US dollar." },
  CH: { code: "CH", name: "Switzerland", score: 5, summary: "Crypto Valley with highly supportive regulations.", details: "Switzerland is known as 'Crypto Valley' with a highly supportive regulatory environment, strong industry presence, and clear legal framework for crypto businesses." },
  SG: { code: "SG", name: "Singapore", score: 5, summary: "Top-ranked crypto-friendly fintech hub.", details: "Singapore leads in crypto adoption with exceptional infrastructure, innovation, and regulatory clarity. The Monetary Authority actively promotes fintech innovation." },
  NL: { code: "NL", name: "Netherlands", score: 5, summary: "Highly supportive ecosystem with clear regulation.", details: "The Netherlands has a mature Bitcoin and crypto ecosystem with clear regulatory guidelines, strong startup culture, and relatively high adoption." },
  PT: { code: "PT", name: "Portugal", score: 5, summary: "Tax-friendly crypto haven.", details: "Portugal offers favorable tax treatment for crypto assets with no capital gains tax on crypto trading, making it attractive for crypto investors." },
  MT: { code: "MT", name: "Malta", score: 5, summary: "Blockchain Island with comprehensive framework.", details: "Malta has positioned itself as 'Blockchain Island' with comprehensive crypto regulations and a national strategy promoting blockchain technology." },
  EE: { code: "EE", name: "Estonia", score: 5, summary: "Digital innovation hub with e-residency.", details: "Estonia is a leader in digital innovation with e-residency program and supportive stance toward crypto and blockchain technologies." },
  GI: { code: "GI", name: "Gibraltar", score: 5, summary: "First tailored DLT regulatory framework.", details: "Gibraltar was the first country to provide a tailored regulatory framework for distributed ledger technology businesses in 2018." },
  LI: { code: "LI", name: "Liechtenstein", score: 5, summary: "Progressive crypto-friendly regulations.", details: "Liechtenstein has implemented progressive crypto regulations with clear legal framework for blockchain businesses." },
  HK: { code: "HK", name: "Hong Kong", score: 5, summary: "Top-ranked crypto hub with robust regulations.", details: "Hong Kong ranks among the top crypto-friendly jurisdictions with robust economic factors, tax-friendly policies, and comprehensive regulatory framework." },
  AE: { code: "AE", name: "United Arab Emirates", score: 5, summary: "Zero tax crypto trading hub.", details: "The UAE offers unparalleled tax benefits with zero taxes on crypto trading and has established clear crypto regulations promoting blockchain innovation." },
  BY: { code: "BY", name: "Belarus", score: 5, summary: "Crypto-friendly with tax exemptions.", details: "Belarus has legalized crypto trading and mining with tax exemptions until 2023, creating a favorable environment for crypto businesses." },
  GE: { code: "GE", name: "Georgia", score: 5, summary: "Tax-free crypto trading.", details: "Georgia offers 0% tax on capital gains from crypto trading, making it highly attractive for crypto investors." },
  PR: { code: "PR", name: "Puerto Rico", score: 5, summary: "US territory with tax benefits.", details: "As a US territory, Puerto Rico offers tax advantages for crypto investors under certain residency conditions." },

  // Score 4: Friendly (Legal, clear regulations, supportive)
  SE: { code: "SE", name: "Sweden", score: 4, summary: "Generally positive but regulated environment for Bitcoin.", details: "Sweden has an established regulatory framework for crypto assets, including registration requirements for exchanges and AML/KYC rules. While taxation and compliance can be complex, the overall stance is relatively open to Bitcoin innovation." },
  GB: { code: "GB", name: "United Kingdom", score: 4, summary: "Regulated but supportive environment.", details: "The UK has established crypto regulations with clear guidelines for exchanges and businesses. Bitcoin is treated as private money with capital gains tax applicable." },
  DE: { code: "DE", name: "Germany", score: 4, summary: "Clear regulatory framework.", details: "Germany recognizes Bitcoin as 'private money' with established tax and regulatory treatment. Banks can sell and store cryptocurrencies since 2020." },
  JP: { code: "JP", name: "Japan", score: 4, summary: "Regulated and recognized.", details: "Japan was one of the first countries to establish comprehensive crypto regulations. Cryptocurrency exchanges are regulated by the Payment Services Act with registration requirements." },
  AU: { code: "AU", name: "Australia", score: 4, summary: "Regulated and supportive.", details: "Australia has clear crypto regulations with licensing requirements for exchanges, AML compliance, and consumer protection measures." },
  FI: { code: "FI", name: "Finland", score: 4, summary: "Supportive regulatory environment.", details: "Finland follows EU crypto regulations with clear guidelines, VAT exemptions for Bitcoin services, and growing adoption." },
  IE: { code: "IE", name: "Ireland", score: 4, summary: "Supportive fintech hub.", details: "Ireland follows EU crypto regulations and has become a hub for crypto companies with supportive regulatory environment." },
  LU: { code: "LU", name: "Luxembourg", score: 4, summary: "First BitLicense in Europe.", details: "Luxembourg issued the first BitLicense in Europe in 2015 and recognizes Bitcoin as currency with clear regulatory framework." },
  CY: { code: "CY", name: "Cyprus", score: 4, summary: "EU-regulated with growing adoption.", details: "Cyprus follows EU crypto regulations and has seen growing crypto adoption with supportive business environment." },
  IS: { code: "IS", name: "Iceland", score: 4, summary: "Legal with foreign exchange restrictions.", details: "Iceland allows crypto trading and mining, though foreign exchange regulations apply. The country hosts significant Bitcoin mining operations." },
  JM: { code: "JM", name: "Jamaica", score: 4, summary: "Supportive with regulatory development.", details: "Jamaica's central bank has expressed support for cryptocurrency technology and plans to build awareness as part of financial literacy initiatives." },
  MU: { code: "MU", name: "Mauritius", score: 4, summary: "Regulated digital asset framework.", details: "Mauritius considers cryptocurrencies as regulated Digital Assets under the Financial Services Act, providing legal clarity for crypto businesses." },
  PH: { code: "PH", name: "Philippines", score: 4, summary: "Regulated crypto exchanges.", details: "The Philippines has legalized virtual currencies and regulates cryptocurrency exchanges through the Central Bank with licensing requirements." },
  MY: { code: "MY", name: "Malaysia", score: 4, summary: "Legal with growing adoption.", details: "Malaysia recognizes crypto trading as legal and has seen growing adoption, including allowing cryptocurrencies for zakat payments." },
  UZ: { code: "UZ", name: "Uzbekistan", score: 4, summary: "Tax-free crypto trading and mining.", details: "Uzbekistan legalized crypto trading and mining in 2018, making it tax-free and creating a crypto-friendly environment." },
  KG: { code: "KG", name: "Kyrgyzstan", score: 4, summary: "Legal commodity trading.", details: "Kyrgyzstan considers Bitcoin a commodity that can be legally mined, bought, sold, and traded on commodity exchanges." },
  UA: { code: "UA", name: "Ukraine", score: 4, summary: "Legalized crypto sector.", details: "Ukraine legalized cryptocurrency in 2022 and has been developing comprehensive regulations, though some restrictions on local currency purchases exist." },
  VU: { code: "VU", name: "Vanuatu", score: 4, summary: "Legalized crypto in 2021.", details: "Vanuatu legalized cryptocurrency in 2021, creating opportunities for crypto businesses and adoption." },
  PW: { code: "PW", name: "Palau", score: 4, summary: "Government-supported crypto.", details: "Palau officially supports the use of cryptocurrencies and is exploring official crypto initiatives." },
  TV: { code: "TV", name: "Tuvalu", score: 4, summary: "Government supports blockchain.", details: "Tuvalu's government officially supports blockchain technologies including cryptocurrencies." },
  MH: { code: "MH", name: "Marshall Islands", score: 4, summary: "Legal DAOs and blockchain.", details: "The Marshall Islands recognizes decentralized autonomous organizations (DAOs) as legal entities, supporting blockchain innovation." },
  FJ: { code: "FJ", name: "Fiji", score: 4, summary: "Government support for crypto.", details: "Fiji's government has expressed support for cryptocurrencies, with plans to potentially make Bitcoin legal tender." },
  TO: { code: "TO", name: "Tonga", score: 4, summary: "Plans for Bitcoin legal tender.", details: "Tonga has plans to make Bitcoin legal tender, demonstrating government support for cryptocurrency adoption." },

  // Score 3: Neutral (Legal but with restrictions or unclear regulations)
  US: { code: "US", name: "United States", score: 3, summary: "Mixed environment: innovative but fragmented regulation.", details: "The US hosts a large share of global Bitcoin activity with deep capital markets. However, regulatory landscape is fragmented across states and federal agencies, creating both opportunities and legal uncertainty." },
  CA: { code: "CA", name: "Canada", score: 3, summary: "Regulated with growing adoption.", details: "Canada has implemented crypto regulations with licensing requirements for exchanges, AML compliance, and clear tax treatment through FINTRAC." },
  FR: { code: "FR", name: "France", score: 3, summary: "Regulated environment with growing adoption.", details: "France has implemented EU-wide crypto regulations with registration requirements for service providers and clear tax guidelines." },
  IT: { code: "IT", name: "Italy", score: 3, summary: "EU-regulated environment.", details: "Italy follows EU crypto regulations with registration and reporting requirements for crypto service providers." },
  ES: { code: "ES", name: "Spain", score: 3, summary: "EU-regulated environment.", details: "Spain follows EU crypto regulations with registration requirements for exchanges and clear tax treatment." },
  BE: { code: "BE", name: "Belgium", score: 3, summary: "EU-regulated environment.", details: "Belgium follows EU crypto regulations with registration requirements and AML compliance for crypto businesses." },
  AT: { code: "AT", name: "Austria", score: 3, summary: "EU-regulated environment.", details: "Austria follows EU crypto regulations with clear tax and regulatory treatment, though crypto earnings are subject to tax law." },
  DK: { code: "DK", name: "Denmark", score: 3, summary: "EU-regulated environment.", details: "Denmark follows EU crypto regulations with registration requirements. Bitcoin is not considered currency but is legal to trade." },
  NO: { code: "NO", name: "Norway", score: 3, summary: "Regulated environment.", details: "Norway has implemented crypto regulations with tax clarity and licensing requirements. Bitcoin is treated as an asset subject to wealth tax." },
  CZ: { code: "CZ", name: "Czech Republic", score: 3, summary: "EU-regulated environment.", details: "Czech Republic follows EU crypto regulations with AML compliance requirements. Bitcoin is classified as an intangible asset for tax purposes." },
  HU: { code: "HU", name: "Hungary", score: 3, summary: "EU-regulated environment.", details: "Hungary follows EU crypto regulations with registration requirements, though the central bank has issued warnings about crypto risks." },
  RO: { code: "RO", name: "Romania", score: 3, summary: "EU-regulated environment.", details: "Romania follows EU crypto regulations with clear tax treatment. Income from crypto trading is subject to 10% tax on profits." },
  BG: { code: "BG", name: "Bulgaria", score: 3, summary: "EU-regulated environment.", details: "Bulgaria follows EU crypto regulations. Crypto trading profits are subject to 10% tax, though there's no specific Bitcoin legislation." },
  HR: { code: "HR", name: "Croatia", score: 3, summary: "EU-regulated environment.", details: "Croatia follows EU crypto regulations with warnings about crypto risks from financial stability authorities." },
  SK: { code: "SK", name: "Slovakia", score: 3, summary: "EU-regulated environment.", details: "Slovakia follows EU crypto regulations. The National Bank states Bitcoin doesn't have legal currency attributes but trading is legal." },
  SI: { code: "SI", name: "Slovenia", score: 3, summary: "EU-regulated environment.", details: "Slovenia follows EU crypto regulations. Bitcoin is neither currency nor asset, with no capital gains tax but mining is taxed." },
  LT: { code: "LT", name: "Lithuania", score: 3, summary: "EU-regulated environment.", details: "Lithuania follows EU crypto regulations. The Bank of Lithuania warns about crypto risks but trading is legal." },
  LV: { code: "LV", name: "Latvia", score: 3, summary: "EU-regulated environment.", details: "Latvia follows EU crypto regulations with registration requirements for crypto service providers." },
  PL: { code: "PL", name: "Poland", score: 3, summary: "EU-regulated environment.", details: "Poland follows EU crypto regulations. Bitcoin is not legal tender but trading doesn't violate national or EU law." },
  NZ: { code: "NZ", name: "New Zealand", score: 3, summary: "Permissive regulatory environment.", details: "New Zealand allows crypto trading with basic regulatory oversight and tax clarity. Non-banks don't need approval for crypto schemes." },
  BR: { code: "BR", name: "Brazil", score: 3, summary: "Growing regulatory clarity.", details: "Brazil has implemented crypto regulations with licensing requirements for virtual asset service providers and growing institutional adoption." },
  KR: { code: "KR", name: "South Korea", score: 3, summary: "Regulated with strong adoption.", details: "South Korea has implemented comprehensive crypto regulations with licensing requirements. Minors and foreigners are prohibited from trading." },
  MX: { code: "MX", name: "Mexico", score: 3, summary: "Regulated environment.", details: "Mexico has implemented crypto regulations through the FinTech Law with licensing requirements for exchanges and service providers." },
  ZA: { code: "ZA", name: "South Africa", score: 3, summary: "Regulated with growing adoption.", details: "South Africa has implemented crypto regulations with licensing requirements and growing market participation. Bitcoin is classified as an intangible asset." },
  IL: { code: "IL", name: "Israel", score: 3, summary: "Regulated with tax clarity.", details: "Israel has implemented crypto regulations with clear tax treatment. Bitcoin is treated as a taxable asset with 25% capital gains tax." },
  IN: { code: "IN", name: "India", score: 3, summary: "Legal but with regulatory uncertainty.", details: "India's Supreme Court lifted the RBI ban on crypto trading in 2020. While legal, regulatory clarity is still evolving with potential future legislation." },
  PK: { code: "PK", name: "Pakistan", score: 3, summary: "Legal but unregulated.", details: "Pakistan doesn't officially regulate crypto, but it's not illegal. Some provinces have passed resolutions to legalize cryptocurrency." },
  TH: { code: "TH", name: "Thailand", score: 3, summary: "Legal trading but payment restrictions.", details: "Thailand allows crypto trading and holding but banned crypto payments in 2022. Exchanges require licenses and KYC compliance." },
  VN: { code: "VN", name: "Vietnam", score: 3, summary: "Legal trading but payment restrictions.", details: "Vietnam allows crypto trading as virtual goods but bans Bitcoin as a payment method, with penalties for violations." },
  ID: { code: "ID", name: "Indonesia", score: 3, summary: "Legal trading but payment restrictions.", details: "Indonesia allows crypto trading and holding but bans crypto as payment tools. Crypto is regulated as monitored financial technology." },
  CL: { code: "CL", name: "Chile", score: 3, summary: "Legal but unregulated.", details: "Chile has no specific regulation on Bitcoin use, making it legal but without clear regulatory framework." },
  CO: { code: "CO", name: "Colombia", score: 3, summary: "Banking restrictions but legal.", details: "Colombia has banking restrictions on crypto but trading is legal. Financial institutions are warned against facilitating Bitcoin transactions." },
  PE: { code: "PE", name: "Peru", score: 3, summary: "Legal but unregulated.", details: "Peru has no specific Bitcoin regulations, making trading legal but without clear regulatory framework." },
  CR: { code: "CR", name: "Costa Rica", score: 3, summary: "Not considered currency but legal.", details: "Costa Rica doesn't consider Bitcoin as currency and warns about risks, but usage is legal at user's own risk." },
  DO: { code: "DO", name: "Dominican Republic", score: 3, summary: "Legal but unregulated.", details: "Dominican Republic has no specific Bitcoin regulations, making trading legal but without clear framework." },
  TT: { code: "TT", name: "Trinidad and Tobago", score: 3, summary: "Legal with warnings.", details: "Trinidad and Tobago's central bank is willing to work with crypto companies but warns about risks and lack of insurance." },
  NG: { code: "NG", name: "Nigeria", score: 3, summary: "Banking ban but high adoption.", details: "Nigeria has a banking ban on crypto transactions but has one of the highest crypto adoption rates globally, showing bans are often ineffective." },
  KE: { code: "KE", name: "Kenya", score: 3, summary: "Legal but unregulated.", details: "Kenya has no specific Bitcoin regulations but has high crypto adoption rates, particularly for mobile payments." },
  GH: { code: "GH", name: "Ghana", score: 3, summary: "Legal but unregulated.", details: "Ghana has no specific Bitcoin regulations, making trading legal but without clear regulatory framework." },
  TZ: { code: "TZ", name: "Tanzania", score: 3, summary: "Legal but discouraged.", details: "Tanzania doesn't officially ban crypto but the central bank advises against use, stressing only the Tanzanian shilling is legal tender." },
  AO: { code: "AO", name: "Angola", score: 3, summary: "Legal but unregulated.", details: "Angola has no legislation against Bitcoin and it remains fully legal, though government officials advise against use." },
  MA: { code: "MA", name: "Morocco", score: 2, summary: "Restrictive with warnings.", details: "Morocco has declared crypto transactions as infringement of exchange regulations with warnings issued, creating a restrictive environment." },
  LB: { code: "LB", name: "Lebanon", score: 3, summary: "Legal but with warnings.", details: "Lebanon has issued warnings discouraging Bitcoin use but trading remains legal." },
  JO: { code: "JO", name: "Jordan", score: 3, summary: "Banking restrictions but legal.", details: "Jordan prohibits banks and financial companies from dealing in Bitcoin but small businesses still accept it. Trading is legal but discouraged." },
  IQ: { code: "IQ", name: "Iraq", score: 3, summary: "Legal but unregulated.", details: "Iraq has no specific Bitcoin regulations, making trading legal but without clear framework." },
  KW: { code: "KW", name: "Kuwait", score: 3, summary: "Legal but unregulated.", details: "Kuwait has no specific Bitcoin regulations, making trading legal but without clear framework." },
  OM: { code: "OM", name: "Oman", score: 3, summary: "Legal but unregulated.", details: "Oman has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BH: { code: "BH", name: "Bahrain", score: 3, summary: "Legal but unregulated.", details: "Bahrain has no specific Bitcoin regulations, making trading legal but without clear framework." },
  YE: { code: "YE", name: "Yemen", score: 3, summary: "Legal but unregulated.", details: "Yemen has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SY: { code: "SY", name: "Syria", score: 3, summary: "Legal but unregulated.", details: "Syria has no specific Bitcoin regulations, making trading legal but without clear framework." },
  LK: { code: "LK", name: "Sri Lanka", score: 3, summary: "Legal but unregulated.", details: "Sri Lanka has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MM: { code: "MM", name: "Myanmar", score: 3, summary: "Legal but unregulated.", details: "Myanmar has no specific Bitcoin regulations, making trading legal but without clear framework." },
  LA: { code: "LA", name: "Laos", score: 3, summary: "Legal but unregulated.", details: "Laos has no specific Bitcoin regulations, making trading legal but without clear framework." },
  KH: { code: "KH", name: "Cambodia", score: 3, summary: "Banking restrictions but legal.", details: "Cambodia's central bank has asked banks not to allow crypto transactions, but trading remains legal." },
  BN: { code: "BN", name: "Brunei", score: 3, summary: "Legal trading and holding.", details: "Brunei allows crypto trading and holding but crypto is not legal tender and not regulated by the monetary authority." },
  TW: { code: "TW", name: "Taiwan", score: 3, summary: "Banking restrictions but legal.", details: "Taiwan has banking restrictions on crypto but trading is legal. Regulators warn that Bitcoin doesn't have legal protection." },
  MN: { code: "MN", name: "Mongolia", score: 3, summary: "Legal but unregulated.", details: "Mongolia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  KZ: { code: "KZ", name: "Kazakhstan", score: 3, summary: "Legal but unregulated.", details: "Kazakhstan has no specific Bitcoin regulations, making trading legal but without clear framework." },
  TJ: { code: "TJ", name: "Tajikistan", score: 3, summary: "Legal but unregulated.", details: "Tajikistan has no specific Bitcoin regulations, making trading legal but without clear framework." },
  TM: { code: "TM", name: "Turkmenistan", score: 3, summary: "Legal but unregulated.", details: "Turkmenistan has no specific Bitcoin regulations, making trading legal but without clear framework." },
  AL: { code: "AL", name: "Albania", score: 3, summary: "Regulated framework.", details: "Albania passed a law to regulate cryptocurrency activities in 2020, providing legal framework for crypto businesses." },
  RS: { code: "RS", name: "Serbia", score: 3, summary: "Legal but unregulated.", details: "Serbia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  ME: { code: "ME", name: "Montenegro", score: 3, summary: "Legal but unregulated.", details: "Montenegro has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BA: { code: "BA", name: "Bosnia and Herzegovina", score: 3, summary: "Legal but unregulated.", details: "Bosnia and Herzegovina has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MK: { code: "MK", name: "North Macedonia", score: 3, summary: "Legal but unregulated.", details: "North Macedonia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  XK: { code: "XK", name: "Kosovo", score: 3, summary: "Legal but mining banned.", details: "Kosovo allows crypto trading but banned mining in 2022 due to energy crisis, though trading remains legal." },
  VE: { code: "VE", name: "Venezuela", score: 3, summary: "Legal to hold but mining restrictions.", details: "Venezuela allows crypto holding and trading but has temporary bans on mining. The country has its own Petro cryptocurrency." },
  EC: { code: "EC", name: "Ecuador", score: 3, summary: "Legal trading but payment ban.", details: "Ecuador allows crypto trading and holding but bans crypto as payment tool. Banking restrictions exist but trading is legal." },
  BO: { code: "BO", name: "Bolivia", score: 3, summary: "Previous ban repealed.", details: "Bolivia repealed its 2014 ban on Bitcoin in 2020, making crypto trading legal again." },
  PY: { code: "PY", name: "Paraguay", score: 3, summary: "Legal but unregulated.", details: "Paraguay has no specific Bitcoin regulations, making trading legal but without clear framework." },
  UY: { code: "UY", name: "Uruguay", score: 3, summary: "Legal but unregulated.", details: "Uruguay has no specific Bitcoin regulations, making trading legal but without clear framework." },
  PA: { code: "PA", name: "Panama", score: 3, summary: "Legal but unregulated.", details: "Panama has no specific Bitcoin regulations, making trading legal but without clear framework." },
  GT: { code: "GT", name: "Guatemala", score: 3, summary: "Legal but unregulated.", details: "Guatemala has no specific Bitcoin regulations, making trading legal but without clear framework." },
  HN: { code: "HN", name: "Honduras", score: 3, summary: "Legal but unregulated.", details: "Honduras has no specific Bitcoin regulations, making trading legal but without clear framework." },
  NI: { code: "NI", name: "Nicaragua", score: 3, summary: "Legal but unregulated.", details: "Nicaragua has no specific Bitcoin regulations, making trading legal but without clear framework." },
  CU: { code: "CU", name: "Cuba", score: 3, summary: "Legal but unregulated.", details: "Cuba has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BS: { code: "BS", name: "Bahamas", score: 3, summary: "Legal but unregulated.", details: "Bahamas has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BB: { code: "BB", name: "Barbados", score: 3, summary: "Legal but unregulated.", details: "Barbados has no specific Bitcoin regulations, making trading legal but without clear framework." },
  AG: { code: "AG", name: "Antigua and Barbuda", score: 3, summary: "Legal but unregulated.", details: "Antigua and Barbuda has no specific Bitcoin regulations, making trading legal but without clear framework." },
  DM: { code: "DM", name: "Dominica", score: 3, summary: "Legal but unregulated.", details: "Dominica has no specific Bitcoin regulations, making trading legal but without clear framework." },
  GD: { code: "GD", name: "Grenada", score: 3, summary: "Legal but unregulated.", details: "Grenada has no specific Bitcoin regulations, making trading legal but without clear framework." },
  LC: { code: "LC", name: "Saint Lucia", score: 3, summary: "Legal but unregulated.", details: "Saint Lucia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  VC: { code: "VC", name: "Saint Vincent and the Grenadines", score: 3, summary: "Legal but unregulated.", details: "Saint Vincent and the Grenadines has no specific Bitcoin regulations, making trading legal but without clear framework." },
  KN: { code: "KN", name: "Saint Kitts and Nevis", score: 3, summary: "Legal but unregulated.", details: "Saint Kitts and Nevis has no specific Bitcoin regulations, making trading legal but without clear framework." },
  WS: { code: "WS", name: "Samoa", score: 3, summary: "Legal but discouraged.", details: "Samoa allows crypto but the central bank discourages use and warns about risks." },
  CF: { code: "CF", name: "Central African Republic", score: 3, summary: "Legal tender status revoked.", details: "The Central African Republic adopted Bitcoin as legal tender in 2022 but agreed to repeal it in 2023. Current status is unclear." },
  ET: { code: "ET", name: "Ethiopia", score: 3, summary: "Legal but unregulated.", details: "Ethiopia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  UG: { code: "UG", name: "Uganda", score: 3, summary: "Legal but unregulated.", details: "Uganda has no specific Bitcoin regulations, making trading legal but without clear framework." },
  RW: { code: "RW", name: "Rwanda", score: 3, summary: "Legal but unregulated.", details: "Rwanda has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MW: { code: "MW", name: "Malawi", score: 3, summary: "Legal but unregulated.", details: "Malawi has no specific Bitcoin regulations, making trading legal but without clear framework." },
  ZM: { code: "ZM", name: "Zambia", score: 3, summary: "Legal but unregulated.", details: "Zambia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BW: { code: "BW", name: "Botswana", score: 3, summary: "Legal but unregulated.", details: "Botswana has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MZ: { code: "MZ", name: "Mozambique", score: 3, summary: "Legal but unregulated.", details: "Mozambique has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MG: { code: "MG", name: "Madagascar", score: 3, summary: "Legal but unregulated.", details: "Madagascar has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SN: { code: "SN", name: "Senegal", score: 3, summary: "Legal but unregulated.", details: "Senegal has no specific Bitcoin regulations, making trading legal but without clear framework." },
  CI: { code: "CI", name: "Côte d'Ivoire", score: 3, summary: "Legal but unregulated.", details: "Côte d'Ivoire has no specific Bitcoin regulations, making trading legal but without clear framework." },
  CM: { code: "CM", name: "Cameroon", score: 3, summary: "Legal but unregulated.", details: "Cameroon has no specific Bitcoin regulations, making trading legal but without clear framework." },
  GA: { code: "GA", name: "Gabon", score: 3, summary: "Legal but unregulated.", details: "Gabon has no specific Bitcoin regulations, making trading legal but without clear framework." },
  CD: { code: "CD", name: "Democratic Republic of the Congo", score: 3, summary: "Legal but unregulated.", details: "Democratic Republic of the Congo has no specific Bitcoin regulations, making trading legal but without clear framework." },
  CG: { code: "CG", name: "Republic of the Congo", score: 3, summary: "Legal but unregulated.", details: "Republic of the Congo has no specific Bitcoin regulations, making trading legal but without clear framework." },
  TD: { code: "TD", name: "Chad", score: 3, summary: "Legal but unregulated.", details: "Chad has no specific Bitcoin regulations, making trading legal but without clear framework." },
  NE: { code: "NE", name: "Niger", score: 3, summary: "Legal but unregulated.", details: "Niger has no specific Bitcoin regulations, making trading legal but without clear framework." },
  ML: { code: "ML", name: "Mali", score: 3, summary: "Legal but unregulated.", details: "Mali has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BF: { code: "BF", name: "Burkina Faso", score: 3, summary: "Legal but unregulated.", details: "Burkina Faso has no specific Bitcoin regulations, making trading legal but without clear framework." },
  GN: { code: "GN", name: "Guinea", score: 3, summary: "Legal but unregulated.", details: "Guinea has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SL: { code: "SL", name: "Sierra Leone", score: 3, summary: "Legal but unregulated.", details: "Sierra Leone has no specific Bitcoin regulations, making trading legal but without clear framework." },
  LR: { code: "LR", name: "Liberia", score: 3, summary: "Legal but unregulated.", details: "Liberia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SO: { code: "SO", name: "Somalia", score: 3, summary: "Legal but unregulated.", details: "Somalia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  ER: { code: "ER", name: "Eritrea", score: 3, summary: "Legal but unregulated.", details: "Eritrea has no specific Bitcoin regulations, making trading legal but without clear framework." },
  DJ: { code: "DJ", name: "Djibouti", score: 3, summary: "Legal but unregulated.", details: "Djibouti has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SS: { code: "SS", name: "South Sudan", score: 3, summary: "Legal but unregulated.", details: "South Sudan has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SD: { code: "SD", name: "Sudan", score: 3, summary: "Legal but unregulated.", details: "Sudan has no specific Bitcoin regulations, making trading legal but without clear framework." },
  LY: { code: "LY", name: "Libya", score: 3, summary: "Legal but unregulated.", details: "Libya has no specific Bitcoin regulations, making trading legal but without clear framework." },
  TN: { code: "TN", name: "Tunisia", score: 3, summary: "Legal but unregulated.", details: "Tunisia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MR: { code: "MR", name: "Mauritania", score: 3, summary: "Legal but unregulated.", details: "Mauritania has no specific Bitcoin regulations, making trading legal but without clear framework." },
  CV: { code: "CV", name: "Cape Verde", score: 3, summary: "Legal but unregulated.", details: "Cape Verde has no specific Bitcoin regulations, making trading legal but without clear framework." },
  GW: { code: "GW", name: "Guinea-Bissau", score: 3, summary: "Legal but unregulated.", details: "Guinea-Bissau has no specific Bitcoin regulations, making trading legal but without clear framework." },
  GQ: { code: "GQ", name: "Equatorial Guinea", score: 3, summary: "Legal but unregulated.", details: "Equatorial Guinea has no specific Bitcoin regulations, making trading legal but without clear framework." },
  ST: { code: "ST", name: "São Tomé and Príncipe", score: 3, summary: "Legal but unregulated.", details: "São Tomé and Príncipe has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BI: { code: "BI", name: "Burundi", score: 3, summary: "Legal but unregulated.", details: "Burundi has no specific Bitcoin regulations, making trading legal but without clear framework." },
  BT: { code: "BT", name: "Bhutan", score: 3, summary: "Legal but unregulated.", details: "Bhutan has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MV: { code: "MV", name: "Maldives", score: 3, summary: "Legal but unregulated.", details: "Maldives has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SC: { code: "SC", name: "Seychelles", score: 3, summary: "Legal but unregulated.", details: "Seychelles has no specific Bitcoin regulations, making trading legal but without clear framework." },
  KM: { code: "KM", name: "Comoros", score: 3, summary: "Legal but unregulated.", details: "Comoros has no specific Bitcoin regulations, making trading legal but without clear framework." },
  PG: { code: "PG", name: "Papua New Guinea", score: 3, summary: "Legal but unregulated.", details: "Papua New Guinea has no specific Bitcoin regulations, making trading legal but without clear framework." },
  SB: { code: "SB", name: "Solomon Islands", score: 3, summary: "Legal but unregulated.", details: "Solomon Islands has no specific Bitcoin regulations, making trading legal but without clear framework." },
  NC: { code: "NC", name: "New Caledonia", score: 3, summary: "Legal but unregulated.", details: "New Caledonia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  KI: { code: "KI", name: "Kiribati", score: 3, summary: "Legal but unregulated.", details: "Kiribati has no specific Bitcoin regulations, making trading legal but without clear framework." },
  NR: { code: "NR", name: "Nauru", score: 3, summary: "Legal but unregulated.", details: "Nauru has no specific Bitcoin regulations, making trading legal but without clear framework." },
  FM: { code: "FM", name: "Micronesia", score: 3, summary: "Legal but unregulated.", details: "Micronesia has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MO: { code: "MO", name: "Macau", score: 3, summary: "Legal but unregulated.", details: "Macau has no specific Bitcoin regulations, making trading legal but without clear framework." },
  MD: { code: "MD", name: "Moldova", score: 3, summary: "Legal but unregulated.", details: "Moldova has no specific Bitcoin regulations, making trading legal but without clear framework." },

  // Score 2: Restrictive (Banking bans, partial bans, heavy restrictions)
  TR: { code: "TR", name: "Turkey", score: 2, summary: "Banned as payment but trading allowed.", details: "Turkey has banned crypto payments but allows trading with regulatory oversight. The ban on payments was implemented in 2021 citing transaction risks." },
  AR: { code: "AR", name: "Argentina", score: 2, summary: "Banking restrictions on crypto.", details: "Argentina allows crypto trading but has banned financial institutions from facilitating crypto transactions since 2022, creating significant restrictions." },
  RU: { code: "RU", name: "Russia", score: 2, summary: "Restrictive with some use allowed.", details: "Russia has implemented restrictions on crypto payments while allowing some trading and mining activities. International trade in crypto is being legalized." },
  IR: { code: "IR", name: "Iran", score: 2, summary: "Banking restrictions but mining allowed.", details: "Iran has banking restrictions on crypto but allows mining. The central bank has banned financial institutions from dealing with cryptocurrencies." },
  SA: { code: "SA", name: "Saudi Arabia", score: 2, summary: "Banking restrictions and warnings.", details: "Saudi Arabia has warned financial institutions against using Bitcoin and warns the public about risks, though trading may still occur." },
  QA: { code: "QA", name: "Qatar", score: 2, summary: "Banking ban on crypto.", details: "Qatar has banned banks from trading Bitcoin due to concerns over financial crimes and hacking. Crypto is banned in the Qatar Financial Centre." },
  NA: { code: "NA", name: "Namibia", score: 2, summary: "Banking restrictions.", details: "Namibia's central bank has declared that crypto exchanges are not allowed and crypto cannot be accepted as payment for goods and services." },
  ZW: { code: "ZW", name: "Zimbabwe", score: 2, summary: "Banking restrictions.", details: "Zimbabwe's central bank has banned banking use of crypto, though a High Court order lifted the ban. The situation remains unclear." },
  GR: { code: "GR", name: "Greece", score: 2, summary: "EU-regulated but limited infrastructure.", details: "Greece follows EU crypto regulations but has limited dedicated Bitcoin infrastructure compared to leading jurisdictions." },
  EL: { code: "EL", name: "Greece", score: 2, summary: "EU-regulated but limited infrastructure.", details: "Greece follows EU crypto regulations but has limited dedicated Bitcoin infrastructure compared to leading jurisdictions." },

  // Score 1: Hostile/Banned (Illegal or effectively banned)
  CN: { code: "CN", name: "China", score: 1, summary: "Banned trading and mining.", details: "China has completely banned cryptocurrency trading and mining since 2021. Financial institutions are prohibited from handling Bitcoin transactions, though blockchain technology itself is promoted." },
  DZ: { code: "DZ", name: "Algeria", score: 1, summary: "Prohibited by law.", details: "Algeria has explicitly prohibited the purchase, sale, use, and holding of virtual currencies according to official regulations, with penalties for violations." },
  EG: { code: "EG", name: "Egypt", score: 1, summary: "Prohibited for financial institutions.", details: "Egypt has prohibited individuals, banks, and financial institutions from dealing in cryptocurrencies according to central bank regulations." },
  NP: { code: "NP", name: "Nepal", score: 1, summary: "Absolute ban.", details: "Nepal has an absolute ban on cryptocurrency use. Trading or using any cryptocurrency is illegal in the country." },
  BD: { code: "BD", name: "Bangladesh", score: 1, summary: "Illegal with potential jail time.", details: "Bangladesh has declared cryptocurrency illegal with potential jail time under anti-money laundering laws, though enforcement may vary." },
  AF: { code: "AF", name: "Afghanistan", score: 1, summary: "Banned by Taliban.", details: "Afghanistan's Taliban government banned cryptocurrency trading in 2022, with arrests of dealers reported." },
};

/**
 * Returns data for a country code.
 *
 * If the code is not explicitly defined in `countries`, this falls back to a
 * neutral default entry with the full country name so that every SVG country can show a modal.
 *
 * To customize a country, add or edit an entry in `countries` above.
 */
export function getCountry(code: string): CountryData {
  const upper = code.toUpperCase();
  const existing = countries[upper];
  if (existing) {
    return existing;
  }

  // Get full country name from mapping
  const fullName = countryNames[upper] || upper;

  return {
    code: upper,
    name: fullName,
    score: 3,
    summary:
      "Default Bitcoin friendliness profile. Edit this country in data/countries.ts to provide a more accurate score and description.",
    details:
      "This country currently uses a default, neutral Bitcoin friendliness score. To improve accuracy, add a specific entry for this ISO country code in data/countries.ts, including a tailored score, summary, and detailed notes.",
  };
}

# Payload


## Supported Types

### `models.Payload1`

```typescript
const value: models.Payload1 = {};
```

### `models.Payload2`

```typescript
const value: models.Payload2 = {
  action: "archived",
  id: "<id>",
  slug: "<value>",
  projectId: "<id>",
};
```

### `models.Payload3`

```typescript
const value: models.Payload3 = {
  action: "rotated",
  environment: "<value>",
};
```

### `models.Payload4`

```typescript
const value: models.Payload4 = {
  action: "read",
  environment: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.Five`

```typescript
const value: models.Five = {
  teamId: "<id>",
  accountRequestId: "<id>",
};
```

### `models.Six`

```typescript
const value: models.Six = {
  teamId: "<id>",
};
```

### `models.Seven`

```typescript
const value: models.Seven = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.Eight`

```typescript
const value: models.Eight = {
  reason: "<value>",
  blockCode: "<value>",
};
```

### `models.Nine`

```typescript
const value: models.Nine = {
  resourceId: "<id>",
  projectName: "<value>",
};
```

### `models.Ten`

```typescript
const value: models.Ten = {
  teamId: "<id>",
  resourceId: "<id>",
  fromPlan: "hobby",
  toPlan: "pro",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "disable",
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  scopeType: "project",
  change: "enable",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  scopeType: "project",
  change: "remove",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  enabled: true,
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  added: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  removed: [
    "<value 1>",
  ],
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  privateModel: {
    slug: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  piiRedaction: {
    from: false,
    to: true,
  },
  moderationPolicyCount: 354.4,
  policiesAdded: [
    "<value 1>",
    "<value 2>",
  ],
  policiesRemoved: [
    "<value 1>",
    "<value 2>",
  ],
  policiesModified: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  retention: {
    defaultMode: "until-requested",
    ceilingMode: "until-requested",
  },
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  author: "<value>",
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  projectId: "<id>",
  aliasCount: 8419.89,
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  alias: "<value>",
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {};
```

### `models.Forty`

```typescript
const value: models.Forty = {};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  projectName: "<value>",
  alias: "<value>",
  action: "created",
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  alias: "<value>",
  deploymentUrl: "https://dirty-glider.info/",
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  appName: "<value>",
  scopes: [
    "offline_access",
  ],
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  appName: "<value>",
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  appName: "<value>",
  nextScopes: [
    "offline_access",
  ],
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  appName: "<value>",
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  appName: "<value>",
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {
  appName: "<value>",
};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {
  appName: "<value>",
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  projectId: "<id>",
  attackModeEnabled: false,
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  invoiceId: "<id>",
  amount: 1567.89,
  refundReason: "<value>",
  lineItemCount: 3548.84,
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-payment-pending",
  amount: 3819.19,
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  paymentMethodId: "<id>",
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
  planSlug: "<value>",
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  productAliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 8811.16,
  prevBulkRedirectsLimit: 2580.69,
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  custom: true,
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  id: "<id>",
  cns: [
    "<value 1>",
    "<value 2>",
  ],
  custom: false,
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  id: "<id>",
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  src: "<value>",
  dst: "<value>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  id: "<id>",
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: false,
    autoAddReviewers: true,
  },
  next: {
    enabled: false,
    autoAddReviewers: true,
  },
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  slug: "<value>",
  documentId: "<id>",
  title: "<value>",
  fingerprint: "<value>",
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  count: 120.13,
  documents: [
    {
      slug: "<value>",
      documentId: "<id>",
      title: "<value>",
      fingerprint: "<value>",
    },
  ],
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  newName: "<value>",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  githubLogin: "<value>",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  githubLogin: "<value>",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  githubLogin: "<value>",
  host: "evil-editor.biz",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  gitlabLogin: "<value>",
  gitlabUserId: 5280.07,
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 3127.76,
  prevPurchasedAmount: 1187.16,
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  suffix: "<value>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  suffix: "<value>",
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  project: {
    name: "<value>",
  },
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "New York",
  },
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  url: "https://prestigious-tackle.info/",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 1518.84,
    isPrivate: false,
    org: "<value>",
    prId: 2316.51,
    projectId: "<id>",
    repo: "<value>",
    repoId: 3484.23,
    type: "now-comment",
    provider: "github-custom-host",
  },
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  url: "https://respectful-summary.biz",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    url: "https://spirited-birdbath.name",
  },
  deploymentId: "<id>",
  url: "https://milky-essence.biz/",
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  projectName: "<value>",
  source: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "project",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  deploymentId: "<id>",
  deploymentUrl: "https://advanced-wriggler.net/",
  deploymentName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "weird-solvency.biz",
  type: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  action: "add",
  initiator: "user",
  id: "<id>",
  domain: "tricky-jet.org",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "spanish-sightseeing.biz",
  type: "<value>",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  name: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  name: "<value>",
  price: 15.38,
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  name: "<value>",
  cdnEnabled: false,
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  name: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [],
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  domain: "likely-bowler.net",
  customNameservers: null,
  prevCustomNameservers: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  domain: "wasteful-kinase.org",
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  domain: "impartial-sediment.name",
  zone: false,
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  domain: "thorough-injunction.biz",
  zone: true,
  initiator: "user",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  domain: "majestic-turret.org",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  name: "<value>",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  name: "<value>",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  drainUrl: "https://scaly-safe.info/",
  drainName: "<value>",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  drainUrl: "https://complicated-feather.org/",
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [],
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  path: "/opt/bin",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  edgeConfig: {
    id: "<id>",
    slug: "<value>",
  },
  fromAccount: {
    id: "<id>",
    type: "team",
  },
  toAccount: {
    id: "<id>",
    type: "user",
  },
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [],
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  email: "Briana_Prohaska@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Orlo87@yahoo.com",
  },
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  deploymentId: "<id>",
  deploymentUrl: "https://firm-swing.net/",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  created: new Date("2021-02-10T13:11:49.180Z"),
  key: "my-api-key",
  ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  id: "env_XCG7t7AIHuO2SBA8667zNUiM",
  createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  createdAt: 1609492210000,
  deletedAt: 1609492210000,
  updatedAt: 1609492210000,
  projectId: [
    "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
    "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
  ],
  type: "encrypted",
  target: [
    "production",
  ],
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  oldEnvVar: {
    created: new Date("2021-02-10T13:11:49.180Z"),
    key: "my-api-key",
    ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    id: "env_XCG7t7AIHuO2SBA8667zNUiM",
    createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    createdAt: 1609492210000,
    deletedAt: 1609492210000,
    updatedAt: 1609492210000,
    projectId: [
      "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
      "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
    ],
    type: "encrypted",
    target: [
      "production",
    ],
  },
  newEnvVar: {
    created: new Date("2021-02-10T13:11:49.180Z"),
    key: "my-api-key",
    ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    id: "env_XCG7t7AIHuO2SBA8667zNUiM",
    createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    createdAt: 1609492210000,
    deletedAt: 1609492210000,
    updatedAt: 1609492210000,
    projectId: [
      "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
      "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
    ],
    type: "encrypted",
    target: [
      "production",
    ],
  },
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 9710.23,
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  projectId: "<id>",
  restore: true,
  configVersion: 2110.7,
  configChangeCount: 9992.42,
  configChanges: [],
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  projectId: "<id>",
  previousOwnerId: "<id>",
  newOwnerId: "<id>",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  action: "enable",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  provider: "bitbucket",
  actorLogin: "<value>",
  actorAccountId: "<id>",
  installationId: "<id>",
  usedAppToken: true,
  sourceRepo: "<value>",
  sourceCommitSha: "<value>",
  destinationRepo: "<value>",
  destinationBranch: "<value>",
  resultCommitSha: "<value>",
  outcome: "failure",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 4800.04,
    createdAt: 4825.57,
    deploymentSecret: "<value>",
    email: "Garrick93@yahoo.com",
    id: "<id>",
    platformVersion: 3365.31,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Maegan.Rosenbaum-Champlin",
    updatedAt: 9507.73,
    version: "northstar",
  },
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  confirmedScopes: [],
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  integration: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    configurationId: "<id>",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  integration: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    configurationId: "<id>",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  configurations: [
    {
      integrationId: "<id>",
      configurationId: "<id>",
      integrationSlug: "<value>",
    },
  ],
  ownerId: "<id>",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "data-view",
  readonly: false,
  rolledBack: true,
  failedQueryIndex: 2877.57,
  errorCode: "<value>",
  queryCount: 3927.88,
  queries: [],
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "raw_commands",
  readonly: true,
  commands: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "list_keys",
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_keys_metadata",
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_key_data",
  key: "<key>",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  issuerId: "<id>",
  issuerName: "<value>",
  algorithm: "<value>",
  origin: "<value>",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  logDrainUrl: "https://glass-best-seller.name",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  logDrainUrl: "https://wise-tentacle.info/",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  provider: "saml",
  login: "Verner_Auer70",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  provider: "google",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  periods: [
    {
      periodNumber: 4098.45,
      percent: "<value>",
      startDate: "<value>",
      endDate: "<value>",
    },
  ],
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  enabled: true,
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  group: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
  },
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  prev: {
    project: {},
  },
  group: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
  },
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  projectName: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {
      "key": "CONTRIBUTOR",
    },
  },
  organizationId: "<id>",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "enterprise",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 4924.82,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 9465.3,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 149.76,
  scriptCount: 5717.41,
  connectSrcCount: 227.09,
  connectSrcOriginCount: 4390.01,
  headerCount: 9964.01,
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  projectId: "<id>",
  url: "https://milky-instance.org/",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://our-ruin.name",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://fine-populist.biz/",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  pattern: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  projectId: "<id>",
  environment: "<value>",
  host: "mealy-lifestyle.biz",
  connectorId: "<id>",
  connectorType: "<value>",
  connectorService: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  plan: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  prev: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
  current: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
  previousEndpoint: {
    name: "<value>",
  },
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: false,
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 2599.99,
    enabledAt: 6201.61,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 1923.71,
    enabledAt: 8515.45,
  },
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: false,
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: false,
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: false,
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "firewall-allowed",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [
      {
        envId: "<id>",
        connectConfigurationId: "<id>",
        passive: false,
        buildsEnabled: true,
        createdAt: 9005.75,
        updatedAt: 8968.35,
      },
    ],
    newConnectConfigurations: [
      {
        envId: "<id>",
        connectConfigurationId: "<id>",
        passive: true,
        buildsEnabled: false,
        createdAt: 5463.76,
        updatedAt: 2696.76,
      },
    ],
  },
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: false,
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: true,
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  enableFunctionsBeta: true,
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 4908.39,
  },
  next: {
    functionDefaultTimeout: 3960.55,
  },
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultMemoryType: "<value>",
  },
  next: {
    functionDefaultMemoryType: "<value>",
  },
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [],
  },
  next: {
    functionDefaultRegions: [],
  },
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: true,
  },
  next: {
    functionZeroConfigFailover: false,
  },
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github-limited",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "gitlab",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: false,
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: false,
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  requireVerifiedCommits: true,
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: false,
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: false,
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: false,
    propagateFailures: false,
  },
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "unlucky-flame.org",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 5022.41,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "limping-pear.net",
  target: "<value>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "lavish-yeast.com",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "sick-reservation.info",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projects: [
    {
      projectId: "<id>",
      role: "ADMIN",
      membershipCreatedAt: 3950.93,
    },
  ],
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "that-councilman.name",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 4008.74,
  },
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  project: {
    name: "<value>",
    role: "ADMIN",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 905.99,
  },
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  projectName: "<value>",
  destinationAccountName: null,
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  oldPasswordProtection: "all_except_custom_domains",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  projectId: "<id>",
  expiresAt: 4667.2,
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  projectName: "<value>",
  consent: "granted",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  projectAccountId: "<id>",
  deploymentId: "<id>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: false,
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: true,
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: false,
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: true,
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: false,
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 3608.49,
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 261.58,
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {},
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  ssoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  oldSsoProtection: "all",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    project: {
      staticIps: {
        enabled: false,
      },
    },
  },
  previous: {
    project: {
      staticIps: {
        enabled: true,
      },
    },
  },
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  addedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  removedProjects: [],
  addedProviders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  removedProviders: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  instances: 2359.11,
  url: "https://ill-seafood.org",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  email: "Devan_Schiller18@hotmail.com",
  verified: false,
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  email: "Monserrat13@yahoo.com",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  uid: "<id>",
  name: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  enabled: true,
  updatedAt: 6941.31,
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  scalingRules: {},
  min: 746.19,
  max: 7030.41,
  url: "https://suburban-hydrant.org",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  email: "Payton.McGlynn72@yahoo.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  email: "Cristal.Larkin@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  email: "Karlee.Becker@hotmail.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  sampleRatePercent: 499.04,
  spendLimitInDollars: 5815.62,
  previous: {
    sampleRatePercent: 8431.21,
    spendLimitInDollars: 9664.34,
  },
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4672.39,
      previousSpend: [
        9772.69,
      ],
      notifiedAt: [
        691.01,
      ],
      createdAt: 4209.31,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  budget: {
    type: "fixed",
    fixedBudget: 1859.92,
    previousSpend: [],
    notifiedAt: [
      8148.74,
    ],
    createdAt: 6961.65,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  budget: {
    type: "fixed",
    fixedBudget: 5953.03,
    previousSpend: [
      2014.56,
    ],
    notifiedAt: [
      7770.87,
    ],
    createdAt: 7476.94,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  storeType: "postgres",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
  },
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "blob",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "edge-config",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  id: "<id>",
  type: "edge-config",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  id: "<id>",
  type: "blob",
  locked: true,
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  next: {
    enabled: true,
    scope: "public",
    includeDrafts: false,
  },
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  trialCreditsIssuedAt: 9736.14,
  expiresAt: "1752274481793",
  amount: "125.86",
  currency: "Kenyan Shilling",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 1224.11,
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 4205.37,
  planId: "<id>",
  requestedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  githubScopes: [
    "<value 1>",
  ],
  requestedScopeCount: 8328.84,
  elevatedScopeCount: 2506.29,
  mergedScopeCount: 3728.13,
  githubScopeCount: 2607.08,
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  previous: "manual-approval",
  next: "auto-approval",
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  previous: {},
  next: null,
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  enabled: true,
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: false,
  environment: "production",
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  environment: "production",
  enabled: "off-force",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  deletedCount: 9528.58,
  inviteIds: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Robb.Dicki-Jacobs",
  },
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Glennie.Gislason",
  },
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  authorized: true,
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  enforced: true,
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 7472.76,
  expiresAt: "1764689619670",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  publicId: "<id>",
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  previousConcurrentBuilds: 5884.81,
  nextConcurrentBuilds: 4950.76,
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  plan: "hobby",
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  invoiceId: "<id>",
  convertedFromTrial: false,
  plan: "pro",
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  decision: "turn_off",
  version: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  consent: "refused",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  deletedCount: 5059.93,
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  enabled: "default",
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  domain: "yellowish-hose.net",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  tokenTypes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  exportId: "<id>",
  from: 1251.84,
  to: 5237.25,
  format: "<value>",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  totp: false,
  recoveryCodes: 5937.48,
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  username: "Brandon_Hyatt30",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  username: "Wanda.Kuhic-Abernathy",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  enabled: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  autoBlockPrevented: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  method: "recovery-code",
  reason: "<value>",
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  action: "regenerate-recovery-codes",
  reason: "<value>",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  remaining: 4717.81,
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  mfaEnabled: true,
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  mfa: {
    enabled: false,
    totpVerified: true,
  },
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  enabled: true,
  totpVerified: false,
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  email: "Edward33@hotmail.com",
  prevEmail: "<value>",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
  digest: "<value>",
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  public: false,
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [],
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  previousProjectCount: 3682.95,
  nextProjectCount: 7518.2,
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 463.85,
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
    accountId: "<id>",
    region: "<value>",
    vpcId: "<id>",
  },
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  tier: "pro",
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  id: "<id>",
  url: "https://misguided-permafrost.name",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  chatId: "<id>",
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  model: "Volt",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 3762.08,
  outputTokens: 7403.84,
  timestamp: 4524,
  events: [],
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
  appName: "<value>",
  atTTL: 1985.42,
  scope: "<value>",
  authMethod: "apple",
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  policy: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://winged-coordination.info/",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [
      "<value 1>",
      "<value 2>",
    ],
    resources: {
      projectIds: [],
    },
    createdAt: 3902.03,
    updatedAt: 5752.86,
  },
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://altruistic-hospitalization.name",
    teamId: "<id>",
    name: "<value>",
    claims: [
      {
        name: "<value>",
        values: [
          {
            value: "<value>",
            wildcards: true,
          },
        ],
      },
    ],
    permissions: [],
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    createdAt: 9215.14,
    updatedAt: 4873.25,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://brown-chow.biz/",
    teamId: "<id>",
    name: "<value>",
    claims: [
      {
        name: "<value>",
        values: [
          {
            value: "<value>",
            wildcards: false,
          },
        ],
      },
    ],
    permissions: [
      "<value 1>",
      "<value 2>",
    ],
    resources: null,
    createdAt: 8398.77,
    updatedAt: 8695.02,
  },
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "bitbucket",
  scope: "team",
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  deletedCount: 7890.55,
  actorTokenId: "<id>",
};
```


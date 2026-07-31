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
  rule: {
    id: "<id>",
    type: "<value>",
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
  virtualModelConfig: {
    id: "<id>",
    modelSlug: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  author: "<value>",
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
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
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  projectId: "<id>",
  aliasCount: 1619.73,
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  alias: "<value>",
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {};
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
const value: models.FortyOne = {
  projectName: "<value>",
  alias: "<value>",
  action: "removed",
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  alias: "<value>",
  deploymentUrl: "https://proper-corporation.name/",
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  appName: "<value>",
  scopes: [],
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  appName: "<value>",
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  appName: "<value>",
  nextScopes: [],
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  appName: "<value>",
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
  projectId: "<id>",
  attackModeEnabled: true,
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  projectName: "<value>",
  autoExposeSystemEnvs: false,
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {
  invoiceId: "<id>",
  amount: 2677.96,
  refundReason: "<value>",
  lineItemCount: 136.83,
};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
  amount: 3548.84,
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  paymentMethodId: "<id>",
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  planSlug: "<value>",
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  action: "mutate",
  data: {
    "key": "<value>",
  },
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  productAliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 8100.92,
  prevBulkRedirectsLimit: 2170.96,
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  custom: false,
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  id: "<id>",
  cns: [
    "<value 1>",
  ],
  custom: true,
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  id: "<id>",
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  src: "<value>",
  dst: "<value>",
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  id: "<id>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: true,
    autoAddReviewers: false,
  },
  next: {
    enabled: true,
    autoAddReviewers: true,
  },
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  slug: "<value>",
  documentId: "<id>",
  title: "<value>",
  fingerprint: "<value>",
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  count: 9674.14,
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

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
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
  newName: "<value>",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  githubLogin: "<value>",
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
  host: "irresponsible-alert.info",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  gitlabLogin: "<value>",
  gitlabUserId: 3203.03,
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 9902.77,
  prevPurchasedAmount: 6783.83,
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  suffix: "<value>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  suffix: "<value>",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
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
    state: "Idaho",
  },
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  url: "https://memorable-translation.biz",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  job: {
    prId: 6317.69,
    type: "pr",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 7689.26,
      sha: "<value>",
    },
    installationId: 8899.97,
    isPrivate: true,
    org: "<value>",
    repo: "<value>",
    repoId: 6104.68,
    provider: "github-custom-host",
  },
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  url: "https://critical-synergy.biz/",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
    },
    url: "https://lean-disadvantage.info",
  },
  deploymentId: "<id>",
  url: "https://smooth-ceramics.com/",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  projectName: "<value>",
  source: "<value>",
  ruleName: "gitSources",
  ruleProvenance: "team",
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  deploymentId: "<id>",
  deploymentUrl: "https://insidious-deer.info",
  deploymentName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "sad-produce.info",
  type: "<value>",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  action: "update",
  initiator: "user",
  id: "<id>",
  domain: "gigantic-help.org",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "cluttered-shore.org",
  type: "<value>",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  name: "<value>",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  name: "<value>",
  price: 862.85,
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  name: "<value>",
  cdnEnabled: true,
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  name: "<value>",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [],
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  domain: "blushing-grass.biz",
  customNameservers: [
    "<value 1>",
  ],
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  domain: "likely-bowler.net",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  domain: "wasteful-kinase.org",
  zone: true,
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  domain: "impartial-sediment.name",
  zone: false,
  initiator: "system",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
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
  domain: "ashamed-bandwidth.com",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  name: "<value>",
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
  drainUrl: "https://damp-fisherman.name",
  drainName: null,
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  drainUrl: "https://scaly-safe.info/",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  path: "/etc",
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
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
  edgeConfig: {
    id: "<id>",
    slug: "<value>",
  },
  fromAccount: {
    id: "<id>",
    type: "user",
  },
  toAccount: {
    id: "<id>",
    type: "team",
  },
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  email: "Kameron.Hartmann-Maggio@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Briana_Prohaska@gmail.com",
  },
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  deploymentId: "<id>",
  deploymentUrl: "https://near-taro.info/",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
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

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
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

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
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
  projectName: "<value>",
  configVersion: 1207.45,
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
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
  projectId: "<id>",
  restore: true,
  configVersion: 6605.72,
  configChangeCount: 1059.95,
  configChanges: [],
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {},
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  projectId: "<id>",
  previousOwnerId: "<id>",
  newOwnerId: "<id>",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  action: "disable",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 9626.32,
    createdAt: 4107.87,
    deploymentSecret: "<value>",
    email: "Haylie.Gutmann@yahoo.com",
    id: "<id>",
    platformVersion: 2922.67,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Beau_Stiedemann",
    updatedAt: 7288.17,
    version: "northstar",
  },
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  confirmedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
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

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
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

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  configurations: [],
  ownerId: "<id>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "schema",
  readonly: true,
  rolledBack: false,
  failedQueryIndex: 3381.25,
  errorCode: null,
  queryCount: 3649.29,
  queries: [],
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "raw_commands",
  readonly: true,
  commands: [
    "<value 1>",
  ],
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
  requestKind: "list_keys",
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
  requestKind: "get_keys_metadata",
  keys: [],
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
  requestKind: "get_key_data",
  key: "<key>",
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  issuerId: "<id>",
  issuerName: "<value>",
  algorithm: "<value>",
  origin: "<value>",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  logDrainUrl: "https://live-airport.com/",
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  logDrainUrl: "https://good-citizen.org/",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  enabled: false,
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
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

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
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

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  projectName: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "platform",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 498.78,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 3245.9,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: false,
  },
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 3710.67,
  scriptCount: 6103,
  connectSrcCount: 6819.62,
  connectSrcOriginCount: 9058.97,
  headerCount: 8417.96,
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  projectId: "<id>",
  url: "https://robust-taxicab.biz",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://astonishing-descendant.biz",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://dim-jury.name/",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: null,
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  projectId: "<id>",
  projectName: "<value>",
  pattern: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  projectId: "<id>",
  environment: "<value>",
  host: "incomparable-lay.info",
  connectorId: "<id>",
  connectorType: "<value>",
  connectorService: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  plan: "<value>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
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

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
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

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: true,
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 5511.54,
    enabledAt: 2619.07,
  },
  prevProjectAnalytics: null,
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
  action: "updated",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: true,
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: false,
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "firewall-allowed",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [],
    newConnectConfigurations: null,
  },
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: false,
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
  enableFunctionsBeta: false,
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 9850.38,
  },
  next: {
    functionDefaultTimeout: 2933.02,
  },
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
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

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
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

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
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

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github-custom-host",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: true,
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: false,
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: false,
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: true,
  },
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "pitiful-armchair.info",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 6173.75,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "creative-cd.com",
  target: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "known-fun.com",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "partial-obedience.biz",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_DEVELOPER",
      membershipCreatedAt: 5164.53,
    },
  ],
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "incomparable-stock.org",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  project: {
    name: "<value>",
  },
  projectMembership: null,
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  project: {
    name: "<value>",
    role: "PROJECT_VIEWER",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 6508.38,
  },
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  passwordProtection: {
    deploymentType: "preview",
  },
  oldPasswordProtection: "preview",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  projectId: "<id>",
  expiresAt: 944.15,
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  projectName: "<value>",
  consent: "granted",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  projectId: "<id>",
  projectName: "<value>",
  projectAccountId: "<id>",
  deploymentId: "<id>",
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: false,
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: false,
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: true,
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 2000.02,
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 8974.99,
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
    ],
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  ssoProtection: "prod_deployment_urls_and_all_previews",
  oldSsoProtection: "all_except_custom_domains",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
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
        enabled: false,
      },
    },
  },
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  addedProjects: [],
  removedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [
    "<value 1>",
  ],
  removedProviders: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  instances: 5681.15,
  url: "https://tense-airmail.biz",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  email: "Cloyd_Hodkiewicz@hotmail.com",
  verified: true,
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  email: "Cyril.Hirthe15@yahoo.com",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  enabled: true,
  updatedAt: 9059.16,
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  scalingRules: {},
  min: 3311.25,
  max: 8944.92,
  url: "https://ethical-wilderness.org",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  email: "Lurline_Schimmel26@gmail.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  email: "Devan_Schiller18@hotmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  email: "Monserrat13@yahoo.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  sampleRatePercent: 1640.55,
  spendLimitInDollars: 4920.1,
  previous: {
    sampleRatePercent: null,
    spendLimitInDollars: 9380.63,
  },
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 7060.5,
      previousSpend: [
        21.35,
      ],
      notifiedAt: [
        8593.19,
        6673.18,
      ],
      createdAt: 9040.82,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  budget: {
    type: "fixed",
    fixedBudget: 2701.87,
    previousSpend: [
      3315.9,
      3393.77,
    ],
    notifiedAt: [],
    createdAt: 3249.53,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  budget: {
    type: "fixed",
    fixedBudget: 9734.41,
    previousSpend: [
      3589.85,
      1456.2,
    ],
    notifiedAt: [
      5887.25,
      1508.48,
      987.93,
    ],
    createdAt: 8363.55,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  storeType: "postgres",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
  },
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "blob",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "redis",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  id: "<id>",
  type: "postgres",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  id: "<id>",
  type: "blob",
  locked: true,
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  next: {
    enabled: true,
    scope: "private",
    includeDrafts: false,
  },
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  trialCreditsIssuedAt: 1375.78,
  expiresAt: "1735745914951",
  amount: "767.15",
  currency: "Rand",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 4491.07,
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 1041.22,
  planId: "<id>",
  requestedScopes: [
    "<value 1>",
  ],
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  mergedScopes: [],
  githubScopes: [
    "<value 1>",
    "<value 2>",
  ],
  requestedScopeCount: 8574.68,
  elevatedScopeCount: 7187.27,
  mergedScopeCount: 7818.37,
  githubScopeCount: 2374.14,
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  previous: "auto-approval",
  next: "auto-approval",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  enabled: true,
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: false,
  environment: "preview",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  environment: "preview",
  enabled: "on",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  deletedCount: 1224.11,
  inviteIds: [],
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Warren_Kerluke",
  },
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Elyse_Hirthe65",
  },
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  authorized: false,
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  enforced: false,
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 4293.35,
  expiresAt: "1744021700984",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  publicId: "<id>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  previousConcurrentBuilds: 3984.46,
  nextConcurrentBuilds: 1904.75,
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  plan: "pro",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  invoiceId: "<id>",
  convertedFromTrial: true,
  plan: "hobby",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  decision: "turn_off",
  version: "<value>",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  consent: "granted",
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  deletedCount: 7472.76,
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  enabled: "off",
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  domain: "motionless-testimonial.net",
  ips: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  tokenTypes: [],
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  exportId: "<id>",
  from: 2185.81,
  to: 7819.23,
  format: "<value>",
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  provider: "github-custom-host",
  login: "Jace_Leffler73",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  totp: true,
  recoveryCodes: 9038.09,
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  username: "Scotty39",
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  username: "Gilda23",
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  method: "webauthn",
  reason: "<value>",
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  action: "enable",
  reason: "<value>",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  mfaEnabled: true,
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  mfa: {
    enabled: false,
    totpVerified: true,
  },
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  enabled: false,
  totpVerified: false,
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  email: "Jacinthe.Toy51@yahoo.com",
  prevEmail: "<value>",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
  digest: "<value>",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [],
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  ruleName: "<value>",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  previousProjectCount: 7365.73,
  nextProjectCount: 4195,
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  customAlertTitle: "<value>",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 8919.54,
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
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

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
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

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
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

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  tier: "plus",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  id: "<id>",
  url: "https://forceful-mixture.name",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  chatId: "<id>",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  model: "CTS",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 9380.8,
  outputTokens: 1675.53,
  timestamp: 308.98,
  events: [
    {
      eventId: "<id>",
      modelId: "<id>",
      inputTokens: 8264.37,
      outputTokens: 921.19,
      totalTokens: 4741.19,
      cacheCreationInputTokens: 6106.82,
      cacheReadInputTokens: 9845.35,
      timestamp: "<value>",
    },
  ],
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
  appName: "<value>",
  atTTL: 6142.23,
  scope: "<value>",
  authMethod: "saml",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  policy: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://scared-coast.org",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [],
    resources: {
      projectIds: [],
    },
    createdAt: 5786.88,
    updatedAt: 2232.42,
  },
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://honored-suspension.info/",
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
    permissions: [
      "<value 1>",
    ],
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    createdAt: 6052.81,
    updatedAt: 1755.49,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://cheerful-dish.com/",
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
    permissions: [],
    resources: {
      projectIds: [],
    },
    createdAt: 674.17,
    updatedAt: 9303.13,
  },
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "chatgpt",
  scope: "user",
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  deletedCount: 9730.9,
  actorTokenId: "<id>",
};
```


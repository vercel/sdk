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

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  enabled: false,
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
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

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  projectName: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "enterprise",
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
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  projectId: "<id>",
  previous: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 4908.44,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 692.3,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
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
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 8782.94,
  scriptCount: 6882.62,
  connectSrcCount: 8945.65,
  connectSrcOriginCount: 3129.39,
  headerCount: 8471.5,
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  projectId: "<id>",
  url: "https://astonishing-descendant.biz",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://impressionable-bend.biz/",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://flawed-humor.info/",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  pattern: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  projectId: "<id>",
  environment: "<value>",
  host: "querulous-moment.net",
  connectorId: "<id>",
  connectorType: "<value>",
  connectorService: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  plan: "<value>",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
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

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
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

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: true,
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 6011.84,
    enabledAt: 7588.07,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 462.51,
    enabledAt: 3239.55,
  },
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  action: "disabled",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: false,
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: false,
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: true,
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "alert",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
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

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: false,
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: true,
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  projectId: "<id>",
  enableFunctionsBeta: false,
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 5212.63,
  },
  next: {
    functionDefaultTimeout: 5092.01,
  },
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
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

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: true,
  },
  next: {
    functionZeroConfigFailover: true,
  },
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github-custom-host",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "gitlab",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: true,
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: true,
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: false,
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: false,
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: false,
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: true,
  },
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "creative-cd.com",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 3396.75,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "known-fun.com",
  target: "<value>",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "partial-obedience.biz",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "serpentine-godfather.name",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  projects: [],
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "bossy-parsnip.biz",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 8587.9,
  },
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  project: {
    name: "<value>",
    role: "PROJECT_DEVELOPER",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 9957.5,
  },
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  passwordProtection: {
    deploymentType: "all",
  },
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  projectId: "<id>",
  expiresAt: 3409.73,
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  projectName: "<value>",
  consent: "granted",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  projectAccountId: "<id>",
  deploymentId: "<id>",
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
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: false,
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: true,
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 8974.99,
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
    skewProtectionMaxAge: 3709.71,
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {},
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  ssoProtection: "preview",
  oldSsoProtection: "all_except_custom_domains",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
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

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
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
  removedProviders: [],
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  instances: 8839.58,
  url: "https://teeming-gift.net/",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  email: "Cyril.Hirthe15@yahoo.com",
  verified: false,
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  email: "Ethyl.Fisher@yahoo.com",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  uid: "<id>",
  name: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  enabled: true,
  updatedAt: 665.13,
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  scalingRules: {
    "key": {
      min: 7732.79,
      max: 2712.29,
    },
  },
  min: 501.07,
  max: 8921.72,
  url: "https://showy-cappelletti.net",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  email: "Devan_Schiller18@hotmail.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  email: "Monserrat13@yahoo.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  email: "Casandra27@yahoo.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  sampleRatePercent: 7424.31,
  spendLimitInDollars: 2211.54,
  previous: {
    sampleRatePercent: 578.24,
    spendLimitInDollars: 9411.56,
  },
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 5653.56,
      previousSpend: [
        113.26,
        7139.24,
      ],
      notifiedAt: [
        2483.29,
        4262.12,
        3812.34,
      ],
      createdAt: 3465.41,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
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
const value: models.ThreeHundredAndSeventeen = {
  budget: {
    type: "fixed",
    fixedBudget: 1573.36,
    previousSpend: [],
    notifiedAt: [
      7643.71,
      8183.3,
    ],
    createdAt: 4431.38,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  storeType: "redis",
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
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "postgres",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  id: "<id>",
  type: "edge-config",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  id: "<id>",
  type: "integration",
  locked: true,
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  next: {
    enabled: true,
    scope: "all",
    includeDrafts: false,
  },
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  trialCreditsIssuedAt: 4491.07,
  expiresAt: "1747366437864",
  amount: "482.64",
  currency: "Serbian Dinar",
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
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 2152.14,
  planId: "<id>",
  requestedScopes: [
    "<value 1>",
  ],
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopes: [],
  githubScopes: [
    "<value 1>",
    "<value 2>",
  ],
  requestedScopeCount: 6780.12,
  elevatedScopeCount: 4205.13,
  mergedScopeCount: 9178.88,
  githubScopeCount: 8810.6,
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  previous: "auto-approval",
  next: "block",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  enabled: true,
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: false,
  environment: "production",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  environment: "production",
  enabled: "off-force",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  deletedCount: 4205.37,
  inviteIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {};
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
const value: models.ThreeHundredAndFortyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Wanda50",
  },
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  authorized: false,
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  enforced: true,
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 3379.77,
  expiresAt: "1758025649293",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  publicId: "<id>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  previousConcurrentBuilds: 8333.06,
  nextConcurrentBuilds: 9556.22,
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  plan: "hobby",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  invoiceId: "<id>",
  convertedFromTrial: false,
  plan: "pro",
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  decision: "keep_on",
  version: "<value>",
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  consent: "granted",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  deletedCount: 4465.45,
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  enabled: "off",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  enabled: true,
  scope: "log-drains",
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  domain: "each-responsibility.name",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  tokenTypes: [],
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  exportId: "<id>",
  from: 8563.53,
  to: 4081.06,
  format: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  provider: "apple",
  login: "Stone31",
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  totp: true,
  recoveryCodes: 7963.8,
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  username: "Zackery35",
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  username: "Lambert80",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  method: "email-otp",
  reason: "<value>",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  action: "add-passkey",
  reason: "<value>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  mfaEnabled: false,
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  enabled: false,
  totpVerified: false,
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  email: "Dedrick.Ryan@gmail.com",
  prevEmail: "<value>",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
  digest: "<value>",
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  ruleName: "<value>",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  previousProjectCount: 9971.48,
  nextProjectCount: 7806.57,
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  customAlertTitle: "<value>",
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: true,
  protectedProjectCount: 3306.34,
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
    accountId: "<id>",
    region: "<value>",
    vpcId: "<id>",
  },
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
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

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
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

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  tier: "plus",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  id: "<id>",
  url: "https://warmhearted-colon.com/",
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  chatId: "<id>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  model: "Altima",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 8739.93,
  outputTokens: 4833.65,
  timestamp: 6421.09,
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

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 3726.82,
  scope: "<value>",
  authMethod: "saml",
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  policy: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://warped-making.org/",
    teamId: "<id>",
    name: "<value>",
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    resources: {
      projectIds: [],
    },
    createdAt: 2642.27,
    updatedAt: 5924.71,
  },
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://hoarse-gymnast.net/",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [
      "<value 1>",
    ],
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    createdAt: 686.5,
    updatedAt: 5820.74,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://obedient-account.net/",
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
      "<value 3>",
    ],
    resources: null,
    createdAt: 7654.83,
    updatedAt: 930.94,
  },
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "token-exchange-oidc",
  scope: "user",
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  deletedCount: 2478.42,
  actorTokenId: "<id>",
};
```


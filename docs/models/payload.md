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
  action: "transitioned",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  state: "Hawaii",
  projectId: "<id>",
};
```

### `models.Payload4`

```typescript
const value: models.Payload4 = {
  action: "deleted",
  environment: "<value>",
};
```

### `models.Five`

```typescript
const value: models.Five = {
  action: "read",
  environment: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.Six`

```typescript
const value: models.Six = {
  teamId: "<id>",
  accountRequestId: "<id>",
};
```

### `models.Seven`

```typescript
const value: models.Seven = {
  teamId: "<id>",
};
```

### `models.Eight`

```typescript
const value: models.Eight = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.Nine`

```typescript
const value: models.Nine = {
  reason: "<value>",
  blockCode: "<value>",
};
```

### `models.Ten`

```typescript
const value: models.Ten = {
  resourceId: "<id>",
  projectName: "<value>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  teamId: "<id>",
  resourceId: "<id>",
  fromPlan: "hobby",
  toPlan: "hobby",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "disable",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  change: "enable",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  scopeType: "api-key",
  change: "set",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  scopeType: "user",
  change: "enable",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  amount: "530.30",
  purchaseIntentId: "<id>",
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  enabled: false,
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
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

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  privateModel: {
    slug: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  piiRedaction: {
    from: true,
    to: false,
  },
  moderationPolicyCount: 8583.61,
  policiesAdded: [
    "<value 1>",
    "<value 2>",
  ],
  policiesRemoved: [
    "<value 1>",
  ],
  policiesModified: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  retention: {
    defaultMode: "days",
    ceilingMode: "days",
  },
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  author: "<value>",
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
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
const value: models.ThirtyNine = {
  projectId: "<id>",
  aliasCount: 3862.91,
};
```

### `models.Forty`

```typescript
const value: models.Forty = {
  alias: "<value>",
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {};
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
const value: models.FortyFive = {};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  projectName: "<value>",
  alias: "<value>",
  action: "removed",
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  alias: "<value>",
  deploymentUrl: "https://mediocre-giggle.org/",
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  appName: "<value>",
  scopes: [],
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
  nextScopes: [],
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  appName: "<value>",
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {
  appName: "<value>",
};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {
  appName: "<value>",
};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  appName: "<value>",
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  projectId: "<id>",
  attackModeEnabled: true,
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  invoiceId: "<id>",
  amount: 3104.01,
  refundReason: "<value>",
  lineItemCount: 5742.5,
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-payment-pending",
  amount: 1846.17,
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  paymentMethodId: "<id>",
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  planSlug: "<value>",
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  action: "resume_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  action: "mutate",
  data: {
    "key": "<value>",
  },
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  productAliases: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 1265.72,
  prevBulkRedirectsLimit: 5980.01,
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  custom: false,
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  id: "<id>",
  cns: [
    "<value 1>",
    "<value 2>",
  ],
  custom: true,
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  id: "<id>",
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  src: "<value>",
  dst: "<value>",
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  id: "<id>",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: true,
    autoAddReviewers: true,
  },
  next: {
    enabled: false,
    autoAddReviewers: false,
  },
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  slug: "<value>",
  documentId: "<id>",
  title: "<value>",
  fingerprint: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  count: 3193.54,
  documents: [],
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
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

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
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

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
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

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
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

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  githubLogin: "<value>",
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  githubLogin: "<value>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  githubLogin: "<value>",
  host: "ashamed-cap.org",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  gitlabLogin: "<value>",
  gitlabUserId: 3127.76,
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 2397.72,
  prevPurchasedAmount: 9297.42,
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  metricName: "<value>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  suffix: "<value>",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  suffix: "<value>",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
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
    state: "Massachusetts",
  },
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  url: "https://our-hexagon.biz/",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  job: {
    repoPushedAt: 118.82,
    type: "push",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 6467.65,
      sha: "<value>",
    },
    installationId: 9929.72,
    isPrivate: false,
    org: "<value>",
    prId: 8134.51,
    repo: "<value>",
    repoId: 5063.88,
    provider: "github",
  },
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  url: "https://scared-iridescence.net",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {},
    url: "https://tricky-jet.org",
  },
  deploymentId: "<id>",
  url: "https://rural-custody.org",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  projectName: "<value>",
  source: "<value>",
  ruleName: "gitSources",
  ruleProvenance: "team",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  deploymentId: "<id>",
  deploymentUrl: null,
  deploymentName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "ripe-yak.info",
  type: "<value>",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  action: "add",
  initiator: "user",
  id: "<id>",
  domain: "wrathful-characterization.net",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "natural-lid.org",
  type: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  name: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  name: "<value>",
  price: 762.26,
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  name: "<value>",
  cdnEnabled: true,
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  name: "<value>",
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  domain: "friendly-laughter.net",
  customNameservers: [],
  prevCustomNameservers: [
    "<value 1>",
  ],
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
  domain: "majestic-turret.org",
  zone: true,
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  domain: "silky-apparatus.net",
  zone: false,
  initiator: "user",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: null,
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  domain: "compassionate-drug.name",
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  name: "<value>",
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  name: "<value>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  drainUrl: "https://well-off-bookcase.biz",
  drainName: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  drainUrl: "https://terrible-order.biz",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  path: "/tmp",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
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

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [],
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  email: "Donna_Senger@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Jena_Ankunding@gmail.com",
  },
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  deploymentId: "<id>",
  deploymentUrl: "https://winding-hovercraft.com",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
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

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
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

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 8810.82,
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  configVersion: 9429.01,
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  projectId: "<id>",
  restore: true,
  configVersion: 3993.46,
  configChangeCount: 9626.32,
  configChanges: [],
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  projectId: "<id>",
  previousOwnerId: "<id>",
  newOwnerId: "<id>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  action: "disable",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  provider: "gitlab",
  actorLogin: null,
  actorAccountId: "<id>",
  installationId: "<id>",
  usedAppToken: false,
  sourceRepo: "<value>",
  sourceCommitSha: null,
  destinationRepo: "<value>",
  destinationBranch: "<value>",
  resultCommitSha: "<value>",
  outcome: "success",
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 2717.36,
    createdAt: 4821.92,
    deploymentSecret: "<value>",
    email: "Tyler27@gmail.com",
    id: "<id>",
    platformVersion: 8596.5,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Dorothea_Bogan",
    updatedAt: 7005.31,
    version: "northstar",
  },
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  confirmedScopes: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
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

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
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

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
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

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "data-view",
  readonly: false,
  rolledBack: true,
  failedQueryIndex: 4280.1,
  errorCode: "<value>",
  queryCount: 9830.04,
  queries: [
    {
      command: "<value>",
    },
  ],
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
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
  ],
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "list_keys",
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_keys_metadata",
  keys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_key_data",
  key: "<key>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  issuerId: "<id>",
  issuerName: "<value>",
  algorithm: "<value>",
  origin: "<value>",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  logDrainUrl: "https://abandoned-reboot.name/",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  logDrainUrl: "https://moist-knuckle.com/",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  provider: "github-custom-host",
  login: "Pinkie71",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  provider: "apple",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  periods: [],
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  enabled: false,
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
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

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
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

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  projectName: "<value>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {
      "key": "BILLING",
    },
  },
  organizationId: "<id>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "enterprise",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 3803.82,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 9008.04,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 3959.58,
  scriptCount: 961.94,
  connectSrcCount: 4911.9,
  connectSrcOriginCount: 490.67,
  headerCount: 5278.89,
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  projectId: "<id>",
  url: "https://talkative-angle.com/",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://monthly-exploration.name",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://bogus-gloom.name/",
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  projectId: "<id>",
  projectName: "<value>",
  pattern: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  projectId: "<id>",
  environment: "<value>",
  host: "timely-netsuke.net",
  connectorId: "<id>",
  connectorType: "<value>",
  connectorService: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  plan: "<value>",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
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

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
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

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: true,
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 6225.38,
    enabledAt: 8119.34,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 373.2,
    enabledAt: 7760.4,
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
  action: "regenerated",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: false,
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: true,
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: false,
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "observability-edge-requests",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [],
    newConnectConfigurations: [],
  },
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  projectName: "<value>",
  action: "disabled",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: true,
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  projectId: "<id>",
  enableFunctionsBeta: false,
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 4006.63,
  },
  next: {
    functionDefaultTimeout: 4824.74,
  },
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
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

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  next: {
    functionDefaultRegions: [],
  },
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
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

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "cursor-origin",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: false,
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "disabled",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  requireVerifiedCommits: true,
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: false,
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: false,
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
  },
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "admired-lashes.net",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 6022.71,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "somber-bookcase.net",
  target: "<value>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "quiet-inspection.name",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "excitable-flint.com",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  projects: [],
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "grizzled-gripper.name",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 3427.25,
  },
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  project: {
    name: "<value>",
    role: "ADMIN",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 4165.61,
  },
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
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
  passwordProtection: "prod_deployment_urls_and_all_previews",
  oldPasswordProtection: "all_except_custom_domains",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  projectId: "<id>",
  expiresAt: 2982.59,
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  projectName: "<value>",
  consent: "granted",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  projectAccountId: "<id>",
  deploymentId: "<id>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
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
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: true,
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: false,
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: false,
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 6362.94,
  },
  previous: {},
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 3024.44,
  },
  previous: {},
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
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

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  ssoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  oldSsoProtection: "prod_deployment_urls_and_all_previews",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
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

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
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
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [],
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  instances: 2439.37,
  url: "https://glaring-basket.com",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  email: "Payton.McGlynn72@yahoo.com",
  verified: true,
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  email: "Cristal.Larkin@gmail.com",
  verified: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  email: "Karlee.Becker@hotmail.com",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  enabled: true,
  updatedAt: 840.75,
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  scalingRules: {},
  min: 3904.97,
  max: 7067.73,
  url: "https://every-chapel.biz/",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  email: "Fritz.Quitzon10@yahoo.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  email: "Edd85@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  email: "Elton_Botsford@gmail.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  sampleRatePercent: 366.67,
  spendLimitInDollars: 5463.63,
  previous: {
    sampleRatePercent: 8154.91,
    spendLimitInDollars: null,
  },
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4553.8,
      previousSpend: [
        9968.67,
      ],
      notifiedAt: [],
      createdAt: 3905.45,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 1837.32,
    previousSpend: [],
    notifiedAt: [
      6799.39,
      3140.75,
      4873.67,
    ],
    createdAt: 5988.71,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  budget: {
    type: "fixed",
    fixedBudget: 1045.89,
    previousSpend: [
      750.87,
    ],
    notifiedAt: [
      3068.44,
      2256.86,
    ],
    createdAt: 867.48,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  storeType: "postgres",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "redis",
  },
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "blob",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  id: "<id>",
  type: "integration",
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  id: "<id>",
  type: "postgres",
  locked: false,
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  next: {
    enabled: false,
    scope: "public",
    includeDrafts: false,
  },
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  trialCreditsIssuedAt: 7839.68,
  expiresAt: "1754963959425",
  amount: "392.22",
  currency: "Falkland Islands Pound",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 8836.74,
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 9528.58,
  planId: "<id>",
  requestedScopes: [
    "<value 1>",
  ],
  elevatedScopes: [
    "<value 1>",
  ],
  mergedScopes: [
    "<value 1>",
  ],
  githubScopes: [
    "<value 1>",
  ],
  requestedScopeCount: 2522.94,
  elevatedScopeCount: 8613.93,
  mergedScopeCount: 8187.52,
  githubScopeCount: 1128.17,
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  previous: "auto-approval",
  next: "block",
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  enabled: false,
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: false,
  environment: "preview",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  environment: "production",
  enabled: "on",
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  deletedCount: 5324.3,
  inviteIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Lafayette13",
  },
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Gillian_Toy87",
  },
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  authorized: false,
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  enforced: false,
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 9471.38,
  expiresAt: "1761962867307",
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  publicId: "<id>",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  previousConcurrentBuilds: 30.02,
  nextConcurrentBuilds: 9038.09,
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  plan: "pro",
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  invoiceId: "<id>",
  convertedFromTrial: true,
  plan: "pro",
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  decision: "keep_on",
  version: "<value>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  consent: "refused",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  deletedCount: 3729.95,
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  enabled: "on",
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  enabled: true,
  scope: "dashboard",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  domain: "fat-barge.name",
  ips: [],
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  tokenTypes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  exportId: "<id>",
  from: 784.77,
  to: 9264.11,
  format: "<value>",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  reason: "limits-exceeded",
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  totp: false,
  recoveryCodes: 1638.73,
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  username: "Christophe37",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  username: "Santina_Mayert",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  username: "Camryn81",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  enabled: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  autoBlockPrevented: false,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  method: "webauthn",
  reason: "<value>",
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  allowedMethods: [],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  action: "add-totp",
  reason: "<value>",
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  previous: {
    enabled: true,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  remaining: 9730.9,
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  mfaEnabled: true,
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  enabled: false,
  totpVerified: true,
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  provider: "google",
  providerSubjectId: "<id>",
  outcome: "linking-required",
  decision: {
    authoritative: true,
    basis: "gmail",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: true,
    mxOutcome: "google",
  },
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  email: "Joy.Moore39@hotmail.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  email: "Devan_Ankunding70@yahoo.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  username: "Tristian2",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
  digest: "<value>",
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  public: true,
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  previousProjectCount: 766.13,
  nextProjectCount: 2878.14,
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  vulnerabilities: [],
  protectionEnabled: true,
  protectedProjectCount: 7650.79,
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
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

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
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

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
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

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  tier: "pro",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  id: "<id>",
  url: "https://pushy-partridge.info/",
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  chatId: "<id>",
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  model: "Challenger",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 8582.4,
  outputTokens: 6719.51,
  timestamp: 7477.16,
  events: [],
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
  appName: "<value>",
  atTTL: 681.4,
  scope: "<value>",
  authMethod: "apple",
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {
  policy: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://sure-footed-essence.com/",
    teamId: "<id>",
    name: null,
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    permissions: [],
    resources: {
      projectIds: [],
    },
    createdAt: 6455.11,
    updatedAt: 9913.85,
  },
};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://shocked-procurement.net/",
    teamId: "<id>",
    name: null,
    claims: [],
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    createdAt: 2251.03,
    updatedAt: 2759.76,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://improbable-story.org",
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
    createdAt: 9437.8,
    updatedAt: 1462.95,
  },
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "github-webhook",
  scope: "project",
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  deletedCount: 8193.14,
  actorTokenId: "<id>",
};
```


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
  projectId: "<id>",
  slug: "<value>",
};
```

### `models.Three`

```typescript
const value: models.Three = {
  action: "updated",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
  slug: "<value>",
  state: "Illinois",
};
```

### `models.Four`

```typescript
const value: models.Four = {
  action: "added",
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
  policyId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.Seven`

```typescript
const value: models.Seven = {
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

### `models.Eight`

```typescript
const value: models.Eight = {
  teamId: "<id>",
};
```

### `models.Nine`

```typescript
const value: models.Nine = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.Ten`

```typescript
const value: models.Ten = {
  blockCode: "<value>",
  reason: "<value>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  fromPlan: "hobby",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "pro",
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
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "remove",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  change: "disable",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  change: "set",
  scopeType: "project",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  change: "set",
  scopeType: "team",
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  changed: [
    "<value 1>",
  ],
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  removed: [
    "<value 1>",
  ],
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  enabled: false,
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  amount: "748.73",
  purchaseIntentId: "<id>",
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  added: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  removed: [],
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  moderationPolicyCount: 8022.7,
  piiRedaction: {
    from: true,
    to: true,
  },
  policiesAdded: [
    "<value 1>",
  ],
  policiesModified: [
    "<value 1>",
    "<value 2>",
  ],
  policiesRemoved: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  regions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  retention: {
    ceilingMode: "until-requested",
    defaultMode: "days",
  },
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  virtualModelConfig: {
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
    name: "<value>",
  },
  author: "<value>",
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
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
  aliasCount: 1923.42,
  projectId: "<id>",
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  alias: "<value>",
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  action: "removed",
  alias: "<value>",
  projectName: "<value>",
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  alias: "<value>",
  deploymentUrl: "https://pastel-omelet.biz/",
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  appName: "<value>",
  scopes: [
    "offline_access",
  ],
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
  nextScopes: [],
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
  appName: "<value>",
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  appName: "<value>",
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
  appName: "<value>",
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  attackModeEnabled: true,
  projectId: "<id>",
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  autoExposeSystemEnvs: true,
  projectName: "<value>",
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  amount: 8100.92,
  invoiceId: "<id>",
  lineItemCount: 2170.96,
  refundReason: "<value>",
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  amount: 8811.16,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-payment-pending",
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  paymentMethodId: "<id>",
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  changedFields: [],
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  planSlug: "<value>",
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  productAliases: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  bulkRedirectsLimit: 3914.68,
  prevBulkRedirectsLimit: 5375.25,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  custom: false,
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  cns: [],
  custom: false,
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
  id: "<id>",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  dst: "<value>",
  src: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  id: "<id>",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  next: {
    autoAddReviewers: false,
    enabled: false,
  },
  previous: {
    autoAddReviewers: true,
    enabled: false,
  },
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  count: 2395.34,
  documents: [],
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  configuration: {
    id: "<id>",
  },
  newName: "<value>",
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  githubLogin: "<value>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  githubLogin: "<value>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  githubLogin: "<value>",
  host: "colorless-nougat.org",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  gitlabLogin: "<value>",
  gitlabUserId: 2397.72,
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  prevPurchasedAmount: 4466.53,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 1518.84,
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  metricName: "<value>",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  suffix: "<value>",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  suffix: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  hookName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Oklahoma",
  },
  project: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  checkId: "<id>",
  checkName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  url: "https://strident-substitution.info/",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      sha: "<value>",
    },
    org: "<value>",
    provider: "vercel",
    ref: "<value>",
    repo: "<value>",
    sha: "<value>",
    type: "vercel-push",
  },
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  url: "https://tricky-pantyhose.biz/",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  gitCommitterName: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  sha: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
    url: "https://incomparable-hose.name",
  },
  deploymentId: "<id>",
  url: "https://crafty-agreement.biz/",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  projectName: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "team",
  source: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: "https://strict-responsibility.info",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  domain: "blushing-grass.biz",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  action: "delete",
  domain: "burdensome-signature.com",
  id: "<id>",
  initiator: "user",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  domain: "wasteful-kinase.org",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  name: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  name: "<value>",
  price: 8517.54,
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  cdnEnabled: false,
  name: "<value>",
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  name: "<value>",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  name: "<value>",
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
    "<value 2>",
  ],
  previousServiceType: "<value>",
  serviceType: "<value>",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  domain: "damp-fisherman.name",
  prevCustomNameservers: null,
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  domain: "ruddy-bidet.net",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  domain: "grouchy-compromise.com",
  echMode: "auto",
  previousEchMode: "enabled",
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  domain: "compassionate-drug.name",
  zone: false,
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  domain: "bustling-skyscraper.info",
  initiator: "system",
  zone: false,
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  fromId: "<id>",
  fromName: null,
  name: "<value>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  domain: "rowdy-widow.biz",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  name: "<value>",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  name: "<value>",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  drainName: null,
  drainUrl: "https://sophisticated-pinstripe.net",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  drainUrl: "https://overcooked-making.name",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [],
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  path: "/opt/sbin",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
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
    type: "team",
  },
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  email: "Wallace32@hotmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  previousRule: {
    email: "Catharine.Jast@gmail.com",
  },
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  deploymentId: "<id>",
  deploymentUrl: "https://unconscious-overcoat.com",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "config",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  created: new Date("2021-02-10T13:11:49.180Z"),
  createdAt: 1609492210000,
  createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  deletedAt: 1609492210000,
  deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  id: "env_XCG7t7AIHuO2SBA8667zNUiM",
  key: "my-api-key",
  ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  projectId: [
    "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
    "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
  ],
  target: [
    "production",
  ],
  type: "encrypted",
  updatedAt: 1609492210000,
  updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [],
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  newEnvVar: {
    created: new Date("2021-02-10T13:11:49.180Z"),
    createdAt: 1609492210000,
    createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    deletedAt: 1609492210000,
    deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    id: "env_XCG7t7AIHuO2SBA8667zNUiM",
    key: "my-api-key",
    ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    projectId: [
      "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
      "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
    ],
    target: [
      "production",
    ],
    type: "encrypted",
    updatedAt: 1609492210000,
    updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  },
  oldEnvVar: {
    created: new Date("2021-02-10T13:11:49.180Z"),
    createdAt: 1609492210000,
    createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    deletedAt: 1609492210000,
    deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    id: "env_XCG7t7AIHuO2SBA8667zNUiM",
    key: "my-api-key",
    ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    projectId: [
      "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
      "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
    ],
    target: [
      "production",
    ],
    type: "encrypted",
    updatedAt: 1609492210000,
    updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
  },
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  configVersion: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  configVersion: 394.2,
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  configVersion: 3352.56,
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  configChangeCount: 5674.46,
  configChanges: [],
  configVersion: 7857.27,
  projectId: "<id>",
  restore: false,
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  projectId: "<id>",
  ruleGroups: {},
  rulesetName: "<value>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  active: true,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  action: "disable",
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  source: "upgrade",
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  actorAccountId: "<id>",
  actorLogin: "<value>",
  destinationBranch: "<value>",
  destinationRepo: "<value>",
  installationId: "<id>",
  outcome: "success",
  provider: "cursor-origin",
  resultCommitSha: "<value>",
  sourceCommitSha: "<value>",
  sourceRepo: "<value>",
  usedAppToken: true,
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 5351.59,
    createdAt: 6647.66,
    deploymentSecret: "<value>",
    email: "Jaleel.Schimmel4@gmail.com",
    id: "<id>",
    platformVersion: 5686.21,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    updatedAt: 2605.99,
    username: "Nicholaus_Considine",
    version: "northstar",
  },
  userId: "<id>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  configurationId: "<id>",
  confirmedScopes: [
    "<value 1>",
  ],
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  integration: {
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  integration: {
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  configurations: [
    {
      configurationId: "<id>",
      integrationId: "<id>",
      integrationSlug: "<value>",
    },
  ],
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  billingPlanId: "<id>",
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: 2569.67,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [
    {
      command: "<value>",
    },
  ],
  queryCount: 368.08,
  queryType: "data-view",
  readonly: false,
  resourceId: "<id>",
  rolledBack: false,
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  commands: [
    {
      command: "<value>",
    },
  ],
  readonly: false,
  requestKind: "raw_commands",
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  keys: [
    "<value 1>",
    "<value 2>",
  ],
  requestKind: "get_keys_metadata",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  logDrainUrl: "https://energetic-ignorance.info/",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  logDrainUrl: "https://discrete-switch.name",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  login: "Karley36",
  provider: "chatgpt",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  provider: "github-limited",
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  periods: [
    {
      endDate: "<value>",
      percent: "<value>",
      periodNumber: 4098.45,
      startDate: "<value>",
    },
  ],
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  enabled: false,
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  group: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  group: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
  prev: {
    project: {},
  },
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {
      "key": "MEMBER",
    },
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  enabled: true,
  enforcedTeamIds: [
    "<value 1>",
  ],
  organizationId: "<id>",
  previousEnabled: false,
  trigger: "saml_updated",
  unenforcedTeamIds: [],
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  billingPlan: "enterprise",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "team",
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  next: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: false,
    enforcePercentage: 2619.07,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: true,
    enforcePercentage: 8901.95,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  connectSrcCount: 118.53,
  connectSrcOriginCount: 4962.21,
  deletedCount: 8990.7,
  headerCount: 9780.43,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 1324.27,
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://remorseful-availability.com/",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  projectId: "<id>",
  resourceUrl: "https://hidden-valuable.info",
  type: "script",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectId: "<id>",
  resourceUrl: "https://far-off-oil.com",
  type: "connectSrc",
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "thrifty-backburn.name",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  plan: "<value>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  current: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
  prev: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  previousEndpoint: {
    name: "<value>",
  },
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  directoryListing: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  prevProjectAnalytics: {
    disabledAt: 5212.63,
    enabledAt: 5092.01,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 5964.9,
    enabledAt: 790.36,
    id: "<id>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  action: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  enableAffectedProjectsDeployments: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  enableExternalRewriteCaching: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  productionDeploymentsFastLane: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "speed-insights-res",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  project: {
    id: "<id>",
    newConnectConfigurations: [],
    oldConnectConfigurations: [
      {
        buildsEnabled: true,
        connectConfigurationId: "<id>",
        createdAt: 7630.36,
        envId: "<id>",
        passive: false,
        updatedAt: 8968.35,
      },
    ],
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  action: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  autoAssignCustomDomains: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  enableFunctionsBeta: true,
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  next: {
    functionDefaultTimeout: 8969.75,
  },
  previous: {
    functionDefaultTimeout: 8587.9,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  next: {
    functionDefaultMemoryType: "<value>",
  },
  previous: {
    functionDefaultMemoryType: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
  previous: {
    functionDefaultRegions: [],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  next: {
    functionZeroConfigFailover: false,
  },
  previous: {
    functionZeroConfigFailover: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  next: {
    gitProvider: "gitlab",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  gitProvider: "bitbucket",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  onPullRequest: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  onCommit: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  createDeployments: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  requireVerifiedCommits: true,
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  gitCommitStatus: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  gitLFS: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  domain: "regal-coil.biz",
  gitBranch: null,
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 7828.21,
  target: "<value>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  domain: "dearest-unblinking.biz",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  domain: "unfinished-quart.org",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  domain: "mysterious-department.biz",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  projects: [
    {
      membershipCreatedAt: 5063.8,
      projectId: "<id>",
      role: "PROJECT_VIEWER",
    },
  ],
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  domain: "adolescent-cook.name",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 2305.86,
    role: "PROJECT_GUEST",
    uid: "<id>",
  },
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_DEVELOPER",
  },
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 2000.02,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  oldPasswordProtection: null,
  passwordProtection: {
    deploymentType: "preview",
  },
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  projectId: "<id>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  expiresAt: 4383.12,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  consent: "refused",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  next: {},
  previous: null,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  next: {
    issuerMode: "team",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  customerSupportCodeVisibility: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  gitForkProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  inheritDeploymentProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: false,
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  next: {
    skewProtectionBoundaryAt: 9734.41,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  next: {
    skewProtectionMaxAge: 1573.36,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  next: {
    skewProtectionAllowedDomains: [],
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  oldSsoProtection: "all",
  ssoProtection: {
    deploymentType: "preview",
  },
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  next: {
    project: {
      staticIps: {
        enabled: true,
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  addedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [],
  projectId: "<id>",
  projectName: "<value>",
  removedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  removedProviders: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [],
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  instances: 2152.14,
  url: "https://sweet-bowler.name/",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  email: "Alfredo_Lockman81@gmail.com",
  verified: false,
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  email: "Gardner86@gmail.com",
  verified: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  email: "Darius.Parisian@gmail.com",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  name: "<value>",
  uid: "<id>",
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  enabled: true,
  updatedAt: 7140.98,
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  max: 1224.11,
  min: 2132.95,
  scalingRules: {},
  url: "https://unfit-stranger.com/",
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Sam.Blanda@yahoo.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  email: "Ahmad.Grant-Stiedemann34@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  email: "Saige_OConner99@hotmail.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  previous: {
    sampleRatePercent: 561.94,
    spendLimitInDollars: 9910.49,
  },
  sampleRatePercent: 3360.4,
  spendLimitInDollars: 8985.68,
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  budget: {
    budgetItem: {
      createdAt: 252.7,
      fixedBudget: 8822.54,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        8822.88,
        2480.26,
      ],
      previousSpend: [],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  budget: {
    createdAt: 9719,
    fixedBudget: 6735.86,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      5085.38,
      8585.66,
      3864.69,
    ],
    previousSpend: [
      2409.45,
      6444.38,
      4810.74,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  budget: {
    createdAt: 7839.68,
    fixedBudget: 6111.86,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      7087.71,
    ],
    previousSpend: [
      9204.39,
      7050.42,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  budget: {
    createdAt: 8836.74,
    fixedBudget: 8742.23,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      229.43,
      9965.73,
    ],
    previousSpend: [
      1984.22,
      2147.05,
      5466.56,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  storeType: "redis",
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  store: {
    id: "<id>",
    type: "integration",
  },
  transferRequestCode: "<value>",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  store: {
    id: "<id>",
    type: "edge-config",
  },
  transferRequestCode: "<value>",
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  store: {
    id: "<id>",
    type: "edge-config",
  },
  transferRequestCode: "<value>",
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  id: "<id>",
  type: "redis",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  id: "<id>",
  type: "redis",
  locked: false,
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "public",
  },
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  amount: "303.78",
  currency: "Won",
  expiresAt: "1742871792210",
  trialCreditsIssuedAt: 6669.66,
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  eventId: "<id>",
  occurredAt: 7472.76,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  eventId: "<id>",
  occurredAt: 4465.45,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 3419.62,
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  githubScopeCount: 8514.55,
  githubScopes: [
    "<value 1>",
  ],
  mergedScopeCount: 3385.9,
  mergedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  planId: "<id>",
  requestedScopeCount: 8877.05,
  requestedScopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  next: "block",
  previous: "auto-approval",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  enabled: true,
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  enabled: true,
  environment: "preview",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  enabled: "on-force",
  environment: "preview",
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
  inviteIds: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Lambert80",
  },
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Braeden_Harber43",
  },
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  authorized: true,
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  enforced: false,
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  expiresAt: "1739678862125",
  maxUses: 2438.9,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  publicId: "<id>",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  nextConcurrentBuilds: 2614.2,
  previousConcurrentBuilds: 628.06,
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  plan: "pro",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  convertedFromTrial: true,
  invoiceId: "<id>",
  plan: "pro",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {};
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
  decision: "turn_off",
  version: "<value>",
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  consent: "granted",
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  deletedCount: 5203.54,
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  enabled: "default",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  domain: "dependent-tune-up.biz",
  ips: [],
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  tokenTypes: [],
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  exportId: "<id>",
  format: "<value>",
  from: 1499.1,
  to: 8739.93,
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  fileId: "<id>",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  recoveryCodes: 3986.93,
  totp: false,
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  username: "Dell.Kling44",
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  username: "Myra_Howell39",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  username: "Bernadette.Boyer96",
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  teamName: "<value>",
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  actorId: "<id>",
  actorType: "admin",
  enabled: false,
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  method: "webauthn",
  reason: "<value>",
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  allowedMethods: [],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  action: "remove-passkey",
  reason: "<value>",
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  next: {
    enabled: true,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  remaining: 9325.55,
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  enabled: true,
  totpVerified: false,
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  next: {
    enabled: true,
    totpVerified: true,
  },
  previous: {
    enabled: false,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  decision: {
    authoritative: true,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "lookup-error",
  },
  outcome: "linking-required",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
  email: "Pietro.Rogahn28@yahoo.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
  email: "Aditya24@yahoo.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  username: "Shanny.Bashirian",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [],
  repositoryName: "<value>",
};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  nextProjectCount: 561.23,
  previousProjectCount: 7009.75,
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  protectedProjectCount: 8193.14,
  protectionEnabled: false,
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  configuration: {
    id: "<id>",
  },
  peering: {
    accountId: "<id>",
    id: "<id>",
    region: "<value>",
    vpcId: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  tier: "plus",
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  id: "<id>",
  url: "https://feline-taro.net/",
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  chatId: "<id>",
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {
  chatId: "<id>",
  events: [
    {
      cacheCreationInputTokens: 8264.37,
      cacheReadInputTokens: 921.19,
      eventId: "<id>",
      inputTokens: 4741.19,
      modelId: "<id>",
      outputTokens: 6106.82,
      timestamp: "<value>",
      totalTokens: 9845.35,
    },
  ],
  inputTokens: 7026,
  messageId: "<id>",
  model: "Durango",
  outputTokens: 2364.09,
  timestamp: 4897.69,
  useCase: "<value>",
};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  appName: "<value>",
  atTTL: 6690.4,
  authMethod: "passkey",
  grantType: "authorization_code",
  scope: "<value>",
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 9217.16,
    issuerUrl: "https://curly-middle.name",
    name: null,
    permissions: [
      "<value 1>",
      "<value 2>",
    ],
    policyId: "<id>",
    resources: null,
    teamId: "<id>",
    updatedAt: 5795.29,
  },
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {
  after: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 4911.52,
    issuerUrl: "https://livid-permafrost.biz",
    name: null,
    permissions: [],
    policyId: "<id>",
    resources: null,
    teamId: "<id>",
    updatedAt: 9119.4,
  },
  before: {
    claims: [],
    clientId: "<id>",
    createdAt: 5631.38,
    issuerUrl: "https://definite-alert.org",
    name: "<value>",
    permissions: [
      "<value 1>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 1605.77,
  },
};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {
  origin: "otp",
  scope: "user",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
  actorTokenId: "<id>",
  deletedCount: 561.75,
};
```


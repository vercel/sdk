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
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [
    "<value 1>",
    "<value 2>",
  ],
  changed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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
  amount: "932.81",
  purchaseIntentId: "<id>",
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  privateModel: {
    slug: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  piiRedaction: {
    from: true,
    to: true,
  },
  moderationPolicyCount: 9928.25,
  policiesAdded: [
    "<value 1>",
    "<value 2>",
  ],
  policiesRemoved: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  policiesModified: [],
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  regions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  retention: {
    defaultMode: "until-requested",
    ceilingMode: "days",
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
  virtualModelConfig: {
    id: "<id>",
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
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  author: "<value>",
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
  project: {
    id: "<id>",
  },
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
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
  projectId: "<id>",
  aliasCount: 7038.08,
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  alias: "<value>",
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
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
const value: models.FortySix = {};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  projectName: "<value>",
  alias: "<value>",
  action: "removed",
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  alias: "<value>",
  deploymentUrl: "https://likable-privilege.name",
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {
  appName: "<value>",
  scopes: [],
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
  nextScopes: [],
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
  projectId: "<id>",
  attackModeEnabled: false,
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  invoiceId: "<id>",
  amount: 8618.72,
  refundReason: "<value>",
  lineItemCount: 7262.77,
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-payment-pending",
  amount: 2170.96,
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  paymentMethodId: "<id>",
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  changedFields: [
    "email",
  ],
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  planSlug: "<value>",
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  action: "mutate",
  data: {
    "key": "<value>",
  },
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  productAliases: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 5823,
  prevBulkRedirectsLimit: 1429.32,
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  custom: false,
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  id: "<id>",
  cns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  custom: false,
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  id: "<id>",
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  src: "<value>",
  dst: "<value>",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  id: "<id>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: false,
    autoAddReviewers: false,
  },
  next: {
    enabled: true,
    autoAddReviewers: true,
  },
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  slug: "<value>",
  documentId: "<id>",
  title: "<value>",
  fingerprint: "<value>",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  count: 4339.46,
  documents: [],
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  newName: "<value>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  githubLogin: "<value>",
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
  host: "aggressive-valuable.name",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  gitlabLogin: "<value>",
  gitlabUserId: 9175.11,
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 3075.73,
  prevPurchasedAmount: 6317.69,
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  metricName: "<value>",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  suffix: "<value>",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  suffix: "<value>",
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
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
    state: "Louisiana",
  },
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  url: "https://surprised-eyebrow.info",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  job: {
    headInfo: {
      owner: "<value>",
      ref: "<value>",
      repoUuid: "<id>",
      sha: "<value>",
      slug: "<value>",
    },
    name: "<value>",
    owner: "<value>",
    prId: 8074.56,
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    type: "bitbucket-now-comment",
    workspaceUuid: "<id>",
    provider: "bitbucket",
  },
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  url: "https://stupendous-deer.net",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  deployment: {
    name: "<value>",
    id: "<id>",
    meta: {},
    url: "https://yummy-sushi.net/",
  },
  deploymentId: "<id>",
  url: "https://feline-diversity.net/",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  projectName: "<value>",
  source: "<value>",
  ruleName: "gitSources",
  ruleProvenance: "team",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  deploymentId: "<id>",
  deploymentUrl: "https://wrathful-characterization.net",
  deploymentName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "blaring-ignorance.name",
  type: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  action: "add",
  initiator: "system",
  id: "<id>",
  domain: "good-thread.info",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "likely-bowler.net",
  type: "<value>",
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
  price: 3966.63,
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  name: "<value>",
  cdnEnabled: false,
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  name: "<value>",
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  domain: "silky-apparatus.net",
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  prevCustomNameservers: [],
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  domain: "radiant-scratch.com",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  domain: "ruddy-bidet.net",
  echMode: "enabled",
  previousEchMode: "disabled",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  domain: "grouchy-compromise.com",
  zone: true,
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  domain: "compassionate-drug.name",
  zone: false,
  initiator: "system",
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  name: "<value>",
  fromId: null,
  fromName: "<value>",
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: null,
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  domain: "deadly-republican.org",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  name: "<value>",
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
  drainUrl: "https://super-perp.biz/",
  drainName: "<value>",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  drainUrl: null,
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  path: "/etc/mail",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
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

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  email: "Blaze_Maggio@yahoo.com",
  name: "<value>",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Wallace32@hotmail.com",
  },
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  deploymentId: "<id>",
  deploymentUrl: "https://tragic-teriyaki.org",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
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

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  envId: "<id>",
  envKey: "<value>",
  provider: "<value>",
  organizationId: "<id>",
  repository: "<value>",
  target: [],
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
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

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 2195.44,
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  projectId: "<id>",
  restore: false,
  configVersion: 394.2,
  configChangeCount: 6017.69,
  configChanges: [
    {},
  ],
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  projectId: "<id>",
  previousOwnerId: "<id>",
  newOwnerId: "<id>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  action: "disable",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  source: "create",
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  provider: "bitbucket",
  actorLogin: "<value>",
  actorAccountId: "<id>",
  installationId: "<id>",
  usedAppToken: false,
  sourceRepo: "<value>",
  sourceCommitSha: null,
  destinationRepo: "<value>",
  destinationBranch: "<value>",
  resultCommitSha: "<value>",
  outcome: "failure",
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 6707.47,
    createdAt: 1499.39,
    deploymentSecret: "<value>",
    email: "Wilmer_Pfannerstill-Conn@hotmail.com",
    id: "<id>",
    platformVersion: null,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Israel.Shields-Dach",
    updatedAt: 5491.89,
    version: "northstar",
  },
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
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

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
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

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
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

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
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

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "data-edit",
  readonly: false,
  rolledBack: false,
  failedQueryIndex: 4848.7,
  errorCode: "<value>",
  queryCount: 5556.75,
  queries: [],
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "raw_commands",
  readonly: false,
  commands: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "list_keys",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
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

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_key_data",
  key: "<key>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  issuerId: "<id>",
  issuerName: "<value>",
  algorithm: "<value>",
  origin: "<value>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  logDrainUrl: null,
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  logDrainUrl: "https://similar-scale.biz",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  provider: "github",
  login: "Jacinthe.Kling75",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  provider: "gitlab",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  periods: [],
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  enabled: true,
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
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

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
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

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {},
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "enterprise",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  organizationId: "<id>",
  teamId: "<id>",
  teamName: "<value>",
  previousMode: "organization",
  mode: "organization",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 3805.39,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 8578.68,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 4266.19,
  scriptCount: 5511.54,
  connectSrcCount: 2619.07,
  connectSrcOriginCount: 198.23,
  headerCount: 9655.91,
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  projectId: "<id>",
  url: "https://perfumed-reward.name",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://oily-platypus.biz",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://remorseful-availability.com/",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  pattern: "<value>",
  justification: "<value>",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
  environment: "<value>",
  host: "impure-mallard.org",
  connectorId: "<id>",
  connectorType: "<value>",
  connectorService: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  plan: "<value>",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
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

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
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

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: true,
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 8158.98,
    enabledAt: 6092.21,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 6378.26,
    enabledAt: 1532.79,
  },
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  action: "updated",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: true,
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: true,
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: true,
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "analytics-page-views",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  team: {
    name: "<value>",
    id: "<id>",
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
    newConnectConfigurations: null,
  },
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: false,
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: false,
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  projectId: "<id>",
  enableFunctionsBeta: true,
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 3669.87,
  },
  next: {
    functionDefaultTimeout: 943.37,
  },
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
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

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
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

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: false,
  },
  next: {
    functionZeroConfigFailover: false,
  },
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: null,
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github-custom-host",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: false,
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: false,
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: null,
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: true,
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: true,
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
  },
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "electric-tooth.org",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 6876.64,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "realistic-heartbeat.org",
  target: "<value>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "valuable-hundred.biz",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "wicked-allegation.info",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  projects: [],
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "regal-coil.biz",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 1998.14,
  },
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  project: {
    name: "<value>",
    role: "PROJECT_VIEWER",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 2321.13,
  },
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
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
  passwordProtection: "prod_deployment_urls_and_all_previews",
  oldPasswordProtection: "all_except_custom_domains",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  projectId: "<id>",
  expiresAt: 9780.4,
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  projectName: "<value>",
  consent: "granted",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  projectAccountId: "<id>",
  deploymentId: "<id>",
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: true,
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: true,
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  projectId: "<id>",
  projectName: "<value>",
  inheritDeploymentProtection: true,
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: false,
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 9238.09,
  },
  previous: {},
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 3731.75,
  },
  previous: {},
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
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

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  ssoProtection: "preview",
  oldSsoProtection: {
    deploymentType: "all",
  },
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  projectId: "<id>",
  projectName: "<value>",
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
        enabled: false,
      },
    },
  },
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  addedProjects: [],
  removedProjects: [],
  addedProviders: [
    "<value 1>",
    "<value 2>",
  ],
  removedProviders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [],
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  instances: 5953.03,
  url: "https://distinct-hundred.net/",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  email: "Giovanna.Klocko13@gmail.com",
  verified: true,
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  email: "Abbigail.Wiza@gmail.com",
  verified: false,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  email: "Fritz.Quitzon10@yahoo.com",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  uid: "<id>",
  name: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  enabled: true,
  updatedAt: 366.67,
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  scalingRules: {},
  min: 2325.68,
  max: 8052.1,
  url: "https://gifted-joy.name",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  email: "Violet71@gmail.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  email: "Micah73@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  email: "Julian_Keeling30@hotmail.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  sampleRatePercent: 2132.95,
  spendLimitInDollars: 4164.01,
  previous: {
    sampleRatePercent: 8592.74,
    spendLimitInDollars: null,
  },
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 5979.92,
      previousSpend: [],
      notifiedAt: [],
      createdAt: 8732.33,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  budget: {
    type: "fixed",
    fixedBudget: 4639.91,
    previousSpend: [
      9236.49,
      740.38,
      3981.42,
    ],
    notifiedAt: [
      5064.17,
      5991.43,
      957.15,
    ],
    createdAt: 9909.23,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 2418.45,
    previousSpend: [],
    notifiedAt: [
      2860.37,
      8564.14,
      688.57,
    ],
    createdAt: 3486.86,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 7613.46,
    previousSpend: [
      2919.74,
      6495.37,
      8641.61,
    ],
    notifiedAt: [
      142.87,
      5903.77,
      7904.72,
    ],
    createdAt: 1392.73,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  storeType: "postgres",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "redis",
  },
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "postgres",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "redis",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  id: "<id>",
  type: "redis",
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  id: "<id>",
  type: "integration",
  locked: true,
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  next: {
    enabled: false,
    scope: "selected_repos",
    includeDrafts: true,
  },
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  trialCreditsIssuedAt: 3939.2,
  expiresAt: "1756306930266",
  amount: "262.34",
  currency: "Lek",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 9568.35,
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 3993.73,
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
    "<value 2>",
  ],
  requestedScopeCount: 1381.04,
  elevatedScopeCount: 3487.21,
  mergedScopeCount: 2260.21,
  githubScopeCount: 3567.29,
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  previous: "manual-approval",
  next: "manual-approval",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  previous: {},
  next: {},
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  enabled: true,
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: true,
  environment: "preview",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  environment: "preview",
  enabled: "off-force",
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  deletedCount: 2111.32,
  inviteIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Jodie68",
  },
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Abdullah_Ward34",
  },
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  authorized: false,
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  enforced: true,
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 1139.89,
  expiresAt: "1747598430364",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  publicId: "<id>",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  previousConcurrentBuilds: 6297.61,
  nextConcurrentBuilds: 8378.84,
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  plan: "hobby",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  invoiceId: "<id>",
  convertedFromTrial: false,
  plan: "hobby",
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {};
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
  decision: "turn_off",
  version: "<value>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  consent: "granted",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  deletedCount: 3515.72,
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  enabled: "on",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  enabled: false,
  scope: "log-drains",
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  domain: "jagged-juggernaut.biz",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  tokenTypes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  exportId: "<id>",
  from: 1854.09,
  to: 6103.99,
  format: "<value>",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {};
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  reason: "limits-exceeded",
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  totp: false,
  recoveryCodes: 7095.95,
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  username: "Annabelle97",
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  username: "Cloyd_Little",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  username: "Jada_Jacobson",
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  teamName: "<value>",
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  enabled: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  autoBlockPrevented: false,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  method: "webauthn",
  reason: "<value>",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  allowedMethods: [
    "recovery-code",
  ],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  action: "remove-passkey",
  reason: "<value>",
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
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

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  remaining: 1411.16,
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  mfa: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  enabled: false,
  totpVerified: true,
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
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

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  provider: "google",
  providerSubjectId: "<id>",
  outcome: "linking-required",
  decision: {
    authoritative: true,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "google",
  },
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  email: "Conner_Koelpin@hotmail.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  email: "Ardith.Green46@yahoo.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  username: "Duane.Zulauf81",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
  digest: "<value>",
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  public: true,
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
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

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  previousProjectCount: 5821.66,
  nextProjectCount: 2307.37,
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  protectionEnabled: true,
  protectedProjectCount: 889.74,
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {
  team: {
    name: "<value>",
    id: "<id>",
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

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  tier: "plus",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  id: "<id>",
  url: "https://oblong-lender.org",
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  chatId: "<id>",
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  model: "Malibu",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 6946.61,
  outputTokens: 6024.01,
  timestamp: 5675.22,
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

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  grantType: "urn:ietf:params:oauth:grant-type:device_code",
  appName: "<value>",
  atTTL: 2674.07,
  scope: "<value>",
  authMethod: "sms",
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  policy: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://gripping-citizen.info/",
    teamId: "<id>",
    name: "<value>",
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
    createdAt: 8478.68,
    updatedAt: 6439.94,
  },
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://sad-goat.biz",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    resources: null,
    createdAt: 2560.8,
    updatedAt: 6608.14,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://unripe-starboard.net/",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    resources: {
      projectIds: [],
    },
    createdAt: 2807.32,
    updatedAt: 2363.93,
  },
};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "chatgpt",
  scope: "team",
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  deletedCount: 6690.4,
  actorTokenId: "<id>",
};
```


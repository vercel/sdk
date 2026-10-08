# Payload


## Supported Types

### `models.Payload1`

```typescript
const value: models.Payload1 = {};
```

### `models.Payload2`

```typescript
const value: models.Payload2 = {
  enabled: true,
  slackConfigured: false,
};
```

### `models.Payload3`

```typescript
const value: models.Payload3 = {
  action: "unarchived",
  id: "<id>",
  projectId: "<id>",
  slug: "<value>",
};
```

### `models.Four`

```typescript
const value: models.Four = {
  action: "created",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
  slug: "<value>",
  state: "Louisiana",
};
```

### `models.Five`

```typescript
const value: models.Five = {
  action: "rotated",
  environment: "<value>",
};
```

### `models.Six`

```typescript
const value: models.Six = {
  action: "read",
  environment: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.Seven`

```typescript
const value: models.Seven = {
  policyId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.Eight`

```typescript
const value: models.Eight = {
  boardId: "<id>",
  operationId: "<id>",
};
```

### `models.Nine`

```typescript
const value: models.Nine = {
  boardId: "<id>",
  operationId: "<id>",
  spaceId: "<id>",
};
```

### `models.Ten`

```typescript
const value: models.Ten = {
  boardId: "<id>",
  fields: [
    "<value 1>",
  ],
  operationId: "<id>",
  spaceId: "<id>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  boardId: "<id>",
  operationId: "<id>",
  visibility: "private",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  operationId: "<id>",
  schemaId: "<id>",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  teamId: "<id>",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  blockCode: "<value>",
  reason: "<value>",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  fromPlan: "pro",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "pro",
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
  member: {
    id: "<id>",
    kind: "user",
  },
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "enable",
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  change: "disable",
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  change: "enable",
  scopeType: "api-key",
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  change: "set",
  scopeType: "team",
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  changed: [],
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  removed: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  enabled: true,
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  amount: "80.09",
  purchaseIntentId: "<id>",
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [],
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  moderationPolicyCount: 2639.43,
  piiRedaction: {
    from: false,
    to: true,
  },
  policiesAdded: [],
  policiesModified: [
    "<value 1>",
  ],
  policiesRemoved: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  regions: [
    "<value 1>",
  ],
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  retention: {
    ceilingMode: "days",
    defaultMode: "days",
  },
};
```

### `models.Forty`

```typescript
const value: models.Forty = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  author: "<value>",
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
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
  aliasCount: 3179.56,
  projectId: "<id>",
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  alias: "<value>",
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
  action: "removed",
  alias: "<value>",
  projectName: "<value>",
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  alias: "<value>",
  deploymentUrl: "https://optimal-litter.name/",
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  appName: "<value>",
  scopes: [
    "email",
  ],
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  appName: "<value>",
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  appName: "<value>",
  nextScopes: [
    "offline_access",
  ],
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  appName: "<value>",
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  appName: "<value>",
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  appName: "<value>",
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  appName: "<value>",
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  attackModeEnabled: false,
  projectId: "<id>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  autoExposeSystemEnvs: false,
  projectName: "<value>",
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  amount: 5049.43,
  invoiceId: "<id>",
  lineItemCount: 3699.42,
  refundReason: "<value>",
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  amount: 9674.14,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-payment-pending",
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  subscriptionId: "<id>",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  paymentMethodId: "<id>",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  changedFields: [
    "tax",
  ],
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  planSlug: "<value>",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  action: "resume_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  action: "mutate",
  data: {
    "key": "<value>",
  },
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  productAliases: [],
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  bulkRedirectsLimit: 3203.03,
  prevBulkRedirectsLimit: 1198.73,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  custom: false,
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  cns: [],
  custom: true,
  id: "<id>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  id: "<id>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  dst: "<value>",
  src: "<value>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  id: "<id>",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  next: {
    autoAddReviewers: true,
    enabled: false,
  },
  previous: {
    autoAddReviewers: false,
    enabled: false,
  },
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  count: 7567.04,
  documents: [
    {
      documentId: "<id>",
      fingerprint: "<value>",
      slug: "<value>",
      title: "<value>",
    },
  ],
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
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

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
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

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
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

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
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

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  githubLogin: "<value>",
  host: "sad-produce.info",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  gitlabLogin: "<value>",
  gitlabUserId: 1236.74,
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  prevPurchasedAmount: 6865.5,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 9937.79,
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  metricName: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  suffix: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  suffix: "<value>",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  oldPasswordProtection: {
    deploymentType: "all",
  },
  passwordProtection: {
    deploymentType: "all",
  },
  scope: "team",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  oldSsoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  scope: "team",
  ssoProtection: null,
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  hookName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Texas",
  },
  project: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  checkId: "<id>",
  checkName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  url: "https://messy-providence.info/",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
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
    provider: "bitbucket",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    type: "bitbucket-push",
    workspaceUuid: "<id>",
  },
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  url: "https://warped-turret.info/",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  gitCommitterName: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  sha: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
    url: "https://damp-fisherman.name",
  },
  deploymentId: "<id>",
  url: "https://spiffy-illusion.name/",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  projectName: "<value>",
  ruleName: "gitSources",
  ruleProvenance: "default",
  source: "<value>",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  mode: "none",
  previousMode: "none",
  scope: "organization",
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  mode: "all",
  previousMode: "all",
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  deploymentId: "<id>",
  deploymentName: null,
  deploymentUrl: "https://amazing-privilege.name/",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  domain: "near-requirement.org",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  action: "add",
  domain: "simplistic-statue.name",
  id: "<id>",
  initiator: "system",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  domain: "rowdy-widow.biz",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
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
  price: 6417.25,
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  cdnEnabled: true,
  name: "<value>",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  name: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  name: "<value>",
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
  ],
  previousServiceType: "<value>",
  serviceType: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  customNameservers: [
    "<value 1>",
  ],
  domain: "some-tool.net",
  prevCustomNameservers: [],
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  domain: "showy-knickers.net",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  domain: "aged-majority.org",
  echMode: "disabled",
  previousEchMode: "auto",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  domain: "frivolous-dredger.org",
  zone: false,
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  domain: "concerned-jump.com",
  initiator: "system",
  zone: false,
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  fromId: "<id>",
  fromName: null,
  name: "<value>",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  domain: "valuable-vista.info",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  name: "<value>",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  name: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  drainName: "<value>",
  drainUrl: "https://good-fax.biz",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  drainUrl: "https://unsteady-travel.biz",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  path: "/usr/lib",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
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

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  email: "Hazle94@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  previousRule: {
    email: "Terrence.Wisozk@yahoo.com",
  },
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  deploymentId: "<id>",
  deploymentUrl: "https://unhappy-sonata.org/",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "secret",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
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

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [],
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
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

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  configVersion: 7329.81,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  configVersion: 9573.49,
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  configChangeCount: 8239.46,
  configChanges: [],
  configVersion: 2569.67,
  projectId: "<id>",
  restore: false,
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  projectId: "<id>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  active: false,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  consumerProjectId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  action: "disable",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  source: "create",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  actorAccountId: "<id>",
  actorLogin: null,
  destinationBranch: "<value>",
  destinationRepo: "<value>",
  installationId: "<id>",
  outcome: "failure",
  provider: "gitlab",
  resultCommitSha: "<value>",
  sourceCommitSha: "<value>",
  sourceRepo: "<value>",
  usedAppToken: false,
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    id: "<id>",
    username: "Neal76",
  },
  userId: "<id>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
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

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
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

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
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

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
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

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  billingPlanId: "<id>",
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: 8945.65,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [],
  queryCount: 8471.5,
  queryType: "data-view",
  readonly: true,
  resourceId: "<id>",
  rolledBack: false,
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
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
  readonly: true,
  requestKind: "raw_commands",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  keys: [],
  requestKind: "get_keys_metadata",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  logDrainUrl: "https://voluminous-jungle.com/",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  logDrainUrl: "https://bustling-junior.com/",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  login: "Hyman.Bashirian0",
  provider: "github",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  provider: "github-custom-host",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  invoiceCollection: false,
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  periods: [],
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  enabled: true,
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
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

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
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

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  avatar: "https://loremflickr.com/1040/2481?lock=1732728078952810",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [],
    teamRoles: [],
    teams: {
      "key": {
        teamRoles: [],
      },
    },
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  copiedDomains: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  enabledOrganizationEmu: true,
  enabledTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  enabled: false,
  enforcedTeamIds: [],
  organizationId: "<id>",
  previousEnabled: false,
  trigger: "saml_updated",
  unenforcedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  enabled: true,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  billingPlan: "platform",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: false,
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "organization",
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: true,
    enforcePercentage: 6832.99,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: true,
    enforcePercentage: 680.53,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  connectSrcCount: 1145.17,
  connectSrcOriginCount: 1294.18,
  deletedCount: 2103.59,
  headerCount: 5830.26,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 3845.32,
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://lumbering-maintainer.biz/",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
  resourceUrl: "https://enlightened-instruction.biz",
  type: "script",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  resourceUrl: "https://productive-exploration.biz/",
  type: "connectSrc",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "flustered-heartache.net",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  plan: "<value>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  previousTeamSuffix: "<value>",
  projectCount: 1262.44,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
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

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
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

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  directoryListing: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  prevProjectAnalytics: {
    disabledAt: 8556.4,
    enabledAt: 9410.09,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 9634.92,
    enabledAt: 2058.8,
    id: "<id>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  action: "updated",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  enableExternalRewriteCaching: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  productionDeploymentsFastLane: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "observability-edge-requests",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
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

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  autoAssignCustomDomains: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  enableFunctionsBeta: false,
  projectId: "<id>",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  next: {
    functionDefaultTimeout: 104.44,
  },
  previous: {
    functionDefaultTimeout: 5445.51,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
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

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
  previous: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  next: {
    functionZeroConfigFailover: true,
  },
  previous: {
    functionZeroConfigFailover: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  next: {
    gitProvider: "gitlab",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  gitProvider: "github",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  onPullRequest: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  onCommit: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  createDeployments: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  requireVerifiedCommits: true,
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  gitCommitStatus: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  gitLFS: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  domain: "juicy-testimonial.net",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 80.67,
  target: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  domain: "inborn-basket.info",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  domain: "great-finding.org",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  domain: "whimsical-assist.org",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  projects: [],
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  domain: "vague-disposer.org",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 7281.36,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_DEVELOPER",
  },
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 6671.86,
    role: "PROJECT_GUEST",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
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
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: "prod_deployment_urls_and_all_previews",
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
  expiresAt: 1859.92,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  consent: "granted",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  next: {},
  previous: null,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  next: {
    issuerMode: "global",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  customerSupportCodeVisibility: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  gitForkProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  inheritDeploymentProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  next: {
    skewProtectionBoundaryAt: 4639.91,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  next: {
    skewProtectionMaxAge: 2418.45,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  oldSsoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  ssoProtection: "all_except_custom_domains",
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  addedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [
    "<value 1>",
    "<value 2>",
  ],
  projectId: "<id>",
  projectName: "<value>",
  removedProjects: [],
  removedProviders: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
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

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  email: "Maddison_Auer@yahoo.com",
  name: "<value>",
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  instances: 9568.35,
  url: "https://stark-license.com",
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  email: "Tanner_Marquardt@yahoo.com",
  verified: true,
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  email: "Sophia_Wolf@yahoo.com",
  verified: false,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  email: "Virginia46@yahoo.com",
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  name: "<value>",
  uid: "<id>",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  enabled: true,
  updatedAt: 3419.62,
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  max: 3892.1,
  min: 5666.62,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://unaware-cop-out.com",
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Nico.Weimann@gmail.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  email: "Oswaldo_Kohler4@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  email: "Hailey17@hotmail.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  previous: {
    sampleRatePercent: 4846.84,
    spendLimitInDollars: 8442.75,
  },
  sampleRatePercent: 1007.33,
  spendLimitInDollars: null,
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  budget: {
    budgetItem: {
      createdAt: 4036.1,
      fixedBudget: 5656.83,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        1878.33,
        5718.47,
      ],
      previousSpend: [
        4780.7,
        3003.58,
        3026.59,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  budget: {
    createdAt: 5059.93,
    fixedBudget: 4530.53,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      6882.26,
      7384.41,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  budget: {
    createdAt: 30.02,
    fixedBudget: 9038.09,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3499.84,
      3117.39,
    ],
    previousSpend: [
      997.15,
      195.22,
      7361.82,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  budget: {
    createdAt: 8744.33,
    fixedBudget: 1045.13,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      3995.1,
    ],
    previousSpend: [
      3792.89,
      1134.98,
      2270.37,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  storeType: "redis",
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  store: {
    id: "<id>",
    type: "integration",
  },
  transferRequestCode: "<value>",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  store: {
    id: "<id>",
    type: "blob",
  },
  transferRequestCode: "<value>",
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  store: {
    id: "<id>",
    type: "blob",
  },
  transferRequestCode: "<value>",
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  id: "<id>",
  type: "postgres",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  id: "<id>",
  type: "edge-config",
  locked: true,
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "private",
  },
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  amount: "261.42",
  currency: "Azerbaijanian Manat",
  expiresAt: "1754230949575",
  trialCreditsIssuedAt: 508.72,
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  eventId: "<id>",
  occurredAt: 9916.46,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  eventId: "<id>",
  occurredAt: 784.77,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 9264.11,
  elevatedScopes: [
    "<value 1>",
  ],
  githubScopeCount: 1808.34,
  githubScopes: [
    "<value 1>",
    "<value 2>",
  ],
  mergedScopeCount: 9745.69,
  mergedScopes: [
    "<value 1>",
  ],
  planId: "<id>",
  requestedScopeCount: 8872.14,
  requestedScopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  next: "manual-approval",
  previous: null,
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  enabled: false,
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  enabled: true,
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  enabled: true,
  environment: "production",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  enabled: "default-force",
  environment: "production",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  deletedCount: 1517.8,
  inviteIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  teamName: "<value>",
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Selina_Cronin",
  },
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Annabelle97",
  },
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  requestedTeamName: "<value>",
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  previousRole: "<value>",
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  authorized: true,
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  enforced: true,
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  expiresAt: "1758934606610",
  maxUses: 3301.31,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  publicId: "<id>",
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  nextConcurrentBuilds: 6382.62,
  previousConcurrentBuilds: 4742.66,
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  plan: "pro",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  convertedFromTrial: false,
  invoiceId: "<id>",
  plan: "enterprise",
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  decision: "turn_off",
  version: "<value>",
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  consent: "granted",
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  deletedCount: 1398.07,
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  enabled: "on",
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  domain: "flickering-ravioli.org",
  ips: [],
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  tokenTypes: [],
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  exportId: "<id>",
  format: "<value>",
  from: 1201.66,
  to: 8697.25,
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
  fileId: "<id>",
};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  organizationId: "<id>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  recoveryCodes: 9074.28,
  totp: true,
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {
  username: "Clark.Gusikowski",
};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  username: "Franco_Quigley",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  username: "Harmony_Hilpert85",
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  teamName: "<value>",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  actorId: "<id>",
  actorType: "admin",
  enabled: false,
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  method: "recovery-code",
  reason: "<value>",
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  allowedMethods: [],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {
  action: "remove-passkey",
  reason: "<value>",
};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
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

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  remaining: 8577.16,
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  mfa: {
    enabled: false,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {
  enabled: false,
  totpVerified: true,
};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {
  next: {
    enabled: false,
    totpVerified: false,
  },
  previous: {
    enabled: false,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  decision: {
    authoritative: true,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "google",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
  email: "Heber.Zulauf@gmail.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndFiftyFive`

```typescript
const value: models.FourHundredAndFiftyFive = {
  email: "Palma_Kuhn@hotmail.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFiftySix`

```typescript
const value: models.FourHundredAndFiftySix = {
  username: "Ignatius_Feest",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFiftySeven`

```typescript
const value: models.FourHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftyEight`

```typescript
const value: models.FourHundredAndFiftyEight = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftyNine`

```typescript
const value: models.FourHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixty`

```typescript
const value: models.FourHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndSixtyOne`

```typescript
const value: models.FourHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndSixtyTwo`

```typescript
const value: models.FourHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  public: true,
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixtyThree`

```typescript
const value: models.FourHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [],
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixtyFour`

```typescript
const value: models.FourHundredAndSixtyFour = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndSixtyFive`

```typescript
const value: models.FourHundredAndSixtyFive = {
  nextProjectCount: null,
  previousProjectCount: 7142.96,
};
```

### `models.FourHundredAndSixtySix`

```typescript
const value: models.FourHundredAndSixtySix = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndSixtySeven`

```typescript
const value: models.FourHundredAndSixtySeven = {
  protectedProjectCount: 2136.74,
  protectionEnabled: false,
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.FourHundredAndSixtyEight`

```typescript
const value: models.FourHundredAndSixtyEight = {
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

### `models.FourHundredAndSixtyNine`

```typescript
const value: models.FourHundredAndSixtyNine = {
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

### `models.FourHundredAndSeventy`

```typescript
const value: models.FourHundredAndSeventy = {
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

### `models.FourHundredAndSeventyOne`

```typescript
const value: models.FourHundredAndSeventyOne = {
  tier: "pro",
};
```

### `models.FourHundredAndSeventyTwo`

```typescript
const value: models.FourHundredAndSeventyTwo = {
  id: "<id>",
  url: "https://complicated-shipper.name",
};
```

### `models.FourHundredAndSeventyThree`

```typescript
const value: models.FourHundredAndSeventyThree = {
  chatId: "<id>",
};
```

### `models.FourHundredAndSeventyFour`

```typescript
const value: models.FourHundredAndSeventyFour = {
  chatId: "<id>",
  events: [],
  inputTokens: 8081.84,
  messageId: "<id>",
  model: "Model S",
  outputTokens: 1062.02,
  timestamp: 4041.96,
  useCase: "<value>",
};
```

### `models.FourHundredAndSeventyFive`

```typescript
const value: models.FourHundredAndSeventyFive = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndSeventySix`

```typescript
const value: models.FourHundredAndSeventySix = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndSeventySeven`

```typescript
const value: models.FourHundredAndSeventySeven = {
  appName: "<value>",
  atTTL: 3041.21,
  authMethod: "gitlab",
  grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
  scope: "<value>",
};
```

### `models.FourHundredAndSeventyEight`

```typescript
const value: models.FourHundredAndSeventyEight = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 9380.44,
    issuerUrl: "https://new-encouragement.org/",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: {
      projectIds: [],
    },
    teamId: "<id>",
    updatedAt: 49.25,
  },
};
```

### `models.FourHundredAndSeventyNine`

```typescript
const value: models.FourHundredAndSeventyNine = {
  after: {
    claims: [],
    clientId: "<id>",
    createdAt: 4800.11,
    issuerUrl: "https://those-coin.com/",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: null,
    teamId: "<id>",
    updatedAt: 9556.18,
  },
  before: {
    claims: [],
    clientId: "<id>",
    createdAt: 1375.74,
    issuerUrl: "https://lasting-mobility.org/",
    name: "<value>",
    permissions: [
      "<value 1>",
      "<value 2>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 3565.34,
  },
};
```

### `models.FourHundredAndEighty`

```typescript
const value: models.FourHundredAndEighty = {
  origin: "emu",
  scope: "team",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FourHundredAndEightyOne`

```typescript
const value: models.FourHundredAndEightyOne = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FourHundredAndEightyTwo`

```typescript
const value: models.FourHundredAndEightyTwo = {
  actorTokenId: "<id>",
  deletedCount: 9462.23,
};
```


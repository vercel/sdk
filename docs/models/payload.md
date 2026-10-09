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
const value: models.OneHundredAndSixtyEight = {};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  deploymentId: "<id>",
  deploymentUrl: "https://petty-pillbox.com",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "config",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
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

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [],
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
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
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  configVersion: "<value>",
  projectId: "<id>",
  projectName: "<value>",
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
  configVersion: 4319.56,
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  configChangeCount: 8094.1,
  configChanges: [
    {},
  ],
  configVersion: 5975.39,
  projectId: "<id>",
  restore: false,
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  projectId: "<id>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  active: false,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  consumerProjectId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  action: "disable",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  source: "upgrade",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  actorAccountId: "<id>",
  actorLogin: "<value>",
  destinationBranch: null,
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

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    id: "<id>",
    username: "Jacinthe.Kling75",
  },
  userId: "<id>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  configurationId: "<id>",
  confirmedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
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
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
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

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  configurations: [],
  ownerId: "<id>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  billingPlanId: "<id>",
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
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: null,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [],
  queryCount: 3162.01,
  queryType: "user",
  readonly: false,
  resourceId: "<id>",
  rolledBack: true,
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
  commands: [],
  readonly: true,
  requestKind: "raw_commands",
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
  requestKind: "list_keys",
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
  keys: [],
  requestKind: "get_keys_metadata",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
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
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  logDrainUrl: "https://mad-asset.name/",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  logDrainUrl: "https://talkative-angle.com/",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  login: "Joanie_Hahn71",
  provider: "apple",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  provider: "google",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  invoiceCollection: true,
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  periods: [],
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  enabled: false,
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
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
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
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

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  avatar: "https://picsum.photos/seed/AVL3bhc59v/2183/3737",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [
      "OrgAdmin",
    ],
    teamRoles: [
      "SECURITY",
    ],
    teams: {},
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  copiedDomains: [
    "<value 1>",
  ],
  enabledOrganizationEmu: true,
  enabledTeamIds: [],
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  enabled: false,
  enforcedTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
  organizationId: "<id>",
  previousEnabled: false,
  trigger: "team_removed",
  unenforcedTeamIds: [],
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  enabled: false,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  billingPlan: "platform",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: false,
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  mode: "organization",
  organizationId: "<id>",
  previousMode: "organization",
  teamId: "<id>",
  teamName: "<value>",
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
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 5092.01,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: true,
    enforcePercentage: 3717.34,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  connectSrcCount: 6510.99,
  connectSrcOriginCount: 2303.21,
  deletedCount: 4704.69,
  headerCount: 2609.34,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 4261.79,
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://troubled-honesty.info/",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
  resourceUrl: "https://productive-exploration.biz/",
  type: "script",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  projectId: "<id>",
  resourceUrl: "https://deficient-tomb.info",
  type: "connectSrc",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "wrong-overload.com",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  plan: "<value>",
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  previousTeamSuffix: "<value>",
  projectCount: 473.99,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  endpoint: {
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

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
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

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  directoryListing: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  prevProjectAnalytics: {
    disabledAt: 3382.62,
    enabledAt: 8587.9,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 2535.3,
    enabledAt: 5022.41,
    id: "<id>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  action: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  enableExternalRewriteCaching: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  productionDeploymentsFastLane: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: false,
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  projectId: "<id>",
  projectName: "<value>",
  widget: null,
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  project: {
    id: "<id>",
    newConnectConfigurations: [
      {
        buildsEnabled: true,
        connectConfigurationId: "<id>",
        createdAt: 4721.36,
        envId: "production",
        passive: true,
        updatedAt: 452.34,
      },
    ],
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

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  action: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  autoAssignCustomDomains: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  enableFunctionsBeta: true,
  projectId: "<id>",
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  next: {
    functionDefaultTimeout: 3866.64,
  },
  previous: {
    functionDefaultTimeout: 3100.71,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
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

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {
    functionDefaultRegions: [],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
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

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  next: {
    gitProvider: "vercel",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  onPullRequest: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  onCommit: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  disableRepositoryDispatchEvents: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  createDeployments: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  requireVerifiedCommits: false,
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  gitCommitStatus: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  gitLFS: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  consolidatedGitCommitStatus: {
    enabled: false,
    propagateFailures: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  domain: "great-finding.org",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 8926.17,
  target: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  domain: "whimsical-assist.org",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  domain: "esteemed-partridge.info",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  domain: "vague-disposer.org",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  projects: [],
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  domain: "gripping-coliseum.name",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 7424.31,
    role: "PROJECT_GUEST",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_DEVELOPER",
  },
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 9734.41,
    role: "PROJECT_GUEST",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  oldPasswordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  passwordProtection: "preview",
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
  expiresAt: 1856.3,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  consent: "granted",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
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
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  next: {
    issuerMode: "global",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  customerSupportCodeVisibility: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  gitForkProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  inheritDeploymentProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  next: {
    skewProtectionBoundaryAt: 7613.46,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  next: {
    skewProtectionMaxAge: 9724.59,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
    ],
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  oldSsoProtection: "preview",
  ssoProtection: "prod_deployment_urls_and_all_previews",
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
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

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  addedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [
    "<value 1>",
  ],
  projectId: "<id>",
  projectName: "<value>",
  removedProjects: [],
  removedProviders: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
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

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  email: "Tanner_Marquardt@yahoo.com",
  name: "<value>",
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  instances: 5324.3,
  url: "https://excellent-waist.name",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  email: "Virginia46@yahoo.com",
  verified: false,
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  email: "Jamarcus.Orn@gmail.com",
  verified: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  email: "Tevin36@hotmail.com",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  name: "<value>",
  uid: "<id>",
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  enabled: true,
  updatedAt: 5666.62,
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  max: 2111.32,
  min: 7544.95,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://inborn-going.name",
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Hailey17@hotmail.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  email: "Jazmyn.Sporer10@hotmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  email: "River_Reilly@hotmail.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  previous: {
    sampleRatePercent: 4530.53,
    spendLimitInDollars: 5244.97,
  },
  sampleRatePercent: 7384.41,
  spendLimitInDollars: 7383.61,
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  budget: {
    budgetItem: {
      createdAt: 8268.61,
      fixedBudget: 5657.02,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        8412.68,
        4890.05,
        3038.72,
      ],
      previousSpend: [
        8456.5,
      ],
      teamId: "<id>",
      type: "fixed",
    },
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
const value: models.ThreeHundredAndSeventyThree = {
  budget: {
    createdAt: 3886.81,
    fixedBudget: 7963.8,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      2330.43,
    ],
    previousSpend: [
      2147.78,
      4727.5,
      9415.62,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  budget: {
    createdAt: 9936.29,
    fixedBudget: 4319.44,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3582.68,
      7438.41,
      9479.07,
    ],
    previousSpend: [
      9021.58,
      9327.65,
      3024.35,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  storeType: "postgres",
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
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  store: {
    id: "<id>",
    type: "postgres",
  },
  transferRequestCode: "<value>",
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  store: {
    id: "<id>",
    type: "postgres",
  },
  transferRequestCode: "<value>",
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  id: "<id>",
  type: "edge-config",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  id: "<id>",
  type: "blob",
  locked: true,
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "private",
  },
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  amount: "78.47",
  currency: "Vatu",
  expiresAt: "1745430060138",
  trialCreditsIssuedAt: 1808.34,
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  eventId: "<id>",
  occurredAt: 1452.37,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  eventId: "<id>",
  occurredAt: 3515.72,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 7365.73,
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  githubScopeCount: 4195,
  githubScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopeCount: 3223.35,
  mergedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  planId: "<id>",
  requestedScopeCount: 5478.32,
  requestedScopes: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  next: "block",
  previous: null,
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
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
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  enabled: true,
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  enabled: true,
  environment: "production",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  enabled: "default",
  environment: "production",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  deletedCount: 1390.5,
  inviteIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  teamName: "<value>",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  teamName: "<value>",
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Cloyd_Little",
  },
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Jada_Jacobson",
  },
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  requestedTeamName: "<value>",
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  previousRole: "<value>",
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  authorized: false,
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  enforced: true,
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  expiresAt: "1755817818680",
  maxUses: 4742.66,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  publicId: "<id>",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  nextConcurrentBuilds: 5326.88,
  previousConcurrentBuilds: 2602.16,
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  plan: "pro",
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  convertedFromTrial: false,
  invoiceId: "<id>",
  plan: "pro",
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  decision: "turn_off",
  version: "<value>",
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  consent: "granted",
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  deletedCount: 7890.55,
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  enabled: "off",
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  enabled: true,
  scope: "log-drains",
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  domain: "cloudy-summer.net",
  ips: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
  tokenTypes: [
    "<value 1>",
  ],
};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
  exportId: "<id>",
  format: "<value>",
  from: 5567.63,
  to: 113.95,
};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  fileId: "<id>",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  organizationId: "<id>",
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  recoveryCodes: 3637.14,
  totp: false,
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
  username: "Evelyn_Ward15",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  username: "Reed_Lebsack49",
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  teamName: "<value>",
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  actorId: "<id>",
  actorType: "admin",
  enabled: true,
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {
  method: "webauthn",
  reason: "<value>",
};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  allowedMethods: [],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  action: "remove-passkey",
  reason: "<value>",
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  next: {
    enabled: false,
    totpVerified: false,
  },
  previous: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  remaining: 6211.08,
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {
  mfa: {
    enabled: false,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  enabled: true,
  totpVerified: false,
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
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

### `models.FourHundredAndFiftyFive`

```typescript
const value: models.FourHundredAndFiftyFive = {
  decision: {
    authoritative: false,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "non-google",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndFiftySix`

```typescript
const value: models.FourHundredAndFiftySix = {
  email: "Luther_Stokes@yahoo.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndFiftySeven`

```typescript
const value: models.FourHundredAndFiftySeven = {
  email: "Diana_Kshlerin49@gmail.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFiftyEight`

```typescript
const value: models.FourHundredAndFiftyEight = {
  username: "Caleb_Satterfield",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFiftyNine`

```typescript
const value: models.FourHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixty`

```typescript
const value: models.FourHundredAndSixty = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixtyOne`

```typescript
const value: models.FourHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixtyTwo`

```typescript
const value: models.FourHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndSixtyThree`

```typescript
const value: models.FourHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndSixtyFour`

```typescript
const value: models.FourHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixtyFive`

```typescript
const value: models.FourHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [],
  repositoryName: "<value>",
};
```

### `models.FourHundredAndSixtySix`

```typescript
const value: models.FourHundredAndSixtySix = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndSixtySeven`

```typescript
const value: models.FourHundredAndSixtySeven = {
  nextProjectCount: 5943.64,
  previousProjectCount: 4821.72,
};
```

### `models.FourHundredAndSixtyEight`

```typescript
const value: models.FourHundredAndSixtyEight = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndSixtyNine`

```typescript
const value: models.FourHundredAndSixtyNine = {
  protectedProjectCount: 9342.28,
  protectionEnabled: false,
  vulnerabilities: [],
};
```

### `models.FourHundredAndSeventy`

```typescript
const value: models.FourHundredAndSeventy = {
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

### `models.FourHundredAndSeventyOne`

```typescript
const value: models.FourHundredAndSeventyOne = {
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

### `models.FourHundredAndSeventyTwo`

```typescript
const value: models.FourHundredAndSeventyTwo = {
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

### `models.FourHundredAndSeventyThree`

```typescript
const value: models.FourHundredAndSeventyThree = {
  tier: "pro",
};
```

### `models.FourHundredAndSeventyFour`

```typescript
const value: models.FourHundredAndSeventyFour = {
  id: "<id>",
  url: "https://striking-premise.com/",
};
```

### `models.FourHundredAndSeventyFive`

```typescript
const value: models.FourHundredAndSeventyFive = {
  chatId: "<id>",
};
```

### `models.FourHundredAndSeventySix`

```typescript
const value: models.FourHundredAndSeventySix = {
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
  inputTokens: 727,
  messageId: "<id>",
  model: "CTS",
  outputTokens: 9784.59,
  timestamp: 457.53,
  useCase: "<value>",
};
```

### `models.FourHundredAndSeventySeven`

```typescript
const value: models.FourHundredAndSeventySeven = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndSeventyEight`

```typescript
const value: models.FourHundredAndSeventyEight = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndSeventyNine`

```typescript
const value: models.FourHundredAndSeventyNine = {
  appName: "<value>",
  atTTL: 3465.25,
  authMethod: "gitlab",
  grantType: "authorization_code",
  scope: "<value>",
};
```

### `models.FourHundredAndEighty`

```typescript
const value: models.FourHundredAndEighty = {
  policy: {
    claims: [],
    clientId: "<id>",
    createdAt: 3830.82,
    issuerUrl: "https://spiffy-fun.org",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 4858.56,
  },
};
```

### `models.FourHundredAndEightyOne`

```typescript
const value: models.FourHundredAndEightyOne = {
  after: {
    claims: [],
    clientId: "<id>",
    createdAt: 9501.7,
    issuerUrl: "https://impressive-interior.net",
    name: "<value>",
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 1242.16,
  },
  before: {
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
    clientId: "<id>",
    createdAt: 4106.7,
    issuerUrl: "https://flustered-space.org",
    name: "<value>",
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 5341.35,
  },
};
```

### `models.FourHundredAndEightyTwo`

```typescript
const value: models.FourHundredAndEightyTwo = {
  origin: "token-exchange-oidc",
  scope: "project",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FourHundredAndEightyThree`

```typescript
const value: models.FourHundredAndEightyThree = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FourHundredAndEightyFour`

```typescript
const value: models.FourHundredAndEightyFour = {
  actorTokenId: "<id>",
  deletedCount: 9180.47,
};
```


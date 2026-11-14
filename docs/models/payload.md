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
  expiresAt: "1744743030546",
  grantId: "<id>",
  namedSandboxId: "<id>",
  permission: "<value>",
  projectId: "<id>",
  repositoryId: "<id>",
  sandboxId: "<id>",
};
```

### `models.Nine`

```typescript
const value: models.Nine = {
  namespace: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  scheduleId: "<id>",
  scheduleName: "<value>",
};
```

### `models.Ten`

```typescript
const value: models.Ten = {
  namespace: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  scheduleId: "<id>",
  scheduleName: "<value>",
  updatedFields: [],
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  boardId: "<id>",
  grantId: "<id>",
  operationId: "<id>",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  boardId: "<id>",
  operationId: "<id>",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  boardId: "<id>",
  environment: "<value>",
  name: "<value>",
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  boardId: "<id>",
  channelId: "<id>",
  operationId: "<id>",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  boardId: "<id>",
  channelId: "<id>",
  environment: "<value>",
  name: "<value>",
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  boardId: "<id>",
  channelId: "<id>",
  fields: [
    "<value 1>",
    "<value 2>",
  ],
  operationId: "<id>",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  boardId: "<id>",
  operationId: "<id>",
  visibility: "private",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  boardId: "<id>",
  environments: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  boardId: "<id>",
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  operationId: "<id>",
  schemaId: "<id>",
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  teamId: "<id>",
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  blockCode: "<value>",
  reason: "<value>",
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  fromPlan: "hobby",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "hobby",
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
  member: {
    id: "<id>",
    kind: "team",
  },
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "remove",
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  change: "disable",
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  change: "set",
  scopeType: "api-key",
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  change: "set",
  scopeType: "team",
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  enabled: true,
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.Forty`

```typescript
const value: models.Forty = {
  added: [],
  changed: [
    "<value 1>",
  ],
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  removed: [],
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  amount: "703.81",
  purchaseIntentId: "<id>",
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  added: [],
  removed: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  moderationPolicyCount: 9072.28,
  piiRedaction: {
    from: true,
    to: false,
  },
  policiesAdded: [],
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

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  regions: [],
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  countries: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  retention: {
    ceilingMode: "until-requested",
    defaultMode: "days",
  },
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  aliasCount: 3367.7,
  projectId: "<id>",
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  alias: "<value>",
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  action: "created",
  alias: "<value>",
  projectName: "<value>",
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  alias: "<value>",
  deploymentUrl: "https://alert-median.net/",
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  appName: "<value>",
  scopes: [],
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  appName: "<value>",
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  appName: "<value>",
  nextScopes: [
    "profile",
  ],
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  appName: "<value>",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  appName: "<value>",
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  appName: "<value>",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  appName: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  appName: "<value>",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  attackModeEnabled: false,
  projectId: "<id>",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  autoExposeSystemEnvs: false,
  projectName: "<value>",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  amount: 2395.34,
  invoiceId: "<id>",
  lineItemCount: 2859.01,
  refundReason: "<value>",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  amount: 3203.03,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  subscriptionId: "<id>",
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  paymentMethodId: "<id>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  changedFields: [
    "purchaseOrder",
  ],
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  planSlug: "<value>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  productAliases: [],
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  bulkRedirectsLimit: 6227.54,
  prevBulkRedirectsLimit: 6134.2,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  custom: true,
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  cns: [
    "<value 1>",
  ],
  custom: true,
  id: "<id>",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  id: "<id>",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  dst: "<value>",
  src: "<value>",
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  id: "<id>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
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

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  count: 1236.74,
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

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
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

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
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

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
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

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
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

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  githubLogin: "<value>",
  host: "blushing-grass.biz",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  gitlabLogin: "<value>",
  gitlabUserId: 9401.51,
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  prevPurchasedAmount: 2979.53,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 5121.56,
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  metricName: "<value>",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  suffix: "<value>",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  suffix: "<value>",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  oldPasswordProtection: {
    deploymentType: "all",
  },
  passwordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  scope: "team",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  oldSsoProtection: {
    deploymentType: "all",
  },
  scope: "organization",
  ssoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  hookName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "California",
  },
  project: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  checkId: "<id>",
  checkName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.DeploymentCheckUpdatedPayload`

```typescript
const value: models.DeploymentCheckUpdatedPayload = {
  checkId: "<id>",
  checkName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  url: "https://simplistic-statue.name/",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  job: {
    headInfo: {
      project: {
        id: "<id>",
      },
      ref: "<value>",
      sha: "<value>",
    },
    prId: 9852.65,
    project: {
      id: "<id>",
    },
    provider: "gitlab",
    ref: "<value>",
    sha: "<value>",
    type: "gitlab-now-comment",
  },
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  url: "https://sweet-lobster.biz/",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  gitCommitterName: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  sha: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  deployment: {
    id: "<id>",
    meta: {},
    name: "<value>",
    url: "https://small-sailor.net",
  },
  deploymentId: "<id>",
  url: "https://carefree-middle.info",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  projectName: "<value>",
  ruleName: "gitSources",
  ruleProvenance: "team",
  source: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  mode: null,
  previousMode: "none",
  scope: "organization",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  mode: "all",
  previousMode: "all",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: "https://flawless-marketplace.org/",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  domain: "showy-knickers.net",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  action: "add",
  domain: "near-taro.info",
  id: "<id>",
  initiator: "system",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  domain: "frivolous-dredger.org",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  name: "<value>",
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  name: "<value>",
  price: 1081.25,
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  cdnEnabled: false,
  name: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  name: "<value>",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  name: "<value>",
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
  ],
  previousServiceType: "<value>",
  serviceType: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  customNameservers: [],
  domain: "zesty-ferret.biz",
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  domain: "tempting-subexpression.org",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  domain: "sad-swine.name",
  echMode: "auto",
  previousEchMode: "disabled",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  domain: "grounded-whale.biz",
  zone: true,
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  domain: "shy-typeface.name",
  initiator: "user",
  zone: false,
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  fromId: "<id>",
  fromName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  domain: "bulky-kielbasa.info",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  name: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  name: "<value>",
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  drainName: "<value>",
  drainUrl: "https://forsaken-platter.org",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  drainUrl: "https://spirited-roundabout.info/",
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
  snapshotId: "<id>",
  snapshotName: "<value>",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [],
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  path: "/usr/local/bin",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
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

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  email: "Wellington.Kautzer@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  previousRule: {
    email: "Verner_Auer70@hotmail.com",
  },
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  deploymentId: "<id>",
  deploymentUrl: "https://moist-knuckle.com/",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "config",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
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

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [
    "development",
  ],
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
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

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  configVersion: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  configVersion: 1974.32,
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  configVersion: 4782.19,
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  configChangeCount: 5844.32,
  configChanges: [
    {},
  ],
  configVersion: 4908.44,
  projectId: "<id>",
  restore: false,
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  projectId: "<id>",
  ruleGroups: {},
  rulesetName: "<value>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  active: true,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  consumerProjectId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  action: "disable",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  environment: "<value>",
  expiresIn: 1920.87,
  flags: [],
  projectId: "<id>",
  projectIds: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  source: "create",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  actorAccountId: "<id>",
  actorLogin: "<value>",
  destinationBranch: "<value>",
  destinationRepo: "<value>",
  installationId: "<id>",
  outcome: "failure",
  provider: "github",
  resultCommitSha: "<value>",
  sourceCommitSha: "<value>",
  sourceRepo: "<value>",
  usedAppToken: true,
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    id: "<id>",
    username: "Kristofer.Miller20",
  },
  userId: "<id>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
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

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
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

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
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

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  configurations: [],
  ownerId: "<id>",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  billingPlanId: "<id>",
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: null,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [],
  queryCount: 6411.55,
  queryType: "schema",
  readonly: true,
  resourceId: "<id>",
  rolledBack: false,
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
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

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  keys: [
    "<value 1>",
  ],
  requestKind: "get_keys_metadata",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 5703.65,
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  accessTokenRotation: true,
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  logDrainUrl: "https://silver-configuration.name/",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  logDrainUrl: "https://fussy-apricot.net",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  login: "Rubie_McDermott24",
  provider: "github-custom-host",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  provider: "google",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  invoiceCollection: false,
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
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

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  enabled: false,
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
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

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
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

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  avatar: "https://picsum.photos/seed/HTPyoTW/518/842",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  domain: "puzzled-defendant.info",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [],
    teamRoles: [
      "DEVELOPER",
    ],
    teams: {},
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  copiedDomains: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  enabledOrganizationEmu: true,
  enabledTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  enabled: true,
  enforcedTeamIds: [],
  organizationId: "<id>",
  previousEnabled: true,
  trigger: "team_removed",
  unenforcedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  enabled: true,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  name: "<value>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  billingPlan: "platform",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  next: {
    dsyncMode: "team",
  },
  organizationId: "<id>",
  previous: {
    dsyncMode: "organization",
  },
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  connectionType: "<value>",
  organizationId: "<id>",
  organizationSlug: "<value>",
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: false,
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  enabled: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnabled: true,
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "organization",
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: true,
    enforcePercentage: 5164.53,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: false,
    enforcePercentage: 2974.65,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  headerName: "<value>",
  justification: null,
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  connectSrcCount: 8969.75,
  connectSrcOriginCount: 3382.62,
  deletedCount: 8587.9,
  headerCount: 5288.81,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 2535.3,
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://putrid-scorn.com/",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  projectId: "<id>",
  resourceUrl: "https://youthful-cemetery.net/",
  type: "script",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projectId: "<id>",
  resourceUrl: "https://easy-gray.info",
  type: "connectSrc",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "somber-bookcase.net",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  next: [],
  previous: [
    {
      envId: "production",
      perimeterId: "<id>",
    },
  ],
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  plan: "<value>",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  previousTeamSuffix: "<value>",
  projectCount: 4388.76,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  endpoint: {
    awsServiceName: "<value>",
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    vercelRegion: "<value>",
  },
  scope: "network",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  current: {
    awsServiceName: "<value>",
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    vercelRegion: "<value>",
  },
  prev: {
    awsServiceName: "<value>",
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    vercelRegion: "<value>",
  },
  scope: "network",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
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

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
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

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  directoryListing: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  prevProjectAnalytics: {
    disabledAt: 2305.86,
    enabledAt: 6507.59,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 1444.34,
    enabledAt: 2475.8,
    id: "<id>",
  },
  projectId: "<id>",
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
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
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
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  enableExternalRewriteCaching: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  productionDeploymentsFastLane: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "alert",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  project: {
    id: "<id>",
    newConnectConfigurations: [],
    oldConnectConfigurations: [],
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  action: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  autoAssignCustomDomains: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  enableFunctionsBeta: true,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  next: {
    functionDefaultTimeout: 6671.86,
  },
  previous: {
    functionDefaultTimeout: 7327.87,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
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

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  next: {
    functionZeroConfigFailover: true,
  },
  previous: {
    functionZeroConfigFailover: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  next: {
    gitProvider: "cursor-origin",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  gitProvider: "v0",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  onPullRequest: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  onCommit: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  createDeployments: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  requireVerifiedCommits: true,
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  gitCommitStatus: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  gitLFS: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  domain: "dental-department.net",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 5988.71,
  target: "<value>",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  domain: "caring-euphonium.com",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  domain: "deafening-viability.com",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  domain: "damp-providence.org",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  projects: [
    {
      membershipCreatedAt: 5259.03,
      projectId: "<id>",
      role: "ADMIN",
    },
  ],
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  domain: "clumsy-custom.info",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 9637.82,
    role: "PROJECT_VIEWER",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_DEVELOPER",
  },
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 2418.45,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
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
  oldPasswordProtection: {
    deploymentType: "preview",
  },
  passwordProtection: "preview",
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  expiresAt: 3379.77,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  consent: "refused",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  next: {
    issuerMode: "team",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  customerSupportCodeVisibility: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  gitForkProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  inheritDeploymentProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  next: {
    skewProtectionBoundaryAt: 8563.53,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  next: {
    skewProtectionMaxAge: 8744.54,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
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

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  oldSsoProtection: {
    deploymentType: "preview",
  },
  ssoProtection: "preview",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
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

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  addedProjects: [],
  addedProviders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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
  ],
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  connectionId: "<id>",
  actorType: "admin",
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
  ],
  created: true,
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
  signingEnabled: false,
  signingKeyId: "<id>",
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  email: "Queenie_Witting@hotmail.com",
  name: "<value>",
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  instances: 784.77,
  url: "https://fussy-conservation.name",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  email: "Theresa.Kassulke54@gmail.com",
  verified: false,
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  email: "Myles_Johnston@yahoo.com",
  verified: false,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  email: "Jarrell_Cruickshank@hotmail.com",
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  name: {
    name: "<value>",
  },
  uid: "<id>",
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  enabled: true,
  updatedAt: 4889.38,
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  max: 1854.09,
  min: 6103.99,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://humble-resource.name/",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Julie_Powlowski73@gmail.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  email: "Treva24@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  email: "Myrl39@gmail.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  previous: {
    sampleRatePercent: 8739.93,
    spendLimitInDollars: 6421.09,
  },
  sampleRatePercent: 2050.59,
  spendLimitInDollars: 1576.84,
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  budget: {
    budgetItem: {
      createdAt: 5551.46,
      fixedBudget: 9220.05,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        3529.32,
        4855.79,
      ],
      previousSpend: [],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  budget: {
    createdAt: 8763.22,
    fixedBudget: 7095.95,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      5054.25,
      4550.21,
      1154.76,
    ],
    previousSpend: [
      5786.88,
      2232.42,
      3927.44,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  budget: {
    createdAt: 666.83,
    fixedBudget: 3726.82,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      9707.81,
    ],
    previousSpend: [
      2837,
      9948.05,
      6052.81,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  budget: {
    createdAt: 1988.51,
    fixedBudget: 9392.37,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      9697.87,
      6661.63,
      8036.99,
    ],
    previousSpend: [
      2642.27,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  storeType: "redis",
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  store: {
    id: "<id>",
    type: "edge-config",
  },
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  store: {
    id: "<id>",
    type: "edge-config",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  store: {
    id: "<id>",
    type: "postgres",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  id: "<id>",
  type: "blob",
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  id: "<id>",
  type: "postgres",
  locked: false,
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  slug: "<value>",
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  action: "update",
  codeReviewEnabled: false,
  cumulativeBalance: "<value>",
  endpoint: "/v1/vade/usage-billing",
  ledgerId: "<id>",
  next: {
    enabled: false,
    maximumOverdraft: "<value>",
  },
  previous: {
    enabled: false,
    maximumOverdraft: "<value>",
  },
  removedTopupIds: [],
  source: "<value>",
  topupCleanupCompleted: false,
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  next: {
    enabled: true,
    includeDrafts: true,
    scope: "private",
  },
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  next: {
    enabled: false,
    projectScope: "all",
  },
  previous: {
    enabled: true,
    projectScope: "selected",
  },
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  amount: "176.07",
  currency: "Rand",
  expiresAt: "1741637899588",
  trialCreditsIssuedAt: 4221.42,
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  eventId: "<id>",
  occurredAt: 9832.3,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  eventId: "<id>",
  occurredAt: 1398.07,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 3808.7,
  elevatedScopes: [
    "<value 1>",
  ],
  githubScopeCount: 7834.3,
  githubScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopeCount: 3370.05,
  mergedScopes: [
    "<value 1>",
  ],
  planId: "<id>",
  requestedScopeCount: 1124.46,
  requestedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  eventId: "<id>",
  occurredAt: 9325.55,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 1124.99,
  severity: "<value>",
  targetId: "<id>",
  targetKind: "project",
  targetName: "<value>",
  vulnerabilityClass: "<value>",
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  eventId: "<id>",
  occurredAt: 7890.55,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 8151.33,
  severity: "<value>",
  targetId: "<id>",
  targetKind: "project",
  targetName: "<value>",
  vulnerabilityClass: "<value>",
  dismissalReason: "false-positive",
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  next: "auto-approval",
  previous: "auto-approval",
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
  enabled: false,
};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  next: {},
  previous: {},
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  action: "reset",
  targetId: "<id>",
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  enabled: false,
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  enabled: false,
  environment: "production",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  enabled: "on-force",
  environment: "production",
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  deletedCount: 9074.28,
  inviteIds: [],
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  teamName: "<value>",
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  teamName: "<value>",
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Reed_Lebsack49",
  },
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Shanon38",
  },
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  requestedTeamName: "<value>",
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  previousRole: "<value>",
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  authorized: true,
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  enforced: true,
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {
  expiresAt: "1764091994421",
  maxUses: 7026,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  publicId: "<id>",
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  nextConcurrentBuilds: 8577.16,
  previousConcurrentBuilds: 1504.2,
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  plan: "pro",
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  convertedFromTrial: false,
  invoiceId: "<id>",
  plan: "pro",
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
  decision: "keep_on",
  version: "<value>",
};
```

### `models.FourHundredAndFiftyFive`

```typescript
const value: models.FourHundredAndFiftyFive = {
  acceptanceId: "<id>",
  termsVersion: "<value>",
};
```

### `models.FourHundredAndFiftySix`

```typescript
const value: models.FourHundredAndFiftySix = {
  consent: "granted",
};
```

### `models.FourHundredAndFiftySeven`

```typescript
const value: models.FourHundredAndFiftySeven = {};
```

### `models.FourHundredAndFiftyEight`

```typescript
const value: models.FourHundredAndFiftyEight = {
  deletedCount: 1480.08,
};
```

### `models.FourHundredAndFiftyNine`

```typescript
const value: models.FourHundredAndFiftyNine = {
  enabled: "off",
};
```

### `models.FourHundredAndSixty`

```typescript
const value: models.FourHundredAndSixty = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.FourHundredAndSixtyOne`

```typescript
const value: models.FourHundredAndSixtyOne = {};
```

### `models.FourHundredAndSixtyTwo`

```typescript
const value: models.FourHundredAndSixtyTwo = {
  domain: "actual-bathrobe.info",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndSixtyThree`

```typescript
const value: models.FourHundredAndSixtyThree = {
  tokenTypes: [],
};
```

### `models.FourHundredAndSixtyFour`

```typescript
const value: models.FourHundredAndSixtyFour = {
  exportId: "<id>",
  format: "<value>",
  from: 9318.2,
  to: 4638.61,
};
```

### `models.FourHundredAndSixtyFive`

```typescript
const value: models.FourHundredAndSixtyFive = {
  fileId: "<id>",
};
```

### `models.FourHundredAndSixtySix`

```typescript
const value: models.FourHundredAndSixtySix = {};
```

### `models.FourHundredAndSixtySeven`

```typescript
const value: models.FourHundredAndSixtySeven = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSixtyEight`

```typescript
const value: models.FourHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndSixtyNine`

```typescript
const value: models.FourHundredAndSixtyNine = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndSeventy`

```typescript
const value: models.FourHundredAndSeventy = {
  organizationId: "<id>",
};
```

### `models.FourHundredAndSeventyOne`

```typescript
const value: models.FourHundredAndSeventyOne = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndSeventyTwo`

```typescript
const value: models.FourHundredAndSeventyTwo = {};
```

### `models.FourHundredAndSeventyThree`

```typescript
const value: models.FourHundredAndSeventyThree = {
  recoveryCodes: 5949.13,
  totp: true,
};
```

### `models.FourHundredAndSeventyFour`

```typescript
const value: models.FourHundredAndSeventyFour = {
  username: "Anastacio.Prohaska",
};
```

### `models.FourHundredAndSeventyFive`

```typescript
const value: models.FourHundredAndSeventyFive = {
  username: "Buford_Turcotte",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSeventySix`

```typescript
const value: models.FourHundredAndSeventySix = {
  username: "Tad_Dietrich4",
};
```

### `models.FourHundredAndSeventySeven`

```typescript
const value: models.FourHundredAndSeventySeven = {
  teamName: "<value>",
};
```

### `models.FourHundredAndSeventyEight`

```typescript
const value: models.FourHundredAndSeventyEight = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndSeventyNine`

```typescript
const value: models.FourHundredAndSeventyNine = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEighty`

```typescript
const value: models.FourHundredAndEighty = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEightyOne`

```typescript
const value: models.FourHundredAndEightyOne = {
  actorId: "<id>",
  actorType: "admin",
  enabled: true,
};
```

### `models.FourHundredAndEightyTwo`

```typescript
const value: models.FourHundredAndEightyTwo = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: false,
};
```

### `models.FourHundredAndEightyThree`

```typescript
const value: models.FourHundredAndEightyThree = {
  scope: "organization",
};
```

### `models.FourHundredAndEightyFour`

```typescript
const value: models.FourHundredAndEightyFour = {
  method: "webauthn",
  reason: "<value>",
};
```

### `models.FourHundredAndEightyFive`

```typescript
const value: models.FourHundredAndEightyFive = {
  allowedMethods: [],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndEightySix`

```typescript
const value: models.FourHundredAndEightySix = {
  action: "remove-passkey",
  reason: "<value>",
};
```

### `models.FourHundredAndEightySeven`

```typescript
const value: models.FourHundredAndEightySeven = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: false,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndEightyEight`

```typescript
const value: models.FourHundredAndEightyEight = {
  remaining: 7109.4,
};
```

### `models.FourHundredAndEightyNine`

```typescript
const value: models.FourHundredAndEightyNine = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndNinety`

```typescript
const value: models.FourHundredAndNinety = {
  mfa: {
    enabled: false,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndNinetyOne`

```typescript
const value: models.FourHundredAndNinetyOne = {
  enabled: false,
  totpVerified: true,
};
```

### `models.FourHundredAndNinetyTwo`

```typescript
const value: models.FourHundredAndNinetyTwo = {
  next: {
    enabled: true,
    totpVerified: false,
  },
  previous: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndNinetyThree`

```typescript
const value: models.FourHundredAndNinetyThree = {
  decision: {
    authoritative: false,
    basis: "none",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "not-checked",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndNinetyFour`

```typescript
const value: models.FourHundredAndNinetyFour = {
  email: "Favian.Berge@hotmail.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndNinetyFive`

```typescript
const value: models.FourHundredAndNinetyFive = {
  email: "Adonis_Reichert-Howell@yahoo.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndNinetySix`

```typescript
const value: models.FourHundredAndNinetySix = {
  username: "Giovanna_Dickens35",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndNinetySeven`

```typescript
const value: models.FourHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetyEight`

```typescript
const value: models.FourHundredAndNinetyEight = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetyNine`

```typescript
const value: models.FourHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FiveHundred`

```typescript
const value: models.FiveHundred = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FiveHundredAndOne`

```typescript
const value: models.FiveHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FiveHundredAndTwo`

```typescript
const value: models.FiveHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  public: true,
  repositoryName: "<value>",
};
```

### `models.FiveHundredAndThree`

```typescript
const value: models.FiveHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [],
  repositoryName: "<value>",
};
```

### `models.FiveHundredAndFour`

```typescript
const value: models.FiveHundredAndFour = {
  ruleName: "<value>",
};
```

### `models.FiveHundredAndFive`

```typescript
const value: models.FiveHundredAndFive = {
  nextProjectCount: 7486.07,
  previousProjectCount: 1278.3,
};
```

### `models.FiveHundredAndSix`

```typescript
const value: models.FiveHundredAndSix = {
  customAlertTitle: "<value>",
};
```

### `models.FiveHundredAndSeven`

```typescript
const value: models.FiveHundredAndSeven = {
  ciEnabled: true,
  organizationId: "<id>",
  repository: "<value>",
};
```

### `models.FiveHundredAndEight`

```typescript
const value: models.FiveHundredAndEight = {
  protectedProjectCount: 4465.28,
  protectionEnabled: true,
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FiveHundredAndNine`

```typescript
const value: models.FiveHundredAndNine = {
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

### `models.FiveHundredAndTen`

```typescript
const value: models.FiveHundredAndTen = {
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

### `models.FiveHundredAndEleven`

```typescript
const value: models.FiveHundredAndEleven = {
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

### `models.FiveHundredAndTwelve`

```typescript
const value: models.FiveHundredAndTwelve = {
  cadence: "monthly",
  projectIds: [],
  team: {
    id: "<id>",
  },
};
```

### `models.FiveHundredAndThirteen`

```typescript
const value: models.FiveHundredAndThirteen = {
  tier: "pro",
};
```

### `models.FiveHundredAndFourteen`

```typescript
const value: models.FiveHundredAndFourteen = {
  id: "<id>",
  url: "https://nutritious-minor.org/",
};
```

### `models.FiveHundredAndFifteen`

```typescript
const value: models.FiveHundredAndFifteen = {
  chatId: "<id>",
};
```

### `models.FiveHundredAndSixteen`

```typescript
const value: models.FiveHundredAndSixteen = {
  chatId: "<id>",
  events: [],
  inputTokens: 9118.75,
  messageId: "<id>",
  model: "Durango",
  outputTokens: 1351.81,
  timestamp: 6820.29,
  useCase: "<value>",
};
```

### `models.FiveHundredAndSeventeen`

```typescript
const value: models.FiveHundredAndSeventeen = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FiveHundredAndEighteen`

```typescript
const value: models.FiveHundredAndEighteen = {
  next: {
    access: "limited",
    limit: "<value>",
  },
  previous: {
    access: "unlimited",
  },
  userId: "<id>",
};
```

### `models.FiveHundredAndNineteen`

```typescript
const value: models.FiveHundredAndNineteen = {
  next: {
    access: "unlimited",
  },
  previous: {
    access: "default",
  },
};
```

### `models.FiveHundredAndTwenty`

```typescript
const value: models.FiveHundredAndTwenty = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FiveHundredAndTwentyOne`

```typescript
const value: models.FiveHundredAndTwentyOne = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
    ],
  },
  scope: "team",
};
```

### `models.FiveHundredAndTwentyTwo`

```typescript
const value: models.FiveHundredAndTwentyTwo = {
  appName: "<value>",
  atTTL: 8906.19,
  authMethod: "gitlab",
  grantType: "authorization_code",
  scope: "<value>",
};
```

### `models.FiveHundredAndTwentyThree`

```typescript
const value: models.FiveHundredAndTwentyThree = {
  domain: "crooked-brush.org",
  projectId: "<id>",
};
```

### `models.FiveHundredAndTwentyFour`

```typescript
const value: models.FiveHundredAndTwentyFour = {
  policy: {
    claims: [],
    clientId: "<id>",
    createdAt: 4460.82,
    issuerUrl: "https://sarcastic-knitting.com",
    name: "<value>",
    permissions: [
      "<value 1>",
      "<value 2>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [],
    },
    teamId: "<id>",
    updatedAt: 3467.89,
  },
};
```

### `models.FiveHundredAndTwentyFive`

```typescript
const value: models.FiveHundredAndTwentyFive = {
  after: {
    claims: [],
    clientId: "<id>",
    createdAt: 2290.17,
    issuerUrl: "https://hidden-language.org",
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
    updatedAt: 9842.98,
  },
  before: {
    claims: [],
    clientId: "<id>",
    createdAt: 6928.56,
    issuerUrl: "https://dead-sightseeing.com/",
    name: null,
    permissions: [],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 461.94,
  },
};
```

### `models.FiveHundredAndTwentySix`

```typescript
const value: models.FiveHundredAndTwentySix = {
  origin: "github",
  scope: "team",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FiveHundredAndTwentySeven`

```typescript
const value: models.FiveHundredAndTwentySeven = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FiveHundredAndTwentyEight`

```typescript
const value: models.FiveHundredAndTwentyEight = {
  actorTokenId: "<id>",
  deletedCount: 7319.99,
};
```


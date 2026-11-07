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
  operationId: "<id>",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  boardId: "<id>",
  channelId: "<id>",
  operationId: "<id>",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  boardId: "<id>",
  channelId: "<id>",
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
  fields: [
    "<value 1>",
  ],
  operationId: "<id>",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  boardId: "<id>",
  operationId: "<id>",
  visibility: "private",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  boardId: "<id>",
  environments: [
    "<value 1>",
    "<value 2>",
  ],
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  boardId: "<id>",
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  operationId: "<id>",
  schemaId: "<id>",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  teamId: "<id>",
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  blockCode: "<value>",
  reason: "<value>",
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  fromPlan: "hobby",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "pro",
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
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

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  apiKey: {
    id: "<id>",
    name: "<value>",
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
  change: "enable",
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  change: "disable",
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  change: "remove",
  scopeType: "api-key",
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  change: "disable",
  scopeType: "user",
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  added: [
    "<value 1>",
  ],
  changed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
  removed: [],
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  enabled: true,
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  amount: "386.29",
  purchaseIntentId: "<id>",
};
```

### `models.Forty`

```typescript
const value: models.Forty = {
  added: [],
  removed: [
    "<value 1>",
  ],
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  moderationPolicyCount: 6506.92,
  piiRedaction: {
    from: false,
    to: false,
  },
  policiesAdded: [
    "<value 1>",
  ],
  policiesModified: [],
  policiesRemoved: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  regions: [
    "<value 1>",
  ],
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  retention: {
    ceilingMode: "until-requested",
    defaultMode: "days",
  },
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
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
  },
  user: {
    id: "<id>",
  },
};
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
const value: models.FiftyEight = {
  aliasCount: 4131.31,
  projectId: "<id>",
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
  alias: "<value>",
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
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
const value: models.SixtyThree = {};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  action: "removed",
  alias: "<value>",
  projectName: "<value>",
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  alias: "<value>",
  deploymentUrl: "https://dead-euphonium.org/",
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  appName: "<value>",
  scopes: [],
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  appName: "<value>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  appName: "<value>",
  nextScopes: [
    "email",
  ],
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  appName: "<value>",
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
  attackModeEnabled: true,
  projectId: "<id>",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  autoExposeSystemEnvs: false,
  projectName: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  amount: 8537.76,
  invoiceId: "<id>",
  lineItemCount: 7344.14,
  refundReason: "<value>",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  amount: 7233.43,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-paid",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  subscriptionId: "<id>",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  paymentMethodId: "<id>",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  changedFields: [
    "email",
  ],
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  planSlug: "<value>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  action: "resume_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  action: "mutate",
  data: {
    "key": "<value>",
  },
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  productAliases: [],
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  bulkRedirectsLimit: 1265.96,
  prevBulkRedirectsLimit: 6073.38,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  custom: true,
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  cns: [
    "<value 1>",
    "<value 2>",
  ],
  custom: false,
  id: "<id>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  id: "<id>",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  dst: "<value>",
  src: "<value>",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  id: "<id>",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  next: {
    autoAddReviewers: false,
    enabled: false,
  },
  previous: {
    autoAddReviewers: false,
    enabled: true,
  },
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  count: 3413.73,
  documents: [],
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
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

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
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

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
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

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
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

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  githubLogin: "<value>",
  host: "coarse-steak.org",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  gitlabLogin: "<value>",
  gitlabUserId: 712.14,
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  prevPurchasedAmount: 3966.63,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 7998.83,
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  metricName: "<value>",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  suffix: "<value>",
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  suffix: "<value>",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  scope: "team",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  oldSsoProtection: {
    deploymentType: "all",
  },
  scope: "team",
  ssoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  hookName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Ohio",
  },
  project: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
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

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  url: "https://sudden-institute.com/",
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 4252.15,
      sha: "<value>",
    },
    installationId: 786.26,
    isPrivate: true,
    org: "<value>",
    prId: 324.48,
    provider: "github-custom-host",
    repo: "<value>",
    repoId: 3011.37,
    repoPushedAt: 6930.83,
    type: "push",
  },
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  url: "https://sizzling-valuable.com",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  gitCommitterName: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  sha: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
    url: "https://early-flu.net",
  },
  deploymentId: "<id>",
  url: "https://pleasing-coil.org",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  projectName: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "team",
  source: "<value>",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  mode: "none",
  previousMode: "none",
  scope: "organization",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  mode: "all",
  previousMode: "none",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: "https://necessary-lobster.biz",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  domain: "colossal-chainstay.name",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  action: "delete",
  domain: "spanish-farmer.biz",
  id: "<id>",
  initiator: "user",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  domain: "well-to-do-exhaust.net",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  name: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  name: "<value>",
  price: 142.87,
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  cdnEnabled: true,
  name: "<value>",
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
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
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

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  domain: "jagged-casement.com",
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  domain: "enchanted-colon.name",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  domain: "jaunty-perp.com",
  echMode: "auto",
  previousEchMode: "enabled",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  domain: "inconsequential-curl.org",
  zone: true,
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  domain: "tempting-subexpression.org",
  initiator: "user",
  zone: true,
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  fromId: "<id>",
  fromName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  domain: "damaged-guard.org",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  name: "<value>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  name: "<value>",
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  drainName: null,
  drainUrl: "https://squiggly-lobster.name/",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  drainUrl: "https://elementary-duffel.info/",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  path: "/selinux",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
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

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  email: "Liza.OReilly@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  previousRule: {
    email: "Yasmin91@yahoo.com",
  },
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  deploymentId: "<id>",
  deploymentUrl: "https://well-worn-marathon.com",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "secret",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
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

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [
    "preview",
  ],
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
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

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  configVersion: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  configVersion: 880.46,
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  configVersion: 8783.46,
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  configChangeCount: 365.02,
  configChanges: [],
  configVersion: 7398.01,
  projectId: "<id>",
  restore: true,
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  projectId: "<id>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  active: true,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  consumerProjectId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  action: "enable",
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  source: "create",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
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

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    id: "<id>",
    username: "Gunner2",
  },
  userId: "<id>",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  configurationId: "<id>",
  confirmedScopes: [],
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
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

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
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

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  configurations: [],
  ownerId: "<id>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  billingPlanId: "<id>",
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: 6948.54,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [],
  queryCount: 5351.83,
  queryType: "schema",
  readonly: true,
  resourceId: "<id>",
  rolledBack: false,
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
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

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
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

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 6259.57,
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  accessTokenRotation: true,
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  logDrainUrl: null,
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  logDrainUrl: "https://remorseful-availability.com/",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  login: "Lydia90",
  provider: "google",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  provider: "google",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  invoiceCollection: true,
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
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

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  enabled: false,
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
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

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
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

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  avatar: "https://loremflickr.com/1539/1498?lock=212861900757998",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [
      "OrgAdmin",
    ],
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

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  copiedDomains: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  enabledOrganizationEmu: false,
  enabledTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  enabled: true,
  enforcedTeamIds: [],
  organizationId: "<id>",
  previousEnabled: true,
  trigger: "team_attached",
  unenforcedTeamIds: [
    "<value 1>",
  ],
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  enabled: true,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  name: "<value>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  billingPlan: "enterprise",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  next: {
    dsyncMode: "organization",
  },
  organizationId: "<id>",
  previous: {
    dsyncMode: "organization",
  },
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  connectionType: "<value>",
  organizationId: "<id>",
  organizationSlug: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  enforced: true,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: true,
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  enabled: true,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnabled: true,
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "team",
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 694.16,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: null,
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  connectSrcCount: 6103.11,
  connectSrcOriginCount: 473.99,
  deletedCount: 4020.64,
  headerCount: 4874.93,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 6282.87,
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://abandoned-blowgun.name/",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  projectId: "<id>",
  resourceUrl: "https://helpless-bowler.net/",
  type: "script",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  projectId: "<id>",
  resourceUrl: "https://icy-leading.info",
  type: "connectSrc",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "limping-pear.net",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  next: [
    {
      envId: "<id>",
      perimeterId: "<id>",
    },
  ],
  previous: [],
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  plan: "<value>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  previousTeamSuffix: "<value>",
  projectCount: 4674.8,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
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

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
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

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
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

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
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

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  directoryListing: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  prevProjectAnalytics: {
    disabledAt: 5726.32,
    enabledAt: 7431.24,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 5261.84,
    enabledAt: 9497.84,
    id: "<id>",
  },
  projectId: "<id>",
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
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
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
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  enableExternalRewriteCaching: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  productionDeploymentsFastLane: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "speed-insights-lcp",
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
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
    oldConnectConfigurations: [],
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
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
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  autoAssignCustomDomains: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  previewDeploymentsEnabled: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  enableFunctionsBeta: true,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  next: {
    functionDefaultTimeout: 4080.81,
  },
  previous: {
    functionDefaultTimeout: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
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

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {
    functionDefaultRegions: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  next: {
    functionZeroConfigFailover: true,
  },
  previous: {
    functionZeroConfigFailover: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  next: {
    gitProvider: "github",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  gitProvider: "gitlab",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  onPullRequest: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  onCommit: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  createDeployments: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  requireVerifiedCommits: true,
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  gitCommitStatus: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  gitLFS: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  domain: "dependent-graffiti.net",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 1964.74,
  target: "<value>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  domain: "considerate-suv.net",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  domain: "knotty-gallery.info",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  domain: "caring-edge.name",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  projects: [],
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  domain: "elegant-analogy.name",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 3731.05,
    role: "PROJECT_VIEWER",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "ADMIN",
  },
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 1045.89,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
};
```

### `models.ThreeHundredAndFortyOne`

```typescript
const value: models.ThreeHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyTwo`

```typescript
const value: models.ThreeHundredAndFortyTwo = {
  oldPasswordProtection: "all_except_custom_domains",
  passwordProtection: "prod_deployment_urls_and_all_previews",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  expiresAt: 3131.37,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
  consent: "refused",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
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
  projectId: "<id>",
  projectName: "<value>",
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
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  next: {
    issuerMode: "team",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  customerSupportCodeVisibility: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  gitForkProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
  inheritDeploymentProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  next: {
    skewProtectionBoundaryAt: 7472.76,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  next: {
    skewProtectionMaxAge: 4465.45,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  oldSsoProtection: "prod_deployment_urls_and_all_previews",
  ssoProtection: "all",
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
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

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  addedProjects: [],
  addedProviders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  projectId: "<id>",
  projectName: "<value>",
  removedProjects: [],
  removedProviders: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  connectionId: "<id>",
  actorType: "admin",
  certificateFingerprints: [],
  created: false,
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
  signingEnabled: false,
  signingKeyId: "<id>",
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
  snapshotId: "<id>",
  snapshotName: "<value>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  email: "Rodrick_Runolfsdottir65@yahoo.com",
  name: "<value>",
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  instances: 3729.95,
  url: "https://distinct-tail.info/",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  email: "Lauren.Schuster@hotmail.com",
  verified: true,
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  email: "Dedrick.Ryan@gmail.com",
  verified: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  email: "Velva.Abernathy@hotmail.com",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  name: "<value>",
  uid: "<id>",
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  enabled: true,
  updatedAt: 9264.11,
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  max: 3515.72,
  min: 7365.73,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://unusual-fedora.name/",
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Zion39@yahoo.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  email: "Kirk0@yahoo.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  email: "Jeffry99@yahoo.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  previous: {
    sampleRatePercent: 1638.73,
    spendLimitInDollars: 2035.54,
  },
  sampleRatePercent: 9306.39,
  spendLimitInDollars: 2736.35,
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  budget: {
    budgetItem: {
      createdAt: 7766.26,
      fixedBudget: 1225.19,
      id: "<id>",
      isActive: true,
      notifiedAt: [],
      previousSpend: [
        4521.24,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  budget: {
    createdAt: 8690.87,
    fixedBudget: 2879.81,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      1946.81,
      3363.52,
    ],
    previousSpend: [
      3809.94,
      3873.32,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  budget: {
    createdAt: 1517.8,
    fixedBudget: 5267.96,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      8180.92,
      7322.5,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  budget: {
    createdAt: 1857.19,
    fixedBudget: 9380.8,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      2423.31,
      9917.22,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  storeType: "postgres",
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  store: {
    id: "<id>",
    type: "redis",
  },
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  store: {
    id: "<id>",
    type: "redis",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  store: {
    id: "<id>",
    type: "blob",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  id: "<id>",
  type: "blob",
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  id: "<id>",
  type: "redis",
  locked: false,
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  slug: "<value>",
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {
  action: "update",
  codeReviewEnabled: true,
  cumulativeBalance: "<value>",
  endpoint: "/v1/vade/usage-billing",
  ledgerId: "<id>",
  next: {
    enabled: true,
    maximumOverdraft: "<value>",
  },
  previous: {
    enabled: true,
    maximumOverdraft: "<value>",
  },
  removedTopupIds: [
    "<value 1>",
    "<value 2>",
  ],
  source: "<value>",
  topupCleanupCompleted: true,
};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "all",
  },
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
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

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  amount: "788.08",
  currency: "Moroccan Dirham",
  expiresAt: "1756482778607",
  trialCreditsIssuedAt: 6117.29,
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  eventId: "<id>",
  occurredAt: 5326.88,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  eventId: "<id>",
  occurredAt: 9402.7,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 3762.08,
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  githubScopeCount: 4524,
  githubScopes: [],
  mergedScopeCount: 8990.28,
  mergedScopes: [
    "<value 1>",
  ],
  planId: "<id>",
  requestedScopeCount: 6039.48,
  requestedScopes: [
    "<value 1>",
  ],
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  eventId: "<id>",
  occurredAt: 5173.5,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 8766.55,
  severity: "<value>",
  targetId: "<id>",
  targetKind: "project",
  targetName: "<value>",
  vulnerabilityClass: "<value>",
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  eventId: "<id>",
  occurredAt: 1411.16,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 1178.11,
  severity: "<value>",
  targetId: "<id>",
  targetKind: "repository",
  targetName: "<value>",
  vulnerabilityClass: "<value>",
  dismissalReason: "accepted-risk",
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  next: "auto-approval",
  previous: null,
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  enabled: false,
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  next: {},
  previous: null,
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  action: "reset",
  targetId: "<id>",
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  enabled: true,
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  enabled: false,
  environment: "production",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {
  enabled: "off",
  environment: "production",
};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  deletedCount: 8821.49,
  inviteIds: [],
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  teamName: "<value>",
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  teamName: "<value>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Diego59",
  },
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Sydnee.Borer",
  },
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  requestedTeamName: "<value>",
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  previousRole: "<value>",
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  authorized: true,
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  enforced: false,
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  expiresAt: "1763517288966",
  maxUses: 8970.13,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  publicId: "<id>",
};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  nextConcurrentBuilds: 9932.86,
  previousConcurrentBuilds: 2607.94,
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  plan: "enterprise",
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  convertedFromTrial: true,
  invoiceId: "<id>",
  plan: "enterprise",
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  decision: "turn_off",
  version: "<value>",
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  acceptanceId: "<id>",
  termsVersion: "<value>",
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  consent: "refused",
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {
  deletedCount: 7342.39,
};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  enabled: "default",
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
  enabled: true,
  scope: "dashboard",
};
```

### `models.FourHundredAndFiftyFive`

```typescript
const value: models.FourHundredAndFiftyFive = {};
```

### `models.FourHundredAndFiftySix`

```typescript
const value: models.FourHundredAndFiftySix = {
  domain: "joyous-partridge.biz",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndFiftySeven`

```typescript
const value: models.FourHundredAndFiftySeven = {
  tokenTypes: [],
};
```

### `models.FourHundredAndFiftyEight`

```typescript
const value: models.FourHundredAndFiftyEight = {
  exportId: "<id>",
  format: "<value>",
  from: 1480.08,
  to: 7340.56,
};
```

### `models.FourHundredAndFiftyNine`

```typescript
const value: models.FourHundredAndFiftyNine = {
  fileId: "<id>",
};
```

### `models.FourHundredAndSixty`

```typescript
const value: models.FourHundredAndSixty = {};
```

### `models.FourHundredAndSixtyOne`

```typescript
const value: models.FourHundredAndSixtyOne = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSixtyTwo`

```typescript
const value: models.FourHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndSixtyThree`

```typescript
const value: models.FourHundredAndSixtyThree = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndSixtyFour`

```typescript
const value: models.FourHundredAndSixtyFour = {
  organizationId: "<id>",
};
```

### `models.FourHundredAndSixtyFive`

```typescript
const value: models.FourHundredAndSixtyFive = {
  organizationId: "<id>",
  teamIds: [],
};
```

### `models.FourHundredAndSixtySix`

```typescript
const value: models.FourHundredAndSixtySix = {};
```

### `models.FourHundredAndSixtySeven`

```typescript
const value: models.FourHundredAndSixtySeven = {
  recoveryCodes: 2136.74,
  totp: false,
};
```

### `models.FourHundredAndSixtyEight`

```typescript
const value: models.FourHundredAndSixtyEight = {
  username: "Lauren.Herzog",
};
```

### `models.FourHundredAndSixtyNine`

```typescript
const value: models.FourHundredAndSixtyNine = {
  username: "Tracey.Beier",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSeventy`

```typescript
const value: models.FourHundredAndSeventy = {
  username: "Thora3",
};
```

### `models.FourHundredAndSeventyOne`

```typescript
const value: models.FourHundredAndSeventyOne = {
  teamName: "<value>",
};
```

### `models.FourHundredAndSeventyTwo`

```typescript
const value: models.FourHundredAndSeventyTwo = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndSeventyThree`

```typescript
const value: models.FourHundredAndSeventyThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSeventyFour`

```typescript
const value: models.FourHundredAndSeventyFour = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSeventyFive`

```typescript
const value: models.FourHundredAndSeventyFive = {
  actorId: "<id>",
  actorType: "admin",
  enabled: true,
};
```

### `models.FourHundredAndSeventySix`

```typescript
const value: models.FourHundredAndSeventySix = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: false,
};
```

### `models.FourHundredAndSeventySeven`

```typescript
const value: models.FourHundredAndSeventySeven = {
  method: "recovery-code",
  reason: "<value>",
};
```

### `models.FourHundredAndSeventyEight`

```typescript
const value: models.FourHundredAndSeventyEight = {
  allowedMethods: [
    "webauthn",
  ],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndSeventyNine`

```typescript
const value: models.FourHundredAndSeventyNine = {
  action: "admin-remove",
  reason: "<value>",
};
```

### `models.FourHundredAndEighty`

```typescript
const value: models.FourHundredAndEighty = {
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

### `models.FourHundredAndEightyOne`

```typescript
const value: models.FourHundredAndEightyOne = {
  remaining: 3291.29,
};
```

### `models.FourHundredAndEightyTwo`

```typescript
const value: models.FourHundredAndEightyTwo = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndEightyThree`

```typescript
const value: models.FourHundredAndEightyThree = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndEightyFour`

```typescript
const value: models.FourHundredAndEightyFour = {
  enabled: false,
  totpVerified: false,
};
```

### `models.FourHundredAndEightyFive`

```typescript
const value: models.FourHundredAndEightyFive = {
  next: {
    enabled: true,
    totpVerified: false,
  },
  previous: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndEightySix`

```typescript
const value: models.FourHundredAndEightySix = {
  decision: {
    authoritative: false,
    basis: "gmail",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: false,
    mxOutcome: "lookup-error",
  },
  outcome: "linking-required",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndEightySeven`

```typescript
const value: models.FourHundredAndEightySeven = {
  email: "Emilio_Corkery95@hotmail.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndEightyEight`

```typescript
const value: models.FourHundredAndEightyEight = {
  email: "Coy.Swift@hotmail.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEightyNine`

```typescript
const value: models.FourHundredAndEightyNine = {
  username: "Zoey.McKenzie53",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndNinety`

```typescript
const value: models.FourHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetyOne`

```typescript
const value: models.FourHundredAndNinetyOne = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetyTwo`

```typescript
const value: models.FourHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetyThree`

```typescript
const value: models.FourHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndNinetyFour`

```typescript
const value: models.FourHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndNinetyFive`

```typescript
const value: models.FourHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetySix`

```typescript
const value: models.FourHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [
    "<value 1>",
  ],
  repositoryName: "<value>",
};
```

### `models.FourHundredAndNinetySeven`

```typescript
const value: models.FourHundredAndNinetySeven = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndNinetyEight`

```typescript
const value: models.FourHundredAndNinetyEight = {
  nextProjectCount: 249.76,
  previousProjectCount: 3417.13,
};
```

### `models.FourHundredAndNinetyNine`

```typescript
const value: models.FourHundredAndNinetyNine = {
  customAlertTitle: "<value>",
};
```

### `models.FiveHundred`

```typescript
const value: models.FiveHundred = {
  ciEnabled: true,
  organizationId: "<id>",
  repository: "<value>",
};
```

### `models.FiveHundredAndOne`

```typescript
const value: models.FiveHundredAndOne = {
  protectedProjectCount: 4385.7,
  protectionEnabled: true,
  vulnerabilities: [],
};
```

### `models.FiveHundredAndTwo`

```typescript
const value: models.FiveHundredAndTwo = {
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

### `models.FiveHundredAndThree`

```typescript
const value: models.FiveHundredAndThree = {
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

### `models.FiveHundredAndFour`

```typescript
const value: models.FiveHundredAndFour = {
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

### `models.FiveHundredAndFive`

```typescript
const value: models.FiveHundredAndFive = {
  cadence: "weekly",
  projectIds: [
    "<value 1>",
    "<value 2>",
  ],
  team: {
    id: "<id>",
  },
};
```

### `models.FiveHundredAndSix`

```typescript
const value: models.FiveHundredAndSix = {
  tier: "plus",
};
```

### `models.FiveHundredAndSeven`

```typescript
const value: models.FiveHundredAndSeven = {
  id: "<id>",
  url: "https://legal-wriggler.biz/",
};
```

### `models.FiveHundredAndEight`

```typescript
const value: models.FiveHundredAndEight = {
  chatId: "<id>",
};
```

### `models.FiveHundredAndNine`

```typescript
const value: models.FiveHundredAndNine = {
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
  inputTokens: 2453.5,
  messageId: "<id>",
  model: "Fortwo",
  outputTokens: 346.61,
  timestamp: 4004.32,
  useCase: "<value>",
};
```

### `models.FiveHundredAndTen`

```typescript
const value: models.FiveHundredAndTen = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FiveHundredAndEleven`

```typescript
const value: models.FiveHundredAndEleven = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FiveHundredAndTwelve`

```typescript
const value: models.FiveHundredAndTwelve = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: false,
    issuerUrls: [],
  },
  scope: "team",
};
```

### `models.FiveHundredAndThirteen`

```typescript
const value: models.FiveHundredAndThirteen = {
  appName: "<value>",
  atTTL: 5675.52,
  authMethod: "manual",
  grantType: "authorization_code",
  scope: "<value>",
};
```

### `models.FiveHundredAndFourteen`

```typescript
const value: models.FiveHundredAndFourteen = {
  domain: "apprehensive-mechanic.name",
  projectId: "<id>",
};
```

### `models.FiveHundredAndFifteen`

```typescript
const value: models.FiveHundredAndFifteen = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 461.66,
    issuerUrl: "https://these-fedora.biz/",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: {
      projectIds: [],
    },
    teamId: "<id>",
    updatedAt: 9423.26,
  },
};
```

### `models.FiveHundredAndSixteen`

```typescript
const value: models.FiveHundredAndSixteen = {
  after: {
    claims: [],
    clientId: "<id>",
    createdAt: 9118.75,
    issuerUrl: "https://concrete-pliers.info/",
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
    updatedAt: 33.92,
  },
  before: {
    claims: [],
    clientId: "<id>",
    createdAt: 2149.17,
    issuerUrl: "https://qualified-event.info",
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
    updatedAt: 7225.77,
  },
};
```

### `models.FiveHundredAndSeventeen`

```typescript
const value: models.FiveHundredAndSeventeen = {
  origin: "app",
  scope: "team",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FiveHundredAndEighteen`

```typescript
const value: models.FiveHundredAndEighteen = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FiveHundredAndNineteen`

```typescript
const value: models.FiveHundredAndNineteen = {
  actorTokenId: "<id>",
  deletedCount: 5843.42,
};
```


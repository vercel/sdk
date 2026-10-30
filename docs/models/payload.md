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
  channelId: "<id>",
  operationId: "<id>",
};
```

### `models.Ten`

```typescript
const value: models.Ten = {
  boardId: "<id>",
  channelId: "<id>",
  environment: "<value>",
  name: "<value>",
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  boardId: "<id>",
  channelId: "<id>",
  fields: [],
  operationId: "<id>",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  boardId: "<id>",
  operationId: "<id>",
  visibility: "private",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  boardId: "<id>",
  environments: [],
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  boardId: "<id>",
  operationId: "<id>",
  projectId: "<id>",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  operationId: "<id>",
  schemaId: "<id>",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  teamId: "<id>",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  blockCode: "<value>",
  reason: "<value>",
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  fromPlan: "pro",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "hobby",
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
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

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "set",
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  change: "enable-commitment",
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  change: "remove",
  scopeType: "api-key",
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  change: "enable",
  scopeType: "user",
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  added: [],
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

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  enabled: false,
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  amount: "963.01",
  purchaseIntentId: "<id>",
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  added: [
    "<value 1>",
  ],
  removed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.Forty`

```typescript
const value: models.Forty = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  moderationPolicyCount: 7038.08,
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
  ],
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  regions: [],
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  retention: {
    ceilingMode: "days",
    defaultMode: "days",
  },
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
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
  project: {
    id: "<id>",
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
  },
  user: {
    id: "<id>",
  },
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  aliasCount: 1567.89,
  projectId: "<id>",
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  alias: "<value>",
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
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
const value: models.SixtyOne = {};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  action: "removed",
  alias: "<value>",
  projectName: "<value>",
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  alias: "<value>",
  deploymentUrl: "https://far-flung-dress.info",
};
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
const value: models.SixtySeven = {
  appName: "<value>",
  scopes: [
    "openid",
  ],
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
  nextScopes: [],
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
  attackModeEnabled: true,
  projectId: "<id>",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  autoExposeSystemEnvs: false,
  projectName: "<value>",
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  amount: 9969.53,
  invoiceId: "<id>",
  lineItemCount: 9651.51,
  refundReason: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  amount: 3193.54,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-payment-pending",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  subscriptionId: "<id>",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  paymentMethodId: "<id>",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  changedFields: [],
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  planSlug: "<value>",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  action: "resume_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  action: "mutate",
  data: {},
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  productAliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  bulkRedirectsLimit: 3127.76,
  prevBulkRedirectsLimit: 1187.16,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  custom: true,
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  cns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  custom: false,
  id: "<id>",
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  id: "<id>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  dst: "<value>",
  src: "<value>",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  id: "<id>",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
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

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  count: 7642.14,
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

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
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

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
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
  newName: "<value>",
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  githubLogin: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  githubLogin: "<value>",
  host: "able-ceramics.org",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  gitlabLogin: "<value>",
  gitlabUserId: 1249.58,
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  prevPurchasedAmount: 4688.1,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 940.88,
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  metricName: "<value>",
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  suffix: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  status: "<value>",
  suffix: "<value>",
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
  oldPasswordProtection: {
    deploymentType: "preview",
  },
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  scope: "team",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  oldSsoProtection: null,
  scope: "organization",
  ssoProtection: null,
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  hookName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Pennsylvania",
  },
  project: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
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

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  url: "https://deficient-certification.biz/",
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
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
    prId: 2741.35,
    provider: "bitbucket",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    type: "bitbucket-now-comment",
    workspaceUuid: "<id>",
  },
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
  gitCommitterName: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  sha: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
    url: "https://well-off-bookcase.biz",
  },
  deploymentId: "<id>",
  url: "https://ornate-pinstripe.org/",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  projectName: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "team",
  source: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  mode: "none",
  previousMode: "none",
  scope: "organization",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  mode: "all",
  previousMode: "none",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: "https://quiet-editor.net",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  domain: "posh-retention.name",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  action: "add",
  domain: "natural-verve.biz",
  id: "<id>",
  initiator: "user",
  name: "<value>",
  type: "<value>",
  value: "<value>",
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
  name: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  name: "<value>",
  price: 9565.01,
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  cdnEnabled: false,
  name: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  name: "<value>",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  name: "<value>",
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  id: "<id>",
  name: "<value>",
  nameservers: [],
  previousServiceType: "<value>",
  serviceType: "<value>",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
  ],
  domain: "regal-finding.biz",
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  domain: "puny-case.org",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  domain: "valuable-vista.info",
  echMode: "auto",
  previousEchMode: "auto",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  domain: "enchanted-colon.name",
  zone: true,
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  domain: "jaunty-perp.com",
  initiator: "system",
  zone: false,
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  fromId: "<id>",
  fromName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  domain: "grounded-whale.biz",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  name: "<value>",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  name: "<value>",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  drainName: "<value>",
  drainUrl: "https://radiant-sock.com",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  drainUrl: "https://lonely-jacket.name/",
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [],
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  path: "/usr/local/src",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
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

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  email: "Lemuel98@yahoo.com",
  name: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  previousRule: {
    email: "Randi48@yahoo.com",
  },
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  deploymentId: "<id>",
  deploymentUrl: "https://shameless-farmer.com",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "config",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
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

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
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

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
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

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  configVersion: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  configChangeCount: 8093.67,
  configChanges: [],
  configVersion: 7707.04,
  projectId: "<id>",
  restore: false,
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  projectId: "<id>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  active: true,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  consumerProjectId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  action: "enable",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  source: "enable",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  actorAccountId: "<id>",
  actorLogin: "<value>",
  destinationBranch: "<value>",
  destinationRepo: "<value>",
  installationId: "<id>",
  outcome: "success",
  provider: "github",
  resultCommitSha: null,
  sourceCommitSha: "<value>",
  sourceRepo: "<value>",
  usedAppToken: false,
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    id: "<id>",
    username: "Martina_Haley",
  },
  userId: "<id>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
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

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
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

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
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

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  configurations: [],
  ownerId: "<id>",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  billingPlanId: "<id>",
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: 7678.15,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [
    {
      command: "<value>",
    },
  ],
  queryCount: 4341.56,
  queryType: "data-edit",
  readonly: true,
  resourceId: "<id>",
  rolledBack: true,
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
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

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
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
  keys: [
    "<value 1>",
  ],
  requestKind: "get_keys_metadata",
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
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 8322.01,
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  logDrainUrl: "https://fat-aftermath.org",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  logDrainUrl: "https://perfumed-reward.name",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  login: "Oleta.Parisian44",
  provider: "bitbucket",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  provider: "apple",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  invoiceCollection: false,
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
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

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  enabled: true,
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
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

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
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

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  avatar: "https://picsum.photos/seed/GJ6lo/2244/1473",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [
      "OrgAdmin",
    ],
    teamRoles: [
      "VIEWER_FOR_PLUS",
    ],
    teams: {
      "key": {
        teamRoles: [],
      },
    },
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  copiedDomains: [
    "<value 1>",
  ],
  enabledOrganizationEmu: false,
  enabledTeamIds: [
    "<value 1>",
  ],
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  enabled: false,
  enforcedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  organizationId: "<id>",
  previousEnabled: false,
  trigger: "organization_deleted",
  unenforcedTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  enabled: false,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  name: "<value>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  billingPlan: "enterprise",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  connectionType: "<value>",
  organizationId: "<id>",
  organizationSlug: "<value>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: true,
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  mode: "organization",
  organizationId: "<id>",
  previousMode: "team",
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  next: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: true,
    enforcePercentage: 7572.43,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 9296.73,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  connectSrcCount: 7075.34,
  connectSrcOriginCount: 7999.12,
  deletedCount: 5853.52,
  headerCount: 5688.08,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 9030.54,
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://impolite-jacket.net",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  projectId: "<id>",
  resourceUrl: "https://insistent-kit.name",
  type: "script",
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  projectId: "<id>",
  resourceUrl: "https://colorless-councilman.name",
  type: "connectSrc",
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "known-fun.com",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  plan: "<value>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  previousTeamSuffix: "<value>",
  projectCount: 9957.5,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
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

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
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

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
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

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
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

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  directoryListing: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  prevProjectAnalytics: null,
  projectAnalytics: {
    disabledAt: 5122.58,
    enabledAt: 5408.02,
    id: "<id>",
  },
  projectId: "<id>",
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
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
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
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  enableExternalRewriteCaching: false,
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
  productionDeploymentsFastLane: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "analytics-visitors",
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
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
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  autoAssignCustomDomains: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  enableFunctionsBeta: false,
  projectId: "<id>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  next: {
    functionDefaultTimeout: 4383.12,
  },
  previous: {
    functionDefaultTimeout: 3341.95,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
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

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
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
      "<value 2>",
      "<value 3>",
    ],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  next: {
    functionZeroConfigFailover: false,
  },
  previous: {
    functionZeroConfigFailover: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  next: {
    gitProvider: "github-custom-host",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  onPullRequest: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  onCommit: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  createDeployments: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  requireVerifiedCommits: true,
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  disableRepositoryDispatchEvents: false,
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  gitCommitStatus: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  gitLFS: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  domain: "optimal-seafood.com",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: null,
  redirectStatusCode: 2793.81,
  target: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  domain: "descriptive-custom.biz",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  domain: "tidy-making.info",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  domain: "purple-asset.org",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  projects: [],
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  domain: "dependent-blossom.info",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 4437.86,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "ADMIN",
  },
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 1375.78,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
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
  oldPasswordProtection: "all",
  passwordProtection: "preview",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
  expiresAt: 9736.14,
  projectId: "<id>",
};
```

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
  consent: "granted",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  next: {},
  previous: null,
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
  next: {
    issuerMode: "team",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  customerSupportCodeVisibility: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  gitForkProtection: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: false,
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  inheritDeploymentProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  next: {
    skewProtectionBoundaryAt: 8333.06,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  next: {
    skewProtectionMaxAge: 3939.2,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
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

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  oldSsoProtection: "prod_deployment_urls_and_all_previews",
  ssoProtection: "all",
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  addedProjects: [],
  addedProviders: [
    "<value 1>",
  ],
  projectId: "<id>",
  projectName: "<value>",
  removedProjects: [],
  removedProviders: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  connectionId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  connectionId: "<id>",
  actorType: "admin",
  created: true,
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
  signingEnabled: false,
  signingKeyId: "<id>",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
  snapshotId: "<id>",
  snapshotName: "<value>",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  projectId: "<id>",
  projectName: "<value>",
  snapshotId: "<id>",
  targetRegions: [],
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  email: "Bella.Jerde@hotmail.com",
  name: "<value>",
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  instances: 3886.81,
  url: "https://prime-embossing.biz",
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {
  email: "Hollie74@hotmail.com",
  verified: false,
};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  email: "Joshua_Crooks@yahoo.com",
  verified: false,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  email: "Judd13@gmail.com",
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  name: "<value>",
  uid: "<id>",
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  enabled: false,
  updatedAt: 8378.84,
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {
  max: 8905.55,
  min: 5937.48,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://hoarse-pomelo.name",
};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Velva.Abernathy@hotmail.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  email: "Angie.Bechtelar0@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  email: "Queenie_Witting@hotmail.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  previous: {
    sampleRatePercent: null,
    spendLimitInDollars: 3088.68,
  },
  sampleRatePercent: 5043.04,
  spendLimitInDollars: 4952.61,
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  budget: {
    budgetItem: {
      createdAt: 1895.86,
      fixedBudget: 264.23,
      id: "<id>",
      isActive: false,
      notifiedAt: [],
      previousSpend: [
        9904.39,
        4893.83,
        13.42,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {
  budget: {
    createdAt: 3515.72,
    fixedBudget: 7365.73,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      9108.23,
    ],
    previousSpend: [
      6165.95,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  budget: {
    createdAt: 7883.28,
    fixedBudget: 4751.36,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      234.07,
      5476.93,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {
  budget: {
    createdAt: 6458.55,
    fixedBudget: 9971.48,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3777.78,
      3919.31,
      7775.33,
    ],
    previousSpend: [
      4655.53,
      1165.83,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  storeType: "postgres",
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {
  store: {
    id: "<id>",
    type: "integration",
  },
};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  store: {
    id: "<id>",
    type: "blob",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  store: {
    id: "<id>",
    type: "redis",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {
  id: "<id>",
  type: "blob",
};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  id: "<id>",
  type: "blob",
  locked: false,
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  slug: "<value>",
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "all",
  },
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  next: {
    enabled: true,
    projectScope: "all",
  },
  previous: {
    enabled: false,
    projectScope: "all",
  },
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  amount: "198.85",
  currency: "CFA Franc BEAC",
  expiresAt: "1752860188822",
  trialCreditsIssuedAt: 9332.86,
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  eventId: "<id>",
  occurredAt: 4578.24,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  eventId: "<id>",
  occurredAt: 9730.9,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 9174.05,
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  githubScopeCount: 5235.89,
  githubScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopeCount: 3610.7,
  mergedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  planId: "<id>",
  requestedScopeCount: 6785.55,
  requestedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {
  eventId: "<id>",
  occurredAt: 3986.93,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 463.85,
  projectId: "<id>",
  projectName: "<value>",
  severity: "<value>",
  vulnerabilityClass: "<value>",
};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {
  next: "auto-approval",
  previous: "auto-approval",
};
```

### `models.FourHundredAndEight`

```typescript
const value: models.FourHundredAndEight = {};
```

### `models.FourHundredAndNine`

```typescript
const value: models.FourHundredAndNine = {};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  enabled: false,
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  next: {},
  previous: {},
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  action: "updated",
  targetId: "<id>",
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {
  enabled: true,
};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  enabled: true,
  environment: "preview",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  enabled: "default-force",
  environment: "production",
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
  inviteIds: [
    "<value 1>",
  ],
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  teamName: "<value>",
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  teamName: "<value>",
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Alfonzo_Runolfsdottir",
  },
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Blanche_Pacocha",
  },
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
  requestedTeamName: "<value>",
};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  previousRole: "<value>",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  authorized: true,
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  enforced: false,
};
```

### `models.FourHundredAndThirtyOne`

```typescript
const value: models.FourHundredAndThirtyOne = {
  expiresAt: "1743764976127",
  maxUses: 8582.4,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.FourHundredAndThirtyTwo`

```typescript
const value: models.FourHundredAndThirtyTwo = {
  publicId: "<id>",
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  nextConcurrentBuilds: 2642.8,
  previousConcurrentBuilds: 3611.45,
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  plan: "pro",
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {
  convertedFromTrial: true,
  invoiceId: "<id>",
  plan: "pro",
};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  decision: "turn_off",
  version: "<value>",
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  acceptanceId: "<id>",
  termsVersion: "<value>",
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  consent: "refused",
};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  deletedCount: 553.75,
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  enabled: "off",
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  enabled: true,
  scope: "dashboard",
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  domain: "ecstatic-formation.com",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  tokenTypes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  exportId: "<id>",
  format: "<value>",
  from: 6690.4,
  to: 7744.17,
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  fileId: "<id>",
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndFiftyFive`

```typescript
const value: models.FourHundredAndFiftyFive = {
  organizationId: "<id>",
};
```

### `models.FourHundredAndFiftySix`

```typescript
const value: models.FourHundredAndFiftySix = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
  ],
};
```

### `models.FourHundredAndFiftySeven`

```typescript
const value: models.FourHundredAndFiftySeven = {};
```

### `models.FourHundredAndFiftyEight`

```typescript
const value: models.FourHundredAndFiftyEight = {
  recoveryCodes: 1480.08,
  totp: false,
};
```

### `models.FourHundredAndFiftyNine`

```typescript
const value: models.FourHundredAndFiftyNine = {
  username: "Maida21",
};
```

### `models.FourHundredAndSixty`

```typescript
const value: models.FourHundredAndSixty = {
  username: "Lonie_Daniel",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSixtyOne`

```typescript
const value: models.FourHundredAndSixtyOne = {
  username: "Fidel.Wuckert",
};
```

### `models.FourHundredAndSixtyTwo`

```typescript
const value: models.FourHundredAndSixtyTwo = {
  teamName: "<value>",
};
```

### `models.FourHundredAndSixtyThree`

```typescript
const value: models.FourHundredAndSixtyThree = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndSixtyFour`

```typescript
const value: models.FourHundredAndSixtyFour = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSixtyFive`

```typescript
const value: models.FourHundredAndSixtyFive = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndSixtySix`

```typescript
const value: models.FourHundredAndSixtySix = {
  actorId: "<id>",
  actorType: "admin",
  enabled: false,
};
```

### `models.FourHundredAndSixtySeven`

```typescript
const value: models.FourHundredAndSixtySeven = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

### `models.FourHundredAndSixtyEight`

```typescript
const value: models.FourHundredAndSixtyEight = {
  method: "totp",
  reason: "<value>",
};
```

### `models.FourHundredAndSixtyNine`

```typescript
const value: models.FourHundredAndSixtyNine = {
  allowedMethods: [
    "totp",
  ],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndSeventy`

```typescript
const value: models.FourHundredAndSeventy = {
  action: "remove-passkey",
  reason: "<value>",
};
```

### `models.FourHundredAndSeventyOne`

```typescript
const value: models.FourHundredAndSeventyOne = {
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

### `models.FourHundredAndSeventyTwo`

```typescript
const value: models.FourHundredAndSeventyTwo = {
  remaining: 6847.3,
};
```

### `models.FourHundredAndSeventyThree`

```typescript
const value: models.FourHundredAndSeventyThree = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndSeventyFour`

```typescript
const value: models.FourHundredAndSeventyFour = {
  mfa: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndSeventyFive`

```typescript
const value: models.FourHundredAndSeventyFive = {
  enabled: true,
  totpVerified: true,
};
```

### `models.FourHundredAndSeventySix`

```typescript
const value: models.FourHundredAndSeventySix = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.FourHundredAndSeventySeven`

```typescript
const value: models.FourHundredAndSeventySeven = {
  decision: {
    authoritative: true,
    basis: "none",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "google",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndSeventyEight`

```typescript
const value: models.FourHundredAndSeventyEight = {
  email: "Treva86@yahoo.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndSeventyNine`

```typescript
const value: models.FourHundredAndSeventyNine = {
  email: "Jaycee.Stehr@yahoo.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEighty`

```typescript
const value: models.FourHundredAndEighty = {
  username: "Elton36",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndEightyOne`

```typescript
const value: models.FourHundredAndEightyOne = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndEightyTwo`

```typescript
const value: models.FourHundredAndEightyTwo = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndEightyThree`

```typescript
const value: models.FourHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndEightyFour`

```typescript
const value: models.FourHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndEightyFive`

```typescript
const value: models.FourHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndEightySix`

```typescript
const value: models.FourHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

### `models.FourHundredAndEightySeven`

```typescript
const value: models.FourHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
  repositoryName: "<value>",
};
```

### `models.FourHundredAndEightyEight`

```typescript
const value: models.FourHundredAndEightyEight = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndEightyNine`

```typescript
const value: models.FourHundredAndEightyNine = {
  nextProjectCount: 6971,
  previousProjectCount: 2295.51,
};
```

### `models.FourHundredAndNinety`

```typescript
const value: models.FourHundredAndNinety = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndNinetyOne`

```typescript
const value: models.FourHundredAndNinetyOne = {
  ciEnabled: false,
  organizationId: "<id>",
  repository: "<value>",
};
```

### `models.FourHundredAndNinetyTwo`

```typescript
const value: models.FourHundredAndNinetyTwo = {
  protectedProjectCount: 4832.16,
  protectionEnabled: false,
  vulnerabilities: [],
};
```

### `models.FourHundredAndNinetyThree`

```typescript
const value: models.FourHundredAndNinetyThree = {
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

### `models.FourHundredAndNinetyFour`

```typescript
const value: models.FourHundredAndNinetyFour = {
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

### `models.FourHundredAndNinetyFive`

```typescript
const value: models.FourHundredAndNinetyFive = {
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

### `models.FourHundredAndNinetySix`

```typescript
const value: models.FourHundredAndNinetySix = {
  tier: "plus",
};
```

### `models.FourHundredAndNinetySeven`

```typescript
const value: models.FourHundredAndNinetySeven = {
  id: "<id>",
  url: "https://decisive-atrium.net",
};
```

### `models.FourHundredAndNinetyEight`

```typescript
const value: models.FourHundredAndNinetyEight = {
  chatId: "<id>",
};
```

### `models.FourHundredAndNinetyNine`

```typescript
const value: models.FourHundredAndNinetyNine = {
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
  inputTokens: 817.41,
  messageId: "<id>",
  model: "Durango",
  outputTokens: 4258.19,
  timestamp: 6911.55,
  useCase: "<value>",
};
```

### `models.FiveHundred`

```typescript
const value: models.FiveHundred = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FiveHundredAndOne`

```typescript
const value: models.FiveHundredAndOne = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FiveHundredAndTwo`

```typescript
const value: models.FiveHundredAndTwo = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
    ],
  },
  scope: "team",
};
```

### `models.FiveHundredAndThree`

```typescript
const value: models.FiveHundredAndThree = {
  appName: "<value>",
  atTTL: 1735.35,
  authMethod: "passkey",
  grantType: "urn:ietf:params:oauth:grant-type:device_code",
  scope: "<value>",
};
```

### `models.FiveHundredAndFour`

```typescript
const value: models.FiveHundredAndFour = {
  domain: "hurtful-seal.name",
  projectId: "<id>",
};
```

### `models.FiveHundredAndFive`

```typescript
const value: models.FiveHundredAndFive = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 7486.07,
    issuerUrl: "https://colossal-monocle.info",
    name: "<value>",
    permissions: [
      "<value 1>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
      ],
    },
    teamId: "<id>",
    updatedAt: 820.73,
  },
};
```

### `models.FiveHundredAndSix`

```typescript
const value: models.FiveHundredAndSix = {
  after: {
    claims: [],
    clientId: "<id>",
    createdAt: 1544.49,
    issuerUrl: "https://devoted-exterior.org/",
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
    updatedAt: 6186.56,
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
    createdAt: 7099.55,
    issuerUrl: "https://tender-fedora.info",
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
    updatedAt: 6801.17,
  },
};
```

### `models.FiveHundredAndSeven`

```typescript
const value: models.FiveHundredAndSeven = {
  origin: "app",
  scope: "team",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FiveHundredAndEight`

```typescript
const value: models.FiveHundredAndEight = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FiveHundredAndNine`

```typescript
const value: models.FiveHundredAndNine = {
  actorTokenId: "<id>",
  deletedCount: 7043.95,
};
```


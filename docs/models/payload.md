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
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  teamId: "<id>",
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  blockCode: "<value>",
  reason: "<value>",
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  fromPlan: "pro",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "hobby",
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
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

### `models.Twenty`

```typescript
const value: models.Twenty = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
  change: "set",
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  change: "enable-commitment",
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  change: "set",
  scopeType: "api-key",
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {
  change: "enable",
  scopeType: "team",
};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  added: [
    "<value 1>",
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
    "<value 3>",
  ],
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  enabled: false,
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {
  amount: "611.04",
  purchaseIntentId: "<id>",
};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [],
};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  privateModel: {
    slug: "<value>",
  },
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  privateProvider: {
    slug: "<value>",
  },
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  moderationPolicyCount: 1619.73,
  piiRedaction: {
    from: false,
    to: true,
  },
  policiesAdded: [
    "<value 1>",
  ],
  policiesModified: [],
  policiesRemoved: [
    "<value 1>",
  ],
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  regions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  retention: {
    ceilingMode: "until-requested",
    defaultMode: "until-requested",
  },
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

### `models.Forty`

```typescript
const value: models.Forty = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  author: "<value>",
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
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
  },
  user: {
    id: "<id>",
  },
};
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
  aliasCount: 8401.55,
  projectId: "<id>",
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  alias: "<value>",
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {};
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
  action: "created",
  alias: "<value>",
  projectName: "<value>",
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  alias: "<value>",
  deploymentUrl: "https://husky-gripper.biz/",
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  appName: "<value>",
  scopes: [],
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  appName: "<value>",
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  appName: "<value>",
  nextScopes: [
    "openid",
  ],
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  appName: "<value>",
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
  attackModeEnabled: false,
  projectId: "<id>",
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  autoExposeSystemEnvs: true,
  projectName: "<value>",
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  amount: 6263.19,
  invoiceId: "<id>",
  lineItemCount: 3188.99,
  refundReason: "<value>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  amount: 5823,
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "credited-paid",
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  paymentMethodId: "<id>",
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  changedFields: [
    "language",
  ],
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  planSlug: "<value>",
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  action: "resume_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  action: "mutate",
  data: {},
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  productAliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  bulkRedirectsLimit: 3193.54,
  prevBulkRedirectsLimit: 3187.48,
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  custom: false,
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  cns: [
    "<value 1>",
  ],
  custom: true,
  id: "<id>",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  id: "<id>",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  dst: "<value>",
  src: "<value>",
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  id: "<id>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
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

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  count: 160.09,
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

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
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

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
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

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
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

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
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

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  githubLogin: "<value>",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  githubLogin: "<value>",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  githubLogin: "<value>",
  host: "whole-platypus.org",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  gitlabLogin: "<value>",
  gitlabUserId: 7642.14,
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  bitbucketAccountId: "<id>",
  bitbucketLogin: "<value>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  prevPurchasedAmount: 9509.85,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 8284.36,
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  metricName: "<value>",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  suffix: "<value>",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  suffix: "<value>",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  scope: "team",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  scope: "team",
  ssoProtection: {
    deploymentType: "preview",
  },
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  hookName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  ref: "<value>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Arkansas",
  },
  project: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  checkId: "<id>",
  checkName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  url: "https://burdensome-signature.com/",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  job: {
    headInfo: {
      owner: "<value>",
      ownerId: "<id>",
      ref: "<value>",
      repo: "<value>",
      repoId: "<id>",
      sha: "<value>",
    },
    installationId: "<id>",
    owner: "<value>",
    prId: 4962.06,
    projectId: "<id>",
    provider: "cursor-origin",
    repo: "<value>",
    repoId: "<id>",
    type: "cursor-origin-now-comment",
  },
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  url: "https://steep-license.org/",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  gitCommitterName: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  sha: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    name: "<value>",
    url: "https://french-simple.name",
  },
  deploymentId: "<id>",
  url: "https://austere-smoke.org",
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  projectName: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "project",
  source: "<value>",
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  mode: null,
  previousMode: null,
  scope: "organization",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  mode: "email-domain",
  previousMode: "none",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  deploymentId: "<id>",
  deploymentName: "<value>",
  deploymentUrl: null,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  domain: "ruddy-bidet.net",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  action: "delete",
  domain: "deficient-certification.biz",
  id: "<id>",
  initiator: "user",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  domain: "compassionate-drug.name",
  id: "<id>",
  name: "<value>",
  type: "<value>",
  value: "<value>",
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
  price: 3678.3,
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  cdnEnabled: false,
  name: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  name: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  name: "<value>",
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
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

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  customNameservers: null,
  domain: "swift-retrospectivity.net",
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  domain: "posh-retention.name",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  domain: "authentic-maestro.org",
  echMode: "auto",
  previousEchMode: "disabled",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  domain: "colossal-chainstay.name",
  zone: false,
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  domain: "infinite-sauerkraut.biz",
  initiator: "system",
  zone: false,
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  fromId: "<id>",
  fromName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  domain: "frivolous-dredger.org",
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
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  drainName: "<value>",
  drainUrl: "https://grandiose-daddy.info",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  drainUrl: "https://unwritten-meatloaf.org/",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  path: "/opt/share",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  edgeConfigDigest: "<value>",
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
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

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  email: "Jeromy_Schiller@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  previousRule: {
    email: "Jarod.Gorczany23@gmail.com",
  },
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  deploymentId: "<id>",
  deploymentUrl: "https://infinite-dredger.info/",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "config",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
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

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [],
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
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

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  configVersion: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  configVersion: "<value>",
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  configChangeCount: 5708.94,
  configChanges: [],
  configVersion: 4767.34,
  projectId: "<id>",
  restore: true,
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  projectId: "<id>",
  ruleGroups: {},
  rulesetName: "<value>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  active: false,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  action: "enable",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  source: "upgrade",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  actorAccountId: "<id>",
  actorLogin: "<value>",
  destinationBranch: "<value>",
  destinationRepo: "<value>",
  installationId: "<id>",
  outcome: "failure",
  provider: "gitlab",
  resultCommitSha: "<value>",
  sourceCommitSha: null,
  sourceRepo: null,
  usedAppToken: true,
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  fromDeploymentId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 5039.84,
    createdAt: 90.43,
    deploymentSecret: "<value>",
    email: "Colin_Block38@hotmail.com",
    id: "<id>",
    platformVersion: 6260.19,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    updatedAt: 1793.55,
    username: "Arely_Volkman13",
    version: "northstar",
  },
  userId: "<id>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
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

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
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

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
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

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
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

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  billingPlanId: "<id>",
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: 2298.46,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [],
  queryCount: 3950.77,
  queryType: "user",
  readonly: true,
  resourceId: "<id>",
  rolledBack: false,
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
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

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
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

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  key: "<key>",
  requestKind: "get_key_data",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
  policyKey: "<value>",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  logDrainUrl: "https://plump-jellyfish.biz/",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  logDrainUrl: "https://old-aircraft.info/",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  login: "Halie_Koss",
  provider: "github-custom-host",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  provider: "github-limited",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  toDeploymentId: "<id>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  invoiceCollection: true,
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  periods: [],
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  enabled: true,
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  id: "<id>",
  prev: {
    fallbackEnvironment: "<value>",
    name: "<value>",
    slug: "<value>",
  },
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
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

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
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

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  alertId: "<id>",
  alertName: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  projectName: "<value>",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  avatar: "https://picsum.photos/seed/kcjrL/2405/3035",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  name: "<value>",
  organizationId: "<id>",
  rootTeamId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {},
  },
  organizationId: "<id>",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  copiedDomains: [
    "<value 1>",
    "<value 2>",
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

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  enabled: false,
  enforcedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  organizationId: "<id>",
  previousEnabled: false,
  trigger: "team_participation_updated",
  unenforcedTeamIds: [
    "<value 1>",
  ],
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  enabled: false,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  organizationId: "<id>",
  slug: "<value>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  billingPlan: "enterprise",
  organizationId: "<id>",
  teamId: "<id>",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: true,
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "organization",
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 4549.47,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: false,
    enforcePercentage: 8621.89,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  connectSrcCount: 1314.37,
  connectSrcOriginCount: 3848.34,
  deletedCount: 3743.73,
  headerCount: 3580.15,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 236.32,
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://peppery-governance.net/",
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
  resourceUrl: "https://submissive-nudge.info",
  type: "script",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  projectId: "<id>",
  resourceUrl: "https://worthy-embossing.net",
  type: "connectSrc",
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "puzzled-defendant.info",
  projectId: "<id>",
  sessionId: "<id>",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  next: {},
  previous: {},
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  plan: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  plan: "<value>",
  actorId: "<id>",
  actorType: "admin",
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
  previousTeamSuffix: "<value>",
  projectCount: 9624.89,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
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

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
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

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  branch: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  directoryListing: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  prevProjectAnalytics: {
    disabledAt: 53.61,
    enabledAt: 3409.88,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 2966.43,
    enabledAt: 9481.77,
    id: "<id>",
  },
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  enableExternalRewriteCaching: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  productionDeploymentsFastLane: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: false,
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  nextBuildMachineSelection: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "speed-insights-res",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
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

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  action: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  autoAssignCustomDomains: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  previewDeploymentsEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  enableSchedulesByDefault: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  enableFunctionsBeta: false,
  projectId: "<id>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  next: {
    functionDefaultTimeout: 9659.32,
  },
  previous: {
    functionDefaultTimeout: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
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

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
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

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
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

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  newProjectName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  next: {
    gitProvider: "github-limited",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  gitProvider: "bitbucket",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  onPullRequest: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  onCommit: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  createDeployments: "enabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  requireVerifiedCommits: false,
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  gitCommitStatus: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  gitLFS: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  consolidatedGitCommitStatus: {
    enabled: false,
    propagateFailures: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  next: {},
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  domain: "wide-eyed-assist.name",
  gitBranch: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  redirect: "<value>",
  redirectStatusCode: 1687.23,
  target: "<value>",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  domain: "jittery-diagram.info",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  domain: "oddball-league.org",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  domain: "uneven-council.org",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  projects: [
    {
      membershipCreatedAt: 2182.31,
      projectId: "<id>",
      role: "PROJECT_VIEWER",
    },
  ],
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  domain: "prime-fishery.net",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 2475.64,
    role: "PROJECT_VIEWER",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_DEVELOPER",
  },
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 4080.81,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  projectId: "<id>",
  projectName: "<value>",
  source: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  oldPasswordProtection: "all_except_custom_domains",
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  projectId: "<id>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  expiresAt: 1573.36,
  projectId: "<id>",
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
  consent: "refused",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
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
  projectId: "<id>",
  projectName: "<value>",
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
  next: {},
  previous: null,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  next: {
    issuerMode: "global",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  customerSupportCodeVisibility: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  gitForkProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  inheritDeploymentProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  next: {},
  previous: {},
};
```

### `models.ThreeHundredAndThirtyThree`

```typescript
const value: models.ThreeHundredAndThirtyThree = {
  next: {
    skewProtectionBoundaryAt: 1837.32,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyFour`

```typescript
const value: models.ThreeHundredAndThirtyFour = {
  next: {
    skewProtectionMaxAge: 1045.89,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyFive`

```typescript
const value: models.ThreeHundredAndThirtyFive = {
  next: {
    skewProtectionAllowedDomains: [],
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtySix`

```typescript
const value: models.ThreeHundredAndThirtySix = {
  oldSsoProtection: "prod_deployment_urls_and_all_previews",
  ssoProtection: "all_except_custom_domains",
};
```

### `models.ThreeHundredAndThirtySeven`

```typescript
const value: models.ThreeHundredAndThirtySeven = {
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

### `models.ThreeHundredAndThirtyEight`

```typescript
const value: models.ThreeHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndThirtyNine`

```typescript
const value: models.ThreeHundredAndThirtyNine = {
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
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndForty`

```typescript
const value: models.ThreeHundredAndForty = {
  projectId: "<id>",
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
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.ThreeHundredAndFortyThree`

```typescript
const value: models.ThreeHundredAndFortyThree = {
  connectionId: "<id>",
  connectionType: "<value>",
};
```

### `models.ThreeHundredAndFortyFour`

```typescript
const value: models.ThreeHundredAndFortyFour = {
  alias: "<value>",
  sandboxName: "<value>",
};
```

### `models.ThreeHundredAndFortyFive`

```typescript
const value: models.ThreeHundredAndFortyFive = {
  driveName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  region: "<value>",
};
```

### `models.ThreeHundredAndFortySix`

```typescript
const value: models.ThreeHundredAndFortySix = {
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

### `models.ThreeHundredAndFortySeven`

```typescript
const value: models.ThreeHundredAndFortySeven = {
  email: "Scotty99@hotmail.com",
  name: "<value>",
  projectId: "<id>",
  sandboxId: "<id>",
};
```

### `models.ThreeHundredAndFortyEight`

```typescript
const value: models.ThreeHundredAndFortyEight = {
  instances: 9528.58,
  url: "https://majestic-fog.biz/",
};
```

### `models.ThreeHundredAndFortyNine`

```typescript
const value: models.ThreeHundredAndFortyNine = {
  email: "Alvis_Lynch63@hotmail.com",
  verified: true,
};
```

### `models.ThreeHundredAndFifty`

```typescript
const value: models.ThreeHundredAndFifty = {
  email: "Dianna.Kuhlman20@yahoo.com",
  verified: true,
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.ThreeHundredAndFiftyOne`

```typescript
const value: models.ThreeHundredAndFiftyOne = {
  email: "Mellie_Walsh@yahoo.com",
};
```

### `models.ThreeHundredAndFiftyTwo`

```typescript
const value: models.ThreeHundredAndFiftyTwo = {
  name: "<value>",
  uid: "<id>",
};
```

### `models.ThreeHundredAndFiftyThree`

```typescript
const value: models.ThreeHundredAndFiftyThree = {
  newName: "<value>",
  oldName: "<value>",
};
```

### `models.ThreeHundredAndFiftyFour`

```typescript
const value: models.ThreeHundredAndFiftyFour = {
  enabled: true,
  updatedAt: 6537.71,
};
```

### `models.ThreeHundredAndFiftyFive`

```typescript
const value: models.ThreeHundredAndFiftyFive = {
  bio: "<value>",
};
```

### `models.ThreeHundredAndFiftySix`

```typescript
const value: models.ThreeHundredAndFiftySix = {
  max: 3993.73,
  min: 9120.6,
  scalingRules: {
    "key": {
      max: 7732.79,
      min: 2712.29,
    },
  },
  url: "https://reasonable-chap.info",
};
```

### `models.ThreeHundredAndFiftySeven`

```typescript
const value: models.ThreeHundredAndFiftySeven = {};
```

### `models.ThreeHundredAndFiftyEight`

```typescript
const value: models.ThreeHundredAndFiftyEight = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
  bitbucketName: "<value>",
  email: "Virginia46@yahoo.com",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndFiftyNine`

```typescript
const value: models.ThreeHundredAndFiftyNine = {
  email: "Jamarcus.Orn@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixty`

```typescript
const value: models.ThreeHundredAndSixty = {
  email: "Tevin36@hotmail.com",
  gitlabEmail: "<value>",
  gitlabLogin: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.ThreeHundredAndSixtyOne`

```typescript
const value: models.ThreeHundredAndSixtyOne = {
  previous: {
    sampleRatePercent: 3419.62,
    spendLimitInDollars: 8514.55,
  },
  sampleRatePercent: 3385.9,
  spendLimitInDollars: 8877.05,
};
```

### `models.ThreeHundredAndSixtyTwo`

```typescript
const value: models.ThreeHundredAndSixtyTwo = {
  budget: {
    budgetItem: {
      createdAt: 6343.73,
      fixedBudget: 3035.81,
      id: "<id>",
      isActive: true,
      notifiedAt: [],
      previousSpend: [
        271.57,
        1105.44,
        2042.55,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

### `models.ThreeHundredAndSixtyThree`

```typescript
const value: models.ThreeHundredAndSixtyThree = {
  budget: {
    createdAt: 3892.1,
    fixedBudget: 5666.62,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      8788.01,
      1890.18,
      995.97,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSixtyFour`

```typescript
const value: models.ThreeHundredAndSixtyFour = {
  budget: {
    createdAt: 5282.4,
    fixedBudget: 9052.14,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      6274.41,
      8199.93,
    ],
    previousSpend: [
      2031.03,
      3912.38,
      6346.26,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSixtyFive`

```typescript
const value: models.ThreeHundredAndSixtyFive = {
  budget: {
    createdAt: 2111.32,
    fixedBudget: 7544.95,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      4089.82,
      3842.33,
      5326.27,
    ],
    previousSpend: [
      8509.84,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

### `models.ThreeHundredAndSixtySix`

```typescript
const value: models.ThreeHundredAndSixtySix = {};
```

### `models.ThreeHundredAndSixtySeven`

```typescript
const value: models.ThreeHundredAndSixtySeven = {
  storeType: "redis",
};
```

### `models.ThreeHundredAndSixtyEight`

```typescript
const value: models.ThreeHundredAndSixtyEight = {
  store: {
    id: "<id>",
    type: "redis",
  },
  transferRequestCode: "<value>",
};
```

### `models.ThreeHundredAndSixtyNine`

```typescript
const value: models.ThreeHundredAndSixtyNine = {
  store: {
    id: "<id>",
    type: "redis",
  },
  transferRequestCode: "<value>",
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventy`

```typescript
const value: models.ThreeHundredAndSeventy = {
  store: {
    id: "<id>",
    type: "integration",
  },
  transferRequestCode: "<value>",
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.ThreeHundredAndSeventyOne`

```typescript
const value: models.ThreeHundredAndSeventyOne = {
  id: "<id>",
  type: "blob",
};
```

### `models.ThreeHundredAndSeventyTwo`

```typescript
const value: models.ThreeHundredAndSeventyTwo = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThreeHundredAndSeventyThree`

```typescript
const value: models.ThreeHundredAndSeventyThree = {
  id: "<id>",
  type: "edge-config",
  locked: false,
};
```

### `models.ThreeHundredAndSeventyFour`

```typescript
const value: models.ThreeHundredAndSeventyFour = {};
```

### `models.ThreeHundredAndSeventyFive`

```typescript
const value: models.ThreeHundredAndSeventyFive = {
  slug: "<value>",
};
```

### `models.ThreeHundredAndSeventySix`

```typescript
const value: models.ThreeHundredAndSeventySix = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "private",
  },
};
```

### `models.ThreeHundredAndSeventySeven`

```typescript
const value: models.ThreeHundredAndSeventySeven = {
  amount: "113.99",
  currency: "Bhutanese Ngultrum",
  expiresAt: "1735921213597",
  trialCreditsIssuedAt: 6593.48,
};
```

### `models.ThreeHundredAndSeventyEight`

```typescript
const value: models.ThreeHundredAndSeventyEight = {
  eventId: "<id>",
  occurredAt: 6545.82,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

### `models.ThreeHundredAndSeventyNine`

```typescript
const value: models.ThreeHundredAndSeventyNine = {
  eventId: "<id>",
  occurredAt: 6297.61,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 8378.84,
  elevatedScopes: [
    "<value 1>",
  ],
  githubScopeCount: 7650.27,
  githubScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopeCount: 6565.35,
  mergedScopes: [],
  planId: "<id>",
  requestedScopeCount: 6723.67,
  requestedScopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndEighty`

```typescript
const value: models.ThreeHundredAndEighty = {
  next: "block",
  previous: "manual-approval",
};
```

### `models.ThreeHundredAndEightyOne`

```typescript
const value: models.ThreeHundredAndEightyOne = {};
```

### `models.ThreeHundredAndEightyTwo`

```typescript
const value: models.ThreeHundredAndEightyTwo = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

### `models.ThreeHundredAndEightyThree`

```typescript
const value: models.ThreeHundredAndEightyThree = {
  enabled: false,
};
```

### `models.ThreeHundredAndEightyFour`

```typescript
const value: models.ThreeHundredAndEightyFour = {
  next: {},
  previous: null,
};
```

### `models.ThreeHundredAndEightyFive`

```typescript
const value: models.ThreeHundredAndEightyFive = {
  enabled: false,
};
```

### `models.ThreeHundredAndEightySix`

```typescript
const value: models.ThreeHundredAndEightySix = {
  enabled: null,
  environment: "production",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.ThreeHundredAndEightySeven`

```typescript
const value: models.ThreeHundredAndEightySeven = {
  enabled: "default",
  environment: "production",
};
```

### `models.ThreeHundredAndEightyEight`

```typescript
const value: models.ThreeHundredAndEightyEight = {};
```

### `models.ThreeHundredAndEightyNine`

```typescript
const value: models.ThreeHundredAndEightyNine = {
  deletedCount: 7883.28,
  inviteIds: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndNinety`

```typescript
const value: models.ThreeHundredAndNinety = {};
```

### `models.ThreeHundredAndNinetyOne`

```typescript
const value: models.ThreeHundredAndNinetyOne = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndNinetyTwo`

```typescript
const value: models.ThreeHundredAndNinetyTwo = {
  teamName: "<value>",
};
```

### `models.ThreeHundredAndNinetyThree`

```typescript
const value: models.ThreeHundredAndNinetyThree = {};
```

### `models.ThreeHundredAndNinetyFour`

```typescript
const value: models.ThreeHundredAndNinetyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Christophe37",
  },
};
```

### `models.ThreeHundredAndNinetyFive`

```typescript
const value: models.ThreeHundredAndNinetyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Santina_Mayert",
  },
};
```

### `models.ThreeHundredAndNinetySix`

```typescript
const value: models.ThreeHundredAndNinetySix = {};
```

### `models.ThreeHundredAndNinetySeven`

```typescript
const value: models.ThreeHundredAndNinetySeven = {
  requestedTeamName: "<value>",
};
```

### `models.ThreeHundredAndNinetyEight`

```typescript
const value: models.ThreeHundredAndNinetyEight = {
  previousRole: "<value>",
};
```

### `models.ThreeHundredAndNinetyNine`

```typescript
const value: models.ThreeHundredAndNinetyNine = {
  authorized: true,
};
```

### `models.FourHundred`

```typescript
const value: models.FourHundred = {
  enforced: false,
};
```

### `models.FourHundredAndOne`

```typescript
const value: models.FourHundredAndOne = {
  expiresAt: "1763325289979",
  maxUses: 7095.95,
  publicId: "<id>",
  role: "<value>",
};
```

### `models.FourHundredAndTwo`

```typescript
const value: models.FourHundredAndTwo = {
  publicId: "<id>",
};
```

### `models.FourHundredAndThree`

```typescript
const value: models.FourHundredAndThree = {
  nextConcurrentBuilds: 1988.51,
  previousConcurrentBuilds: 9392.37,
};
```

### `models.FourHundredAndFour`

```typescript
const value: models.FourHundredAndFour = {
  plan: "hobby",
};
```

### `models.FourHundredAndFive`

```typescript
const value: models.FourHundredAndFive = {
  convertedFromTrial: false,
  invoiceId: "<id>",
  plan: "pro",
};
```

### `models.FourHundredAndSix`

```typescript
const value: models.FourHundredAndSix = {};
```

### `models.FourHundredAndSeven`

```typescript
const value: models.FourHundredAndSeven = {};
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
  decision: "keep_on",
  version: "<value>",
};
```

### `models.FourHundredAndTen`

```typescript
const value: models.FourHundredAndTen = {
  consent: "refused",
};
```

### `models.FourHundredAndEleven`

```typescript
const value: models.FourHundredAndEleven = {};
```

### `models.FourHundredAndTwelve`

```typescript
const value: models.FourHundredAndTwelve = {
  deletedCount: 5326.88,
};
```

### `models.FourHundredAndThirteen`

```typescript
const value: models.FourHundredAndThirteen = {
  enabled: "on",
};
```

### `models.FourHundredAndFourteen`

```typescript
const value: models.FourHundredAndFourteen = {
  enabled: false,
  scope: "log-drains",
};
```

### `models.FourHundredAndFifteen`

```typescript
const value: models.FourHundredAndFifteen = {};
```

### `models.FourHundredAndSixteen`

```typescript
const value: models.FourHundredAndSixteen = {
  domain: "stark-council.com",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.FourHundredAndSeventeen`

```typescript
const value: models.FourHundredAndSeventeen = {
  tokenTypes: [],
};
```

### `models.FourHundredAndEighteen`

```typescript
const value: models.FourHundredAndEighteen = {
  exportId: "<id>",
  format: "<value>",
  from: 9832.3,
  to: 264.39,
};
```

### `models.FourHundredAndNineteen`

```typescript
const value: models.FourHundredAndNineteen = {
  fileId: "<id>",
};
```

### `models.FourHundredAndTwenty`

```typescript
const value: models.FourHundredAndTwenty = {};
```

### `models.FourHundredAndTwentyOne`

```typescript
const value: models.FourHundredAndTwentyOne = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndTwentyTwo`

```typescript
const value: models.FourHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.FourHundredAndTwentyThree`

```typescript
const value: models.FourHundredAndTwentyThree = {
  reason: "limits-exceeded",
};
```

### `models.FourHundredAndTwentyFour`

```typescript
const value: models.FourHundredAndTwentyFour = {
  organizationId: "<id>",
};
```

### `models.FourHundredAndTwentyFive`

```typescript
const value: models.FourHundredAndTwentyFive = {
  organizationId: "<id>",
  teamIds: [],
};
```

### `models.FourHundredAndTwentySix`

```typescript
const value: models.FourHundredAndTwentySix = {};
```

### `models.FourHundredAndTwentySeven`

```typescript
const value: models.FourHundredAndTwentySeven = {
  recoveryCodes: 5567.63,
  totp: true,
};
```

### `models.FourHundredAndTwentyEight`

```typescript
const value: models.FourHundredAndTwentyEight = {
  username: "Shanny.Bashirian",
};
```

### `models.FourHundredAndTwentyNine`

```typescript
const value: models.FourHundredAndTwentyNine = {
  username: "Cathrine.OConnell11",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirty`

```typescript
const value: models.FourHundredAndThirty = {
  username: "Sienna.Boyle",
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
const value: models.FourHundredAndThirtyTwo = {
  teamId: "<id>",
  teamName: "<value>",
};
```

### `models.FourHundredAndThirtyThree`

```typescript
const value: models.FourHundredAndThirtyThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirtyFour`

```typescript
const value: models.FourHundredAndThirtyFour = {
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndThirtyFive`

```typescript
const value: models.FourHundredAndThirtyFive = {
  actorId: "<id>",
  actorType: "admin",
  enabled: true,
};
```

### `models.FourHundredAndThirtySix`

```typescript
const value: models.FourHundredAndThirtySix = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

### `models.FourHundredAndThirtySeven`

```typescript
const value: models.FourHundredAndThirtySeven = {
  method: "recovery-code",
  reason: "<value>",
};
```

### `models.FourHundredAndThirtyEight`

```typescript
const value: models.FourHundredAndThirtyEight = {
  allowedMethods: [],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

### `models.FourHundredAndThirtyNine`

```typescript
const value: models.FourHundredAndThirtyNine = {
  action: "regenerate-recovery-codes",
  reason: "<value>",
};
```

### `models.FourHundredAndForty`

```typescript
const value: models.FourHundredAndForty = {
  next: {
    enabled: false,
    totpVerified: false,
  },
  previous: {
    enabled: false,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndFortyOne`

```typescript
const value: models.FourHundredAndFortyOne = {
  remaining: 6506.78,
};
```

### `models.FourHundredAndFortyTwo`

```typescript
const value: models.FourHundredAndFortyTwo = {
  mfaEnabled: false,
};
```

### `models.FourHundredAndFortyThree`

```typescript
const value: models.FourHundredAndFortyThree = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndFortyFour`

```typescript
const value: models.FourHundredAndFortyFour = {
  enabled: true,
  totpVerified: true,
};
```

### `models.FourHundredAndFortyFive`

```typescript
const value: models.FourHundredAndFortyFive = {
  next: {
    enabled: true,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: true,
  },
};
```

### `models.FourHundredAndFortySix`

```typescript
const value: models.FourHundredAndFortySix = {
  decision: {
    authoritative: false,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "lookup-error",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

### `models.FourHundredAndFortySeven`

```typescript
const value: models.FourHundredAndFortySeven = {
  email: "Florencio_Tromp17@gmail.com",
  prevEmail: "<value>",
};
```

### `models.FourHundredAndFortyEight`

```typescript
const value: models.FourHundredAndFortyEight = {
  email: "Camilla.Tremblay@hotmail.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFortyNine`

```typescript
const value: models.FourHundredAndFortyNine = {
  username: "Marcelle31",
  actorId: "<id>",
  actorType: "admin",
};
```

### `models.FourHundredAndFifty`

```typescript
const value: models.FourHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftyOne`

```typescript
const value: models.FourHundredAndFiftyOne = {
  digest: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftyTwo`

```typescript
const value: models.FourHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftyThree`

```typescript
const value: models.FourHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

### `models.FourHundredAndFiftyFour`

```typescript
const value: models.FourHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

### `models.FourHundredAndFiftyFive`

```typescript
const value: models.FourHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftySix`

```typescript
const value: models.FourHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [
    "<value 1>",
  ],
  repositoryName: "<value>",
};
```

### `models.FourHundredAndFiftySeven`

```typescript
const value: models.FourHundredAndFiftySeven = {
  ruleName: "<value>",
};
```

### `models.FourHundredAndFiftyEight`

```typescript
const value: models.FourHundredAndFiftyEight = {
  nextProjectCount: 7340.56,
  previousProjectCount: 6291.85,
};
```

### `models.FourHundredAndFiftyNine`

```typescript
const value: models.FourHundredAndFiftyNine = {
  customAlertTitle: "<value>",
};
```

### `models.FourHundredAndSixty`

```typescript
const value: models.FourHundredAndSixty = {
  protectedProjectCount: 6311.63,
  protectionEnabled: true,
  vulnerabilities: [],
};
```

### `models.FourHundredAndSixtyOne`

```typescript
const value: models.FourHundredAndSixtyOne = {
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

### `models.FourHundredAndSixtyTwo`

```typescript
const value: models.FourHundredAndSixtyTwo = {
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

### `models.FourHundredAndSixtyThree`

```typescript
const value: models.FourHundredAndSixtyThree = {
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

### `models.FourHundredAndSixtyFour`

```typescript
const value: models.FourHundredAndSixtyFour = {
  tier: "pro",
};
```

### `models.FourHundredAndSixtyFive`

```typescript
const value: models.FourHundredAndSixtyFive = {
  id: "<id>",
  url: "https://fair-providence.com/",
};
```

### `models.FourHundredAndSixtySix`

```typescript
const value: models.FourHundredAndSixtySix = {
  chatId: "<id>",
};
```

### `models.FourHundredAndSixtySeven`

```typescript
const value: models.FourHundredAndSixtySeven = {
  chatId: "<id>",
  events: [],
  inputTokens: 5943.64,
  messageId: "<id>",
  model: "Model 3",
  outputTokens: 4821.72,
  timestamp: 8790.36,
  useCase: "<value>",
};
```

### `models.FourHundredAndSixtyEight`

```typescript
const value: models.FourHundredAndSixtyEight = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.FourHundredAndSixtyNine`

```typescript
const value: models.FourHundredAndSixtyNine = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.FourHundredAndSeventy`

```typescript
const value: models.FourHundredAndSeventy = {
  appName: "<value>",
  atTTL: 9242.18,
  authMethod: "chatgpt",
  grantType: "authorization_code",
  scope: "<value>",
};
```

### `models.FourHundredAndSeventyOne`

```typescript
const value: models.FourHundredAndSeventyOne = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 6116.62,
    issuerUrl: "https://flashy-corral.org/",
    name: null,
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [],
    },
    teamId: "<id>",
    updatedAt: 1268.92,
  },
};
```

### `models.FourHundredAndSeventyTwo`

```typescript
const value: models.FourHundredAndSeventyTwo = {
  after: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 8064.4,
    issuerUrl: "https://tasty-bandwidth.info",
    name: "<value>",
    permissions: [
      "<value 1>",
    ],
    policyId: "<id>",
    resources: null,
    teamId: "<id>",
    updatedAt: 7889.46,
  },
  before: {
    claims: [],
    clientId: "<id>",
    createdAt: 1316.16,
    issuerUrl: "https://turbulent-freckle.org",
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
    updatedAt: 4408.63,
  },
};
```

### `models.FourHundredAndSeventyThree`

```typescript
const value: models.FourHundredAndSeventyThree = {
  origin: "invite",
  scope: "team",
  tokenId: "<id>",
  tokenName: "<value>",
};
```

### `models.FourHundredAndSeventyFour`

```typescript
const value: models.FourHundredAndSeventyFour = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

### `models.FourHundredAndSeventyFive`

```typescript
const value: models.FourHundredAndSeventyFive = {
  actorTokenId: "<id>",
  deletedCount: 1443.74,
};
```


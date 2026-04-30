# Payload


## Supported Types

### `models.Payload1`

```typescript
const value: models.Payload1 = {};
```

### `models.Payload2`

```typescript
const value: models.Payload2 = {
  action: "deleted",
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

### `models.Four`

```typescript
const value: models.Four = {
  action: "read",
  environment: [],
};
```

### `models.Five`

```typescript
const value: models.Five = {
  teamId: "<id>",
  stripeAccount: "<value>",
  stripeOrganisation: "<value>",
  accountRequestId: "<id>",
};
```

### `models.Six`

```typescript
const value: models.Six = {
  teamId: "<id>",
  stripeAccount: "<value>",
};
```

### `models.Seven`

```typescript
const value: models.Seven = {
  teamId: "<id>",
  teamSlug: "<value>",
  stripeAccount: "<value>",
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
  fromPlan: "pro",
  toPlan: "hobby",
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
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  author: "<value>",
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  projectId: "<id>",
  aliasCount: 5302.96,
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {
  alias: "<value>",
};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  projectName: "<value>",
  alias: "<value>",
  action: "created",
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  alias: "<value>",
  deploymentUrl: "https://hidden-apricot.biz",
};
```

### `models.TwentyNine`

```typescript
const value: models.TwentyNine = {};
```

### `models.Thirty`

```typescript
const value: models.Thirty = {};
```

### `models.ThirtyOne`

```typescript
const value: models.ThirtyOne = {
  appName: "<value>",
  scopes: [],
};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  appName: "<value>",
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  appName: "<value>",
  nextScopes: [
    "openid",
  ],
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  appName: "<value>",
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  appName: "<value>",
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
  appName: "<value>",
};
```

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
  appName: "<value>",
};
```

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
  projectId: "<id>",
  attackModeEnabled: true,
};
```

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

### `models.Forty`

```typescript
const value: models.Forty = {};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  invoiceId: "<id>",
  amount: 7038.08,
  refundReason: "<value>",
  lineItemCount: 9155.7,
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  invoiceId: "<id>",
  newInvoiceId: "<id>",
  settlementMethod: "refunded-paid",
  amount: 6426.16,
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  paymentMethodId: "<id>",
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
  planSlug: "<value>",
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  action: "mutate",
  data: {},
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  productAliases: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 8401.55,
  prevBulkRedirectsLimit: 4675.32,
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {
  custom: false,
};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {
  id: "<id>",
  cns: [
    "<value 1>",
  ],
  custom: true,
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {
  id: "<id>",
};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {
  src: "<value>",
  dst: "<value>",
};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  id: "<id>",
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
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

### `models.Sixty`

```typescript
const value: models.Sixty = {
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

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
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

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
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

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {
  githubLogin: "<value>",
};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
  githubLogin: "<value>",
  host: "unconscious-disk.biz",
};
```

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  gitlabLogin: "<value>",
  gitlabUserId: 2937.17,
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  bitbucketLogin: "<value>",
  bitbucketAccountId: "<id>",
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  suffix: "<value>",
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  suffix: "<value>",
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
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
    state: "Montana",
  },
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  url: "https://unimportant-strait.net/",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  job: {
    type: "vercel-push",
    ref: "<value>",
    repo: "<value>",
    sha: "<value>",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      sha: "<value>",
    },
    org: "<value>",
    provider: "vercel",
  },
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  url: "https://diligent-stay.net/",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
    },
    url: "https://common-fuel.biz/",
  },
  deploymentId: "<id>",
  url: "https://serpentine-divine.biz/",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "separate-pinstripe.info",
  type: "<value>",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "irresponsible-alert.info",
  type: "<value>",
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  name: "<value>",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  name: "<value>",
  price: 3203.03,
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  name: "<value>",
  cdnEnabled: false,
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  name: "<value>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
  ],
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  domain: "aggressive-valuable.name",
  customNameservers: [
    "<value 1>",
    "<value 2>",
  ],
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  domain: "colorless-nougat.org",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  domain: "upset-priesthood.net",
  zone: false,
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  domain: "funny-outrun.org",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  name: "<value>",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  drainUrl: "https://trivial-effector.name",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
  ],
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
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

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [],
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  email: "Brennan.Swift-Robel26@gmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Zakary_Keeling26@hotmail.com",
  },
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
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

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
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

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  projectId: "<id>",
  restore: false,
  configVersion: 4642.56,
  configChangeCount: 1728.94,
  configChanges: [],
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  action: "enable",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: null,
    createdAt: 6687.55,
    deploymentSecret: "<value>",
    email: "Prudence14@hotmail.com",
    id: "<id>",
    platformVersion: 7482.98,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Katelyn.Bashirian13",
    updatedAt: 9787.82,
    version: "northstar",
  },
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  confirmedScopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
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

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
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

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  configurations: [],
  ownerId: "<id>",
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  logDrainUrl: "https://terrible-order.biz",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  logDrainUrl: "https://worthy-custody.info",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
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

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
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

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 597.51,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 7509.23,
  },
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  projectId: "<id>",
  url: "https://near-place.biz",
  previousStatus: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://cloudy-toaster.name",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  projectId: "<id>",
  previousStatus: "<value>",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  plan: "<value>",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
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

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: false,
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 2195.44,
    enabledAt: 4800.04,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 5652.45,
    enabledAt: 3759.22,
  },
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  projectId: "<id>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: false,
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: false,
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: true,
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
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

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  projectId: "<id>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  clientId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  next: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "discover",
  },
  previous: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "visa",
  },
  projectId: "<id>",
  projectName: "<value>",
  updates: [],
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: true,
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: false,
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  projectId: "<id>",
  enableFunctionsBeta: false,
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 5432.27,
  },
  next: {
    functionDefaultTimeout: 2107.64,
  },
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
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

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
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

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
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

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: null,
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "bitbucket",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "vercel",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: true,
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: false,
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "disabled",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  requireVerifiedCommits: true,
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: true,
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: false,
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: true,
  },
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "digital-corral.info",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 4707.14,
  gitBranch: "<value>",
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "accurate-dulcimer.info",
  target: "<value>",
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "cluttered-editor.name",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "aged-midwife.com",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  projects: [],
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "querulous-moment.net",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 3803.82,
  },
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  project: {
    name: "<value>",
    role: "PROJECT_DEVELOPER",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 2772.81,
  },
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  passwordProtection: "preview",
  oldPasswordProtection: null,
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  projectName: "<value>",
  consent: "refused",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
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
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: false,
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: true,
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: false,
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 7883.97,
  },
  previous: {},
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 2580.91,
  },
  previous: {},
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
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

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  ssoProtection: "preview",
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
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
        enabled: true,
      },
    },
  },
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
  addedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  removedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  removedProviders: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  instances: 9739.08,
  url: "https://rich-lounge.net/",
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  email: "Winnifred.Roberts@hotmail.com",
  verified: true,
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
  email: "Jovanny_Sauer@hotmail.com",
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  uid: "<id>",
  name: "<value>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  enabled: false,
  updatedAt: 2303.21,
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  bio: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  scalingRules: {},
  min: 6396.95,
  max: 3118.55,
  url: "https://elastic-mantua.name/",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  email: "Charlene31@hotmail.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  email: "Beryl_Stoltenberg92@gmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  email: "Hattie.Davis@gmail.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  sampleRatePercent: 9624.89,
  spendLimitInDollars: null,
  previous: {
    sampleRatePercent: 5878.46,
    spendLimitInDollars: 6607.46,
  },
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 268.4,
      previousSpend: [
        2211.33,
        3066.93,
        9049.6,
      ],
      notifiedAt: [],
      createdAt: 2535.69,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  budget: {
    type: "fixed",
    fixedBudget: 7075.34,
    previousSpend: [
      5853.52,
      5688.08,
      9030.54,
    ],
    notifiedAt: [
      4969.45,
    ],
    createdAt: 9731.1,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 8504.33,
    previousSpend: [
      4824.74,
    ],
    notifiedAt: [
      204.49,
      4022.13,
    ],
    createdAt: 5014.89,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  storeType: "postgres",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "blob",
  },
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "postgres",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "edge-config",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  id: "<id>",
  type: "integration",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  id: "<id>",
  type: "postgres",
  locked: false,
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  slug: "<value>",
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  next: {
    enabled: true,
    scope: "selected_repos",
    includeDrafts: false,
  },
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  enabled: true,
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  trialCreditsIssuedAt: 8969.75,
  expiresAt: "1746357025663",
  amount: "858.79",
  currency: "Moldovan Leu",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  enabled: false,
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: true,
  environment: "production",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  environment: "preview",
  enabled: "on",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  deletedCount: 96.16,
  inviteIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  teamName: "<value>",
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  teamName: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Evalyn30",
  },
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Camilla_Heathcote64",
  },
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  uid: "<id>",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  requestedTeamName: "<value>",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  previousRole: "<value>",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {
  enforced: false,
};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 4667.2,
  expiresAt: "1753748127005",
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  publicId: "<id>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  previousConcurrentBuilds: 1701.73,
  nextConcurrentBuilds: 9448.54,
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  plan: "hobby",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  invoiceId: "<id>",
  convertedFromTrial: false,
  plan: "pro",
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
  consent: "granted",
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  enabled: "default",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  domain: "rotating-typewriter.net",
  ips: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  tokenTypes: [
    "<value 1>",
  ],
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  exportId: "<id>",
  from: 9780.4,
  to: 5080.78,
  format: "<value>",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  fileId: "<id>",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {
  provider: "github",
  login: "Bertha_Marvin",
};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  totp: false,
  recoveryCodes: 508.04,
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  username: "Ibrahim.Harvey57",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: true,
  },
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  mfaEnabled: false,
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  enabled: false,
  totpVerified: true,
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  email: "Ethyl.Fisher@yahoo.com",
  prevEmail: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  username: "Eliza.Rowe",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  ruleName: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: true,
  protectedProjectCount: 4956.75,
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
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

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
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

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
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

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  tier: "plus",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  id: "<id>",
  url: "https://shadowy-hunt.net/",
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  chatId: "<id>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  model: "Mercielago",
  useCase: "<value>",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 746.19,
  scope: "<value>",
  authMethod: "passkey",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "github",
  scope: "project",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
  deletedCount: 1860.41,
  actorTokenId: "<id>",
};
```


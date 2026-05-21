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
const value: models.SixtyNine = {};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  suffix: "<value>",
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  suffix: "<value>",
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
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
    state: "Wisconsin",
  },
};
```

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  url: "https://caring-simple.biz",
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  job: {
    type: "bitbucket-push",
    headInfo: {
      owner: "<value>",
      ref: "<value>",
      repoUuid: "<id>",
      sha: "<value>",
      slug: "<value>",
    },
    name: "<value>",
    owner: "<value>",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    workspaceUuid: "<id>",
    provider: "bitbucket",
  },
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  url: "https://wicked-cassava.name",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.Eighty`

```typescript
const value: models.Eighty = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    url: "https://equatorial-finer.org",
  },
  deploymentId: "<id>",
  url: "https://hungry-gown.com/",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
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
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "evil-editor.biz",
  type: "<value>",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  name: "<value>",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  name: "<value>",
  price: 5280.07,
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  name: "<value>",
  cdnEnabled: false,
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  name: "<value>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [],
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  domain: "colorless-nougat.org",
  customNameservers: [
    "<value 1>",
  ],
  prevCustomNameservers: [],
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  domain: "upset-priesthood.net",
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  domain: "evil-travel.name",
  zone: false,
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
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
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  domain: "juvenile-cinema.org",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  name: "<value>",
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  drainUrl: "https://lean-disadvantage.info",
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
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
  tags: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndTwo`

```typescript
const value: models.OneHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThree`

```typescript
const value: models.OneHundredAndThree = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
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
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
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

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [],
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  email: "Zakary_Keeling26@hotmail.com",
  name: "<value>",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Rosie.Connelly-Reinger4@gmail.com",
  },
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
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

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
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
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 4642.56,
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  projectId: "<id>",
  restore: false,
  configVersion: 6523.16,
  configChangeCount: 2952.01,
  configChanges: [
    {},
  ],
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {},
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  action: "enable",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 1625.89,
    createdAt: 3351.57,
    deploymentSecret: "<value>",
    email: "Abigayle_Klocko@yahoo.com",
    id: "<id>",
    platformVersion: 6451.79,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Timmothy57",
    updatedAt: 9613.98,
    version: "northstar",
  },
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
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

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
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

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
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

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
  configurations: [],
  ownerId: "<id>",
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
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  logDrainUrl: "https://early-flu.net",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  logDrainUrl: "https://sweet-lobster.biz/",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  enabled: false,
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
  },
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
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

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
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

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  projectName: "<value>",
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
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  projectId: "<id>",
  previous: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 6753.21,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 5056.61,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  projectId: "<id>",
  url: "https://winding-hovercraft.com",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://dead-lace.info/",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  plan: "<value>",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
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

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
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

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: false,
};
```

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 3352.56,
    enabledAt: 6329.41,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 6799.83,
    enabledAt: 8933.19,
  },
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  projectId: "<id>",
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  action: "updated",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: true,
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: true,
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
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
    newConnectConfigurations: [],
  },
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  projectId: "<id>",
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  clientId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  next: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "american_express",
  },
  previous: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "visa",
  },
  projectId: "<id>",
  projectName: "<value>",
  updates: [
    "cookieName",
  ],
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: false,
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: false,
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  projectId: "<id>",
  enableFunctionsBeta: true,
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: null,
  },
  next: {
    functionDefaultTimeout: 3486.67,
  },
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
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

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
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

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: null,
  },
  next: {
    functionZeroConfigFailover: true,
  },
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "gitlab",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: true,
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: true,
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "disabled",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  requireVerifiedCommits: true,
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: true,
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: true,
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: null,
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "querulous-moment.net",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 2067.22,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "minty-hippodrome.info",
  target: "<value>",
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "foolhardy-draw.net",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "gifted-dusk.org",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  projects: [],
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "jealous-sonnet.com",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 3114.6,
  },
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  project: {
    name: "<value>",
    role: "PROJECT_GUEST",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 775.46,
  },
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  source: "<value>",
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
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  oldPasswordProtection: "all_except_custom_domains",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  projectId: "<id>",
  expiresAt: 7704.88,
};
```

### `models.TwoHundredAndTwentyTwo`

```typescript
const value: models.TwoHundredAndTwentyTwo = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyThree`

```typescript
const value: models.TwoHundredAndTwentyThree = {
  projectName: "<value>",
  consent: "granted",
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentySix`

```typescript
const value: models.TwoHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentySeven`

```typescript
const value: models.TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: false,
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: false,
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: false,
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 4162.89,
  },
  previous: {},
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 8462.83,
  },
  previous: {},
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {},
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  ssoProtection: "preview",
  oldSsoProtection: {
    deploymentType: "all",
  },
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
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
        enabled: true,
      },
    },
  },
};
```

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
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
  ],
};
```

### `models.TwoHundredAndFortyOne`

```typescript
const value: models.TwoHundredAndFortyOne = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyTwo`

```typescript
const value: models.TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  instances: 4331.4,
  url: "https://impartial-apricot.biz/",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  email: "Charlene31@hotmail.com",
  verified: true,
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  email: "Beryl_Stoltenberg92@gmail.com",
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  uid: "<id>",
  name: "<value>",
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  enabled: false,
  updatedAt: 6350.41,
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  bio: "<value>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  scalingRules: {
    "key": {
      min: 7732.79,
      max: 2712.29,
    },
  },
  min: 4006.63,
  max: 4824.74,
  url: "https://ajar-gym.name",
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  email: "Theresa.Dooley70@hotmail.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {
  email: "Brando97@hotmail.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  email: "Abner94@yahoo.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  sampleRatePercent: 473.99,
  spendLimitInDollars: 4874.93,
  previous: {
    sampleRatePercent: 6173.75,
    spendLimitInDollars: 1825.02,
  },
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
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

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 4517.92,
    previousSpend: [
      943.37,
    ],
    notifiedAt: [
      9713.31,
      439.54,
      7773.05,
    ],
    createdAt: 6433.26,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 5966.87,
    previousSpend: [
      2432.12,
      3896.27,
    ],
    notifiedAt: [
      2783.17,
      680.08,
      9744.82,
    ],
    createdAt: 5527.9,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  storeType: "redis",
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
  },
};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "blob",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.TwoHundredAndSixtyFour`

```typescript
const value: models.TwoHundredAndSixtyFour = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "postgres",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  id: "<id>",
  type: "postgres",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  id: "<id>",
  type: "blob",
  locked: true,
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  slug: "<value>",
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  next: {
    enabled: false,
    scope: "selected_repos",
    includeDrafts: true,
  },
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  enabled: true,
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  trialCreditsIssuedAt: 7701.28,
  expiresAt: "1738546742198",
  amount: "815.68",
  currency: "Pound Sterling",
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {
  previous: null,
  next: {},
};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  enabled: true,
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: false,
  environment: "production",
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  environment: "production",
  enabled: "default-force",
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  deletedCount: 9257.12,
  inviteIds: [
    "<value 1>",
  ],
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  teamName: "<value>",
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {
  teamName: "<value>",
};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Shayna_Zboncak",
  },
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Kale.Dare12",
  },
};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  requestedTeamName: "<value>",
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {
  previousRole: "<value>",
};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  enforced: true,
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 2000.02,
  expiresAt: "1743720577142",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  publicId: "<id>",
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  previousConcurrentBuilds: 3709.71,
  nextConcurrentBuilds: 8966.71,
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  plan: "hobby",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  invoiceId: "<id>",
  convertedFromTrial: true,
  plan: "hobby",
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {
  consent: "granted",
};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  enabled: "off",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {
  enabled: true,
  scope: "dashboard",
};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  domain: "uneven-council.org",
  ips: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {
  tokenTypes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  exportId: "<id>",
  from: 6362.94,
  to: 3369.23,
  format: "<value>",
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  provider: "gitlab",
  login: "Annabell75",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {
  totp: true,
  recoveryCodes: 3311.25,
};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  username: "Vicente_Toy73",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  mfaEnabled: false,
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
  enabled: true,
  totpVerified: false,
};
```

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  email: "Casandra27@yahoo.com",
  prevEmail: "<value>",
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  username: "Mara.Reynolds30",
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  ruleName: "<value>",
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  customAlertTitle: "<value>",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  vulnerabilities: [],
  protectionEnabled: true,
  protectedProjectCount: 7030.41,
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
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

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
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

### `models.ThreeHundredAndTwenty`

```typescript
const value: models.ThreeHundredAndTwenty = {
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

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
  tier: "plus",
};
```

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
  id: "<id>",
  url: "https://authorized-sprinkles.name",
};
```

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  chatId: "<id>",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  model: "CTS",
  useCase: "<value>",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 17.85,
  scope: "<value>",
  authMethod: "sms",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "apple",
  scope: "team",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  deletedCount: 2152.14,
  actorTokenId: "<id>",
};
```


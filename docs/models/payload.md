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
  deploymentId: "<id>",
  deploymentUrl: "https://immediate-ferret.org/",
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
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

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
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
  scope: "<value>",
  source: "<value>",
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 6523.16,
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  projectId: "<id>",
  restore: true,
  configVersion: 5121.56,
  configChangeCount: 7145.23,
  configChanges: [],
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {},
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  action: "disable",
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: null,
    createdAt: 7085.95,
    deploymentSecret: "<value>",
    email: "Eugenia41@hotmail.com",
    id: "<id>",
    platformVersion: 1434,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Ashlynn33",
    updatedAt: 4808.89,
    version: "northstar",
  },
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
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

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
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

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
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

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  configurations: [],
  ownerId: "<id>",
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
  billingPlanId: "<id>",
};
```

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  logDrainUrl: "https://muffled-decongestant.biz",
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
  logDrainUrl: "https://functional-slipper.name",
};
```

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  enabled: true,
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
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

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  projectName: "<value>",
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
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 9147.05,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 6386.02,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  projectId: "<id>",
  url: "https://dead-lace.info/",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://quiet-bug.biz/",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  projectId: "<id>",
  type: "header",
  headerName: "<value>",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://tragic-teriyaki.org",
};
```

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {
  plan: "<value>",
};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  endpoint: {
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
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
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

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
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

### `models.OneHundredAndSixtyOne`

```typescript
const value: models.OneHundredAndSixtyOne = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.OneHundredAndSixtyTwo`

```typescript
const value: models.OneHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: false,
};
```

### `models.OneHundredAndSixtyThree`

```typescript
const value: models.OneHundredAndSixtyThree = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 4182.84,
    enabledAt: 2717.36,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 824.8,
    enabledAt: 9431.09,
  },
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  projectId: "<id>",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  action: "updated",
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: true,
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: false,
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
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
const value: models.OneHundredAndSeventyFour = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: null,
    newConnectConfigurations: [],
  },
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  projectId: "<id>",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {
  clientId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {
  next: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "mastercard",
  },
  previous: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "discover",
  },
  projectId: "<id>",
  projectName: "<value>",
  updates: [],
};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: false,
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: false,
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: true,
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  projectId: "<id>",
  enableFunctionsBeta: false,
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 8783.46,
  },
  next: {
    functionDefaultTimeout: 305.41,
  },
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultMemoryType: null,
  },
  next: {
    functionDefaultMemoryType: "<value>",
  },
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
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
      "<value 3>",
    ],
  },
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: true,
  },
  next: {
    functionZeroConfigFailover: true,
  },
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github-custom-host",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: true,
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: false,
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: false,
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

### `models.OneHundredAndNinetyEight`

```typescript
const value: models.OneHundredAndNinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

### `models.OneHundredAndNinetyNine`

```typescript
const value: models.OneHundredAndNinetyNine = {
  requireVerifiedCommits: true,
};
```

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  disableRepositoryDispatchEvents: true,
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: true,
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: true,
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: false,
    propagateFailures: false,
  },
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "foolhardy-draw.net",
  target: "<value>",
  redirect: "<value>",
  redirectStatusCode: 6368.1,
  gitBranch: "<value>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "gifted-dusk.org",
  target: "<value>",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "immense-boyfriend.info",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "jealous-sonnet.com",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_VIEWER",
      membershipCreatedAt: 3114.6,
    },
  ],
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "superb-optimal.net",
};
```

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 3805.39,
  },
};
```

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
  project: {
    name: "<value>",
    role: "PROJECT_GUEST",
    invitedUserName: "<value>",
  },
};
```

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 497.61,
  },
};
```

### `models.TwoHundredAndFourteen`

```typescript
const value: models.TwoHundredAndFourteen = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.TwoHundredAndFifteen`

```typescript
const value: models.TwoHundredAndFifteen = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.TwoHundredAndSixteen`

```typescript
const value: models.TwoHundredAndSixteen = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndSeventeen`

```typescript
const value: models.TwoHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.TwoHundredAndEighteen`

```typescript
const value: models.TwoHundredAndEighteen = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.TwoHundredAndNineteen`

```typescript
const value: models.TwoHundredAndNineteen = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwenty`

```typescript
const value: models.TwoHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyOne`

```typescript
const value: models.TwoHundredAndTwentyOne = {
  passwordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  oldPasswordProtection: {
    deploymentType: "all_except_custom_domains",
  },
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
  projectId: "<id>",
  expiresAt: 2825.51,
};
```

### `models.TwoHundredAndTwentyFour`

```typescript
const value: models.TwoHundredAndTwentyFour = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndTwentyFive`

```typescript
const value: models.TwoHundredAndTwentyFive = {
  projectName: "<value>",
  consent: "refused",
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
};
```

### `models.TwoHundredAndTwentyEight`

```typescript
const value: models.TwoHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndTwentyNine`

```typescript
const value: models.TwoHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThirty`

```typescript
const value: models.TwoHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

### `models.TwoHundredAndThirtyOne`

```typescript
const value: models.TwoHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: false,
};
```

### `models.TwoHundredAndThirtyTwo`

```typescript
const value: models.TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

### `models.TwoHundredAndThirtyThree`

```typescript
const value: models.TwoHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

### `models.TwoHundredAndThirtyFour`

```typescript
const value: models.TwoHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.TwoHundredAndThirtyFive`

```typescript
const value: models.TwoHundredAndThirtyFive = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndThirtySix`

```typescript
const value: models.TwoHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 9739.08,
  },
  previous: {},
};
```

### `models.TwoHundredAndThirtySeven`

```typescript
const value: models.TwoHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 9775.87,
  },
  previous: {},
};
```

### `models.TwoHundredAndThirtyEight`

```typescript
const value: models.TwoHundredAndThirtyEight = {
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

### `models.TwoHundredAndThirtyNine`

```typescript
const value: models.TwoHundredAndThirtyNine = {
  ssoProtection: {
    deploymentType: "all",
  },
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

### `models.TwoHundredAndForty`

```typescript
const value: models.TwoHundredAndForty = {
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
  projectId: "<id>",
  projectName: "<value>",
  addedProjects: [],
  removedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [
    "<value 1>",
  ],
  removedProviders: [
    "<value 1>",
  ],
};
```

### `models.TwoHundredAndFortyThree`

```typescript
const value: models.TwoHundredAndFortyThree = {
  projectId: "<id>",
};
```

### `models.TwoHundredAndFortyFour`

```typescript
const value: models.TwoHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndFortyFive`

```typescript
const value: models.TwoHundredAndFortyFive = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.TwoHundredAndFortySix`

```typescript
const value: models.TwoHundredAndFortySix = {
  instances: 1378.21,
  url: "https://digital-straw.org/",
};
```

### `models.TwoHundredAndFortySeven`

```typescript
const value: models.TwoHundredAndFortySeven = {
  email: "Hattie.Davis@gmail.com",
  verified: false,
};
```

### `models.TwoHundredAndFortyEight`

```typescript
const value: models.TwoHundredAndFortyEight = {
  email: "Vince_Cassin@hotmail.com",
};
```

### `models.TwoHundredAndFortyNine`

```typescript
const value: models.TwoHundredAndFortyNine = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

### `models.TwoHundredAndFifty`

```typescript
const value: models.TwoHundredAndFifty = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndFiftyOne`

```typescript
const value: models.TwoHundredAndFiftyOne = {
  enabled: false,
  updatedAt: 4006.63,
};
```

### `models.TwoHundredAndFiftyTwo`

```typescript
const value: models.TwoHundredAndFiftyTwo = {
  bio: "<value>",
};
```

### `models.TwoHundredAndFiftyThree`

```typescript
const value: models.TwoHundredAndFiftyThree = {
  scalingRules: {
    "key": {
      min: 7732.79,
      max: 2712.29,
    },
  },
  min: 9226.36,
  max: 694.16,
  url: "https://appropriate-procurement.biz/",
};
```

### `models.TwoHundredAndFiftyFour`

```typescript
const value: models.TwoHundredAndFiftyFour = {};
```

### `models.TwoHundredAndFiftyFive`

```typescript
const value: models.TwoHundredAndFiftyFive = {
  email: "Abner94@yahoo.com",
  bitbucketLogin: "<value>",
  bitbucketEmail: "<value>",
  bitbucketName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFiftySix`

```typescript
const value: models.TwoHundredAndFiftySix = {
  email: "Alysha_Kuhlman@yahoo.com",
  githubLogin: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFiftySeven`

```typescript
const value: models.TwoHundredAndFiftySeven = {
  email: "Aaliyah33@gmail.com",
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
  gitlabName: "<value>",
  zeitAccount: "<value>",
  zeitAccountType: "<value>",
};
```

### `models.TwoHundredAndFiftyEight`

```typescript
const value: models.TwoHundredAndFiftyEight = {
  sampleRatePercent: 3669.87,
  spendLimitInDollars: null,
  previous: {
    sampleRatePercent: 9713.31,
    spendLimitInDollars: null,
  },
};
```

### `models.TwoHundredAndFiftyNine`

```typescript
const value: models.TwoHundredAndFiftyNine = {
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

### `models.TwoHundredAndSixty`

```typescript
const value: models.TwoHundredAndSixty = {
  budget: {
    type: "fixed",
    fixedBudget: 7252.98,
    previousSpend: [
      5164.53,
    ],
    notifiedAt: [
      7491.72,
    ],
    createdAt: 1121.48,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndSixtyOne`

```typescript
const value: models.TwoHundredAndSixtyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 4098.58,
    previousSpend: [
      9410.09,
      1517.55,
      9634.92,
    ],
    notifiedAt: [],
    createdAt: 6320.88,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndSixtyTwo`

```typescript
const value: models.TwoHundredAndSixtyTwo = {};
```

### `models.TwoHundredAndSixtyThree`

```typescript
const value: models.TwoHundredAndSixtyThree = {
  storeType: "postgres",
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
};
```

### `models.TwoHundredAndSixtyFive`

```typescript
const value: models.TwoHundredAndSixtyFive = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "postgres",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

### `models.TwoHundredAndSixtySix`

```typescript
const value: models.TwoHundredAndSixtySix = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "edge-config",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

### `models.TwoHundredAndSixtySeven`

```typescript
const value: models.TwoHundredAndSixtySeven = {
  id: "<id>",
  type: "blob",
};
```

### `models.TwoHundredAndSixtyEight`

```typescript
const value: models.TwoHundredAndSixtyEight = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.TwoHundredAndSixtyNine`

```typescript
const value: models.TwoHundredAndSixtyNine = {
  id: "<id>",
  type: "edge-config",
  locked: false,
};
```

### `models.TwoHundredAndSeventy`

```typescript
const value: models.TwoHundredAndSeventy = {
  slug: "<value>",
};
```

### `models.TwoHundredAndSeventyOne`

```typescript
const value: models.TwoHundredAndSeventyOne = {
  next: {
    enabled: false,
    scope: "public",
    includeDrafts: false,
  },
};
```

### `models.TwoHundredAndSeventyTwo`

```typescript
const value: models.TwoHundredAndSeventyTwo = {
  enabled: false,
};
```

### `models.TwoHundredAndSeventyThree`

```typescript
const value: models.TwoHundredAndSeventyThree = {
  trialCreditsIssuedAt: 2426.44,
  expiresAt: "1746482458368",
  amount: "104.48",
  currency: "Rufiyaa",
};
```

### `models.TwoHundredAndSeventyFour`

```typescript
const value: models.TwoHundredAndSeventyFour = {};
```

### `models.TwoHundredAndSeventyFive`

```typescript
const value: models.TwoHundredAndSeventyFive = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.TwoHundredAndSeventySix`

```typescript
const value: models.TwoHundredAndSeventySix = {
  previous: {},
  next: {},
};
```

### `models.TwoHundredAndSeventySeven`

```typescript
const value: models.TwoHundredAndSeventySeven = {
  enabled: true,
};
```

### `models.TwoHundredAndSeventyEight`

```typescript
const value: models.TwoHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: true,
  environment: "preview",
};
```

### `models.TwoHundredAndSeventyNine`

```typescript
const value: models.TwoHundredAndSeventyNine = {
  environment: "preview",
  enabled: "off",
};
```

### `models.TwoHundredAndEighty`

```typescript
const value: models.TwoHundredAndEighty = {};
```

### `models.TwoHundredAndEightyOne`

```typescript
const value: models.TwoHundredAndEightyOne = {
  deletedCount: 4667.2,
  inviteIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TwoHundredAndEightyTwo`

```typescript
const value: models.TwoHundredAndEightyTwo = {};
```

### `models.TwoHundredAndEightyThree`

```typescript
const value: models.TwoHundredAndEightyThree = {
  teamName: "<value>",
};
```

### `models.TwoHundredAndEightyFour`

```typescript
const value: models.TwoHundredAndEightyFour = {
  teamName: "<value>",
};
```

### `models.TwoHundredAndEightyFive`

```typescript
const value: models.TwoHundredAndEightyFive = {};
```

### `models.TwoHundredAndEightySix`

```typescript
const value: models.TwoHundredAndEightySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Karina_Walsh",
  },
};
```

### `models.TwoHundredAndEightySeven`

```typescript
const value: models.TwoHundredAndEightySeven = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Adell.Little86",
  },
};
```

### `models.TwoHundredAndEightyEight`

```typescript
const value: models.TwoHundredAndEightyEight = {};
```

### `models.TwoHundredAndEightyNine`

```typescript
const value: models.TwoHundredAndEightyNine = {
  requestedTeamName: "<value>",
};
```

### `models.TwoHundredAndNinety`

```typescript
const value: models.TwoHundredAndNinety = {
  previousRole: "<value>",
};
```

### `models.TwoHundredAndNinetyOne`

```typescript
const value: models.TwoHundredAndNinetyOne = {
  enforced: false,
};
```

### `models.TwoHundredAndNinetyTwo`

```typescript
const value: models.TwoHundredAndNinetyTwo = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 3709.71,
  expiresAt: "1763966990559",
};
```

### `models.TwoHundredAndNinetyThree`

```typescript
const value: models.TwoHundredAndNinetyThree = {
  publicId: "<id>",
};
```

### `models.TwoHundredAndNinetyFour`

```typescript
const value: models.TwoHundredAndNinetyFour = {
  previousConcurrentBuilds: 3455.89,
  nextConcurrentBuilds: 7317.1,
};
```

### `models.TwoHundredAndNinetyFive`

```typescript
const value: models.TwoHundredAndNinetyFive = {
  plan: "hobby",
};
```

### `models.TwoHundredAndNinetySix`

```typescript
const value: models.TwoHundredAndNinetySix = {
  invoiceId: "<id>",
  convertedFromTrial: true,
  plan: "enterprise",
};
```

### `models.TwoHundredAndNinetySeven`

```typescript
const value: models.TwoHundredAndNinetySeven = {};
```

### `models.TwoHundredAndNinetyEight`

```typescript
const value: models.TwoHundredAndNinetyEight = {};
```

### `models.TwoHundredAndNinetyNine`

```typescript
const value: models.TwoHundredAndNinetyNine = {
  consent: "refused",
};
```

### `models.ThreeHundred`

```typescript
const value: models.ThreeHundred = {};
```

### `models.ThreeHundredAndOne`

```typescript
const value: models.ThreeHundredAndOne = {
  enabled: "on",
};
```

### `models.ThreeHundredAndTwo`

```typescript
const value: models.ThreeHundredAndTwo = {
  enabled: false,
  scope: "dashboard",
};
```

### `models.ThreeHundredAndThree`

```typescript
const value: models.ThreeHundredAndThree = {};
```

### `models.ThreeHundredAndFour`

```typescript
const value: models.ThreeHundredAndFour = {
  domain: "prime-fishery.net",
  ips: [],
};
```

### `models.ThreeHundredAndFive`

```typescript
const value: models.ThreeHundredAndFive = {
  tokenTypes: [
    "<value 1>",
  ],
};
```

### `models.ThreeHundredAndSix`

```typescript
const value: models.ThreeHundredAndSix = {
  exportId: "<id>",
  from: 4437.82,
  to: 9059.16,
  format: "<value>",
};
```

### `models.ThreeHundredAndSeven`

```typescript
const value: models.ThreeHundredAndSeven = {
  fileId: "<id>",
};
```

### `models.ThreeHundredAndEight`

```typescript
const value: models.ThreeHundredAndEight = {};
```

### `models.ThreeHundredAndNine`

```typescript
const value: models.ThreeHundredAndNine = {
  provider: "chatgpt",
  login: "Amaya11",
};
```

### `models.ThreeHundredAndTen`

```typescript
const value: models.ThreeHundredAndTen = {
  totp: true,
  recoveryCodes: 6466.81,
};
```

### `models.ThreeHundredAndEleven`

```typescript
const value: models.ThreeHundredAndEleven = {
  username: "Thomas_Turner55",
};
```

### `models.ThreeHundredAndTwelve`

```typescript
const value: models.ThreeHundredAndTwelve = {
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

### `models.ThreeHundredAndThirteen`

```typescript
const value: models.ThreeHundredAndThirteen = {
  mfaEnabled: true,
};
```

### `models.ThreeHundredAndFourteen`

```typescript
const value: models.ThreeHundredAndFourteen = {
  enabled: false,
  totpVerified: false,
};
```

### `models.ThreeHundredAndFifteen`

```typescript
const value: models.ThreeHundredAndFifteen = {
  email: "Mattie.Hayes@gmail.com",
  prevEmail: "<value>",
};
```

### `models.ThreeHundredAndSixteen`

```typescript
const value: models.ThreeHundredAndSixteen = {
  username: "Waylon.Herzog",
};
```

### `models.ThreeHundredAndSeventeen`

```typescript
const value: models.ThreeHundredAndSeventeen = {
  ruleName: "<value>",
};
```

### `models.ThreeHundredAndEighteen`

```typescript
const value: models.ThreeHundredAndEighteen = {
  customAlertTitle: "<value>",
};
```

### `models.ThreeHundredAndNineteen`

```typescript
const value: models.ThreeHundredAndNineteen = {
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 1072.82,
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
    accountId: "<id>",
    region: "<value>",
    vpcId: "<id>",
  },
};
```

### `models.ThreeHundredAndTwentyOne`

```typescript
const value: models.ThreeHundredAndTwentyOne = {
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

### `models.ThreeHundredAndTwentyTwo`

```typescript
const value: models.ThreeHundredAndTwentyTwo = {
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

### `models.ThreeHundredAndTwentyThree`

```typescript
const value: models.ThreeHundredAndTwentyThree = {
  tier: "pro",
};
```

### `models.ThreeHundredAndTwentyFour`

```typescript
const value: models.ThreeHundredAndTwentyFour = {
  id: "<id>",
  url: "https://bowed-flu.net/",
};
```

### `models.ThreeHundredAndTwentyFive`

```typescript
const value: models.ThreeHundredAndTwentyFive = {
  chatId: "<id>",
};
```

### `models.ThreeHundredAndTwentySix`

```typescript
const value: models.ThreeHundredAndTwentySix = {
  model: "CTS",
  useCase: "<value>",
};
```

### `models.ThreeHundredAndTwentySeven`

```typescript
const value: models.ThreeHundredAndTwentySeven = {
  chatId: "<id>",
  messageId: "<id>",
};
```

### `models.ThreeHundredAndTwentyEight`

```typescript
const value: models.ThreeHundredAndTwentyEight = {
  deploymentId: "<id>",
  projectId: "<id>",
  runId: "<id>",
};
```

### `models.ThreeHundredAndTwentyNine`

```typescript
const value: models.ThreeHundredAndTwentyNine = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 2848.48,
  scope: "<value>",
  authMethod: "github-webhook",
};
```

### `models.ThreeHundredAndThirty`

```typescript
const value: models.ThreeHundredAndThirty = {
  tokenId: "<id>",
  tokenName: "<value>",
  origin: "github",
  scope: "user",
};
```

### `models.ThreeHundredAndThirtyOne`

```typescript
const value: models.ThreeHundredAndThirtyOne = {
  tokenId: "<id>",
  tokenType: "<value>",
  tokenName: "<value>",
  actorTokenId: "<id>",
};
```

### `models.ThreeHundredAndThirtyTwo`

```typescript
const value: models.ThreeHundredAndThirtyTwo = {
  deletedCount: 1446.46,
  actorTokenId: "<id>",
};
```


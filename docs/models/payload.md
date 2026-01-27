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

### `models.Three`

```typescript
const value: models.Three = {
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
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Six`

```typescript
const value: models.Six = {
  author: "<value>",
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.Seven`

```typescript
const value: models.Seven = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

### `models.Eight`

```typescript
const value: models.Eight = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

### `models.Nine`

```typescript
const value: models.Nine = {};
```

### `models.Ten`

```typescript
const value: models.Ten = {};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {};
```

### `models.Thirteen`

```typescript
const value: models.Thirteen = {};
```

### `models.Fourteen`

```typescript
const value: models.Fourteen = {
  projectName: "<value>",
  alias: "<value>",
  action: "created",
};
```

### `models.Fifteen`

```typescript
const value: models.Fifteen = {};
```

### `models.Sixteen`

```typescript
const value: models.Sixteen = {};
```

### `models.Seventeen`

```typescript
const value: models.Seventeen = {
  alias: "<value>",
};
```

### `models.Eighteen`

```typescript
const value: models.Eighteen = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

### `models.Nineteen`

```typescript
const value: models.Nineteen = {
  alias: "<value>",
  deploymentUrl: "https://mean-yarmulke.org",
};
```

### `models.Twenty`

```typescript
const value: models.Twenty = {
  projectName: "<value>",
  autoExposeSystemEnvs: false,
};
```

### `models.TwentyOne`

```typescript
const value: models.TwentyOne = {};
```

### `models.TwentyTwo`

```typescript
const value: models.TwentyTwo = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  bulkRedirectsLimit: 9328.11,
  prevBulkRedirectsLimit: 3590.62,
};
```

### `models.TwentyThree`

```typescript
const value: models.TwentyThree = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

### `models.TwentyFour`

```typescript
const value: models.TwentyFour = {
  custom: false,
};
```

### `models.TwentyFive`

```typescript
const value: models.TwentyFive = {};
```

### `models.TwentySix`

```typescript
const value: models.TwentySix = {
  id: "<id>",
};
```

### `models.TwentySeven`

```typescript
const value: models.TwentySeven = {
  src: "<value>",
  dst: "<value>",
};
```

### `models.TwentyEight`

```typescript
const value: models.TwentyEight = {
  id: "<id>",
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
const value: models.ThirtyOne = {};
```

### `models.ThirtyTwo`

```typescript
const value: models.ThirtyTwo = {
  suffix: "<value>",
};
```

### `models.ThirtyThree`

```typescript
const value: models.ThirtyThree = {
  status: "<value>",
  suffix: "<value>",
};
```

### `models.ThirtyFour`

```typescript
const value: models.ThirtyFour = {
  suffix: "<value>",
};
```

### `models.ThirtyFive`

```typescript
const value: models.ThirtyFive = {
  configuration: {
    id: "<id>",
    name: "<value>",
  },
};
```

### `models.ThirtySix`

```typescript
const value: models.ThirtySix = {
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

### `models.ThirtySeven`

```typescript
const value: models.ThirtySeven = {
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

### `models.ThirtyEight`

```typescript
const value: models.ThirtyEight = {
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

### `models.ThirtyNine`

```typescript
const value: models.ThirtyNine = {
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

### `models.Forty`

```typescript
const value: models.Forty = {
  githubLogin: "<value>",
};
```

### `models.FortyOne`

```typescript
const value: models.FortyOne = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

### `models.FortyTwo`

```typescript
const value: models.FortyTwo = {
  bitbucketEmail: "<value>",
  bitbucketLogin: "<value>",
};
```

### `models.FortyThree`

```typescript
const value: models.FortyThree = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

### `models.FortyFour`

```typescript
const value: models.FortyFour = {
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
    state: "North Carolina",
  },
};
```

### `models.FortyFive`

```typescript
const value: models.FortyFive = {
  url: "https://needy-vestment.com/",
};
```

### `models.FortySix`

```typescript
const value: models.FortySix = {
  url: "https://instructive-lid.com",
};
```

### `models.FortySeven`

```typescript
const value: models.FortySeven = {
  deployment: {
    id: "<id>",
    name: "<value>",
    url: "https://mediocre-giggle.org/",
    meta: {},
  },
  deploymentId: "<id>",
  url: "https://incomparable-pillbox.name/",
};
```

### `models.FortyEight`

```typescript
const value: models.FortyEight = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "silky-excess.name",
  type: "<value>",
};
```

### `models.FortyNine`

```typescript
const value: models.FortyNine = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "teeming-inspection.net",
  type: "<value>",
};
```

### `models.Fifty`

```typescript
const value: models.Fifty = {
  name: "<value>",
};
```

### `models.FiftyOne`

```typescript
const value: models.FiftyOne = {
  name: "<value>",
  price: 8561.8,
};
```

### `models.FiftyTwo`

```typescript
const value: models.FiftyTwo = {
  name: "<value>",
  cdnEnabled: true,
};
```

### `models.FiftyThree`

```typescript
const value: models.FiftyThree = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

### `models.FiftyFour`

```typescript
const value: models.FiftyFour = {
  name: "<value>",
};
```

### `models.FiftyFive`

```typescript
const value: models.FiftyFive = {
  domainId: "<id>",
  name: "<value>",
};
```

### `models.FiftySix`

```typescript
const value: models.FiftySix = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
};
```

### `models.FiftySeven`

```typescript
const value: models.FiftySeven = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.FiftyEight`

```typescript
const value: models.FiftyEight = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

### `models.FiftyNine`

```typescript
const value: models.FiftyNine = {
  domain: "puny-nightlife.com",
};
```

### `models.Sixty`

```typescript
const value: models.Sixty = {
  name: "<value>",
};
```

### `models.SixtyOne`

```typescript
const value: models.SixtyOne = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

### `models.SixtyTwo`

```typescript
const value: models.SixtyTwo = {
  email: "Mollie56@hotmail.com",
  name: "<value>",
};
```

### `models.SixtyThree`

```typescript
const value: models.SixtyThree = {};
```

### `models.SixtyFour`

```typescript
const value: models.SixtyFour = {
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

### `models.SixtyFive`

```typescript
const value: models.SixtyFive = {
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

### `models.SixtySix`

```typescript
const value: models.SixtySix = {
  enabled: true,
  updatedAt: 1679.11,
};
```

### `models.SixtySeven`

```typescript
const value: models.SixtySeven = {
  projectId: "<id>",
  restore: false,
  configVersion: 5954.02,
  configChangeCount: 6561.49,
  configChanges: [
    {},
  ],
};
```

### `models.SixtyEight`

```typescript
const value: models.SixtyEight = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

### `models.SixtyNine`

```typescript
const value: models.SixtyNine = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

### `models.Seventy`

```typescript
const value: models.Seventy = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
};
```

### `models.SeventyOne`

```typescript
const value: models.SeventyOne = {
  projectId: "<id>",
  attackModeEnabled: false,
};
```

### `models.SeventyTwo`

```typescript
const value: models.SeventyTwo = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

### `models.SeventyThree`

```typescript
const value: models.SeventyThree = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 6465.26,
    createdAt: 2370.09,
    deploymentSecret: "<value>",
    email: "Destinee_Beier55@yahoo.com",
    id: "<id>",
    platformVersion: 587.63,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Malcolm.Kilback",
    updatedAt: 9559.82,
    version: "northstar",
  },
};
```

### `models.SeventyFour`

```typescript
const value: models.SeventyFour = {
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

### `models.SeventyFive`

```typescript
const value: models.SeventyFive = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
};
```

### `models.SeventySix`

```typescript
const value: models.SeventySix = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.SeventySeven`

```typescript
const value: models.SeventySeven = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
};
```

### `models.SeventyEight`

```typescript
const value: models.SeventyEight = {
  projectId: "<id>",
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.SeventyNine`

```typescript
const value: models.SeventyNine = {
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

### `models.Eighty`

```typescript
const value: models.Eighty = {
  logDrainUrl: "https://equatorial-finer.org",
};
```

### `models.EightyOne`

```typescript
const value: models.EightyOne = {
  logDrainUrl: "https://reflecting-guard.name",
};
```

### `models.EightyTwo`

```typescript
const value: models.EightyTwo = {
  viaOTP: true,
  viaEmailInvite: true,
  viaGithub: true,
  viaGitlab: false,
  viaBitbucket: true,
  viaGoogle: false,
  viaApple: false,
  viaSamlSso: false,
  viaPasskey: false,
};
```

### `models.EightyThree`

```typescript
const value: models.EightyThree = {
  drainUrl: "https://focused-rawhide.biz/",
};
```

### `models.EightyFour`

```typescript
const value: models.EightyFour = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

### `models.EightyFive`

```typescript
const value: models.EightyFive = {
  projectName: "<value>",
};
```

### `models.EightySix`

```typescript
const value: models.EightySix = {
  plan: "<value>",
};
```

### `models.EightySeven`

```typescript
const value: models.EightySeven = {
  projectName: "<value>",
  branch: "<value>",
};
```

### `models.EightyEight`

```typescript
const value: models.EightyEight = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 6783.83,
    enabledAt: 7526.17,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 78.34,
    enabledAt: 1264.5,
  },
};
```

### `models.EightyNine`

```typescript
const value: models.EightyNine = {
  projectId: "<id>",
};
```

### `models.Ninety`

```typescript
const value: models.Ninety = {
  projectId: "<id>",
};
```

### `models.NinetyOne`

```typescript
const value: models.NinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

### `models.NinetyTwo`

```typescript
const value: models.NinetyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "bitbucket",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

### `models.NinetyThree`

```typescript
const value: models.NinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github-limited",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

### `models.NinetyFour`

```typescript
const value: models.NinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

### `models.NinetyFive`

```typescript
const value: models.NinetyFive = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: false,
};
```

### `models.NinetySix`

```typescript
const value: models.NinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: true,
};
```

### `models.NinetySeven`

```typescript
const value: models.NinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

### `models.NinetyEight`

```typescript
const value: models.NinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

### `models.NinetyNine`

```typescript
const value: models.NinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: true,
};
```

### `models.OneHundred`

```typescript
const value: models.OneHundred = {
  projectId: "<id>",
  projectName: "<value>",
  ssoProtection: "all_except_custom_domains",
  oldSsoProtection: null,
};
```

### `models.OneHundredAndOne`

```typescript
const value: models.OneHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  passwordProtection: "preview",
  oldPasswordProtection: {
    deploymentType: "preview",
  },
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
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFour`

```typescript
const value: models.OneHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  action: "updated",
};
```

### `models.OneHundredAndFive`

```typescript
const value: models.OneHundredAndFive = {
  name: "<value>",
  ownerId: "<id>",
};
```

### `models.OneHundredAndSix`

```typescript
const value: models.OneHundredAndSix = {
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

### `models.OneHundredAndSeven`

```typescript
const value: models.OneHundredAndSeven = {
  projectId: "<id>",
};
```

### `models.OneHundredAndEight`

```typescript
const value: models.OneHundredAndEight = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: null,
  environment: "preview",
};
```

### `models.OneHundredAndNine`

```typescript
const value: models.OneHundredAndNine = {
  environment: "production",
  enabled: "default-force",
};
```

### `models.OneHundredAndTen`

```typescript
const value: models.OneHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

### `models.OneHundredAndEleven`

```typescript
const value: models.OneHundredAndEleven = {
  projectId: "<id>",
};
```

### `models.OneHundredAndTwelve`

```typescript
const value: models.OneHundredAndTwelve = {
  source: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndThirteen`

```typescript
const value: models.OneHundredAndThirteen = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

### `models.OneHundredAndFourteen`

```typescript
const value: models.OneHundredAndFourteen = {
  next: {
    project: {
      id: "<id>",
      staticIps: {
        enabled: false,
      },
    },
  },
  previous: {
    project: {
      id: "<id>",
      staticIps: {
        enabled: false,
      },
    },
  },
};
```

### `models.OneHundredAndFifteen`

```typescript
const value: models.OneHundredAndFifteen = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: false,
};
```

### `models.OneHundredAndSixteen`

```typescript
const value: models.OneHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: true,
};
```

### `models.OneHundredAndSeventeen`

```typescript
const value: models.OneHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndEighteen`

```typescript
const value: models.OneHundredAndEighteen = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: false,
};
```

### `models.OneHundredAndNineteen`

```typescript
const value: models.OneHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndTwenty`

```typescript
const value: models.OneHundredAndTwenty = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
};
```

### `models.OneHundredAndTwentyOne`

```typescript
const value: models.OneHundredAndTwentyOne = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

### `models.OneHundredAndTwentyTwo`

```typescript
const value: models.OneHundredAndTwentyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  productionDeploymentsFastLane: false,
};
```

### `models.OneHundredAndTwentyThree`

```typescript
const value: models.OneHundredAndTwentyThree = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: false,
};
```

### `models.OneHundredAndTwentyFour`

```typescript
const value: models.OneHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndTwentyFive`

```typescript
const value: models.OneHundredAndTwentyFive = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: true,
};
```

### `models.OneHundredAndTwentySix`

```typescript
const value: models.OneHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 2741.35,
  },
  next: {
    functionDefaultTimeout: 5217.02,
  },
};
```

### `models.OneHundredAndTwentySeven`

```typescript
const value: models.OneHundredAndTwentySeven = {
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

### `models.OneHundredAndTwentyEight`

```typescript
const value: models.OneHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [],
  },
  next: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
};
```

### `models.OneHundredAndTwentyNine`

```typescript
const value: models.OneHundredAndTwentyNine = {
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

### `models.OneHundredAndThirty`

```typescript
const value: models.OneHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndThirtyOne`

```typescript
const value: models.OneHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 6947.17,
  },
  previous: {},
};
```

### `models.OneHundredAndThirtyTwo`

```typescript
const value: models.OneHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 1421.78,
  },
  previous: {},
};
```

### `models.OneHundredAndThirtyThree`

```typescript
const value: models.OneHundredAndThirtyThree = {
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

### `models.OneHundredAndThirtyFour`

```typescript
const value: models.OneHundredAndThirtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: true,
};
```

### `models.OneHundredAndThirtyFive`

```typescript
const value: models.OneHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: false,
};
```

### `models.OneHundredAndThirtySix`

```typescript
const value: models.OneHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: true,
};
```

### `models.OneHundredAndThirtySeven`

```typescript
const value: models.OneHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

### `models.OneHundredAndThirtyEight`

```typescript
const value: models.OneHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

### `models.OneHundredAndThirtyNine`

```typescript
const value: models.OneHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndForty`

```typescript
const value: models.OneHundredAndForty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.OneHundredAndFortyOne`

```typescript
const value: models.OneHundredAndFortyOne = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

### `models.OneHundredAndFortyTwo`

```typescript
const value: models.OneHundredAndFortyTwo = {
  instances: 3006.65,
  url: "https://understated-slipper.name/",
};
```

### `models.OneHundredAndFortyThree`

```typescript
const value: models.OneHundredAndFortyThree = {
  email: "Jena_Ankunding@gmail.com",
  verified: false,
};
```

### `models.OneHundredAndFortyFour`

```typescript
const value: models.OneHundredAndFortyFour = {
  email: "Adrianna.Cormier@gmail.com",
};
```

### `models.OneHundredAndFortyFive`

```typescript
const value: models.OneHundredAndFortyFive = {
  team: {
    id: "<id>",
  },
};
```

### `models.OneHundredAndFortySix`

```typescript
const value: models.OneHundredAndFortySix = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Blaze_Maggio@yahoo.com",
  },
};
```

### `models.OneHundredAndFortySeven`

```typescript
const value: models.OneHundredAndFortySeven = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

### `models.OneHundredAndFortyEight`

```typescript
const value: models.OneHundredAndFortyEight = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.OneHundredAndFortyNine`

```typescript
const value: models.OneHundredAndFortyNine = {
  bio: "<value>",
};
```

### `models.OneHundredAndFifty`

```typescript
const value: models.OneHundredAndFifty = {
  scalingRules: {},
  min: 2110.7,
  max: 9992.42,
  url: "https://glittering-costume.net/",
};
```

### `models.OneHundredAndFiftyOne`

```typescript
const value: models.OneHundredAndFiftyOne = {
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

### `models.OneHundredAndFiftyTwo`

```typescript
const value: models.OneHundredAndFiftyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 7028.89,
    previousSpend: [
      6331.4,
      113.93,
      4919.81,
    ],
    notifiedAt: [
      6450.74,
    ],
    createdAt: 6413.68,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.OneHundredAndFiftyThree`

```typescript
const value: models.OneHundredAndFiftyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 3424.02,
    previousSpend: [
      3063.44,
      1038.52,
      5249.18,
    ],
    notifiedAt: [
      7438.21,
    ],
    createdAt: 5231.73,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

### `models.OneHundredAndFiftyFour`

```typescript
const value: models.OneHundredAndFiftyFour = {};
```

### `models.OneHundredAndFiftyFive`

```typescript
const value: models.OneHundredAndFiftyFive = {
  id: "<id>",
  type: "redis",
};
```

### `models.OneHundredAndFiftySix`

```typescript
const value: models.OneHundredAndFiftySix = {
  storeType: "postgres",
};
```

### `models.OneHundredAndFiftySeven`

```typescript
const value: models.OneHundredAndFiftySeven = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

### `models.OneHundredAndFiftyEight`

```typescript
const value: models.OneHundredAndFiftyEight = {
  slug: "<value>",
};
```

### `models.OneHundredAndFiftyNine`

```typescript
const value: models.OneHundredAndFiftyNine = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

### `models.OneHundredAndSixty`

```typescript
const value: models.OneHundredAndSixty = {
  deletedCount: 8008.02,
  inviteIds: [],
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
  uid: "<id>",
};
```

### `models.OneHundredAndSixtyFour`

```typescript
const value: models.OneHundredAndSixtyFour = {
  previousRole: "<value>",
};
```

### `models.OneHundredAndSixtyFive`

```typescript
const value: models.OneHundredAndSixtyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Art.Bins61",
  },
};
```

### `models.OneHundredAndSixtySix`

```typescript
const value: models.OneHundredAndSixtySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Cecelia.Franey",
  },
};
```

### `models.OneHundredAndSixtySeven`

```typescript
const value: models.OneHundredAndSixtySeven = {
  enforced: false,
};
```

### `models.OneHundredAndSixtyEight`

```typescript
const value: models.OneHundredAndSixtyEight = {};
```

### `models.OneHundredAndSixtyNine`

```typescript
const value: models.OneHundredAndSixtyNine = {};
```

### `models.OneHundredAndSeventy`

```typescript
const value: models.OneHundredAndSeventy = {};
```

### `models.OneHundredAndSeventyOne`

```typescript
const value: models.OneHundredAndSeventyOne = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

### `models.OneHundredAndSeventyTwo`

```typescript
const value: models.OneHundredAndSeventyTwo = {
  enabled: true,
  totpVerified: false,
};
```

### `models.OneHundredAndSeventyThree`

```typescript
const value: models.OneHundredAndSeventyThree = {
  mfaEnabled: false,
};
```

### `models.OneHundredAndSeventyFour`

```typescript
const value: models.OneHundredAndSeventyFour = {
  email: "Erich.Weber@gmail.com",
  prevEmail: "<value>",
};
```

### `models.OneHundredAndSeventyFive`

```typescript
const value: models.OneHundredAndSeventyFive = {
  username: "Yvonne.Hamill62",
};
```

### `models.OneHundredAndSeventySix`

```typescript
const value: models.OneHundredAndSeventySix = {};
```

### `models.OneHundredAndSeventySeven`

```typescript
const value: models.OneHundredAndSeventySeven = {};
```

### `models.OneHundredAndSeventyEight`

```typescript
const value: models.OneHundredAndSeventyEight = {};
```

### `models.OneHundredAndSeventyNine`

```typescript
const value: models.OneHundredAndSeventyNine = {
  teamName: "<value>",
};
```

### `models.OneHundredAndEighty`

```typescript
const value: models.OneHundredAndEighty = {
  teamName: "<value>",
};
```

### `models.OneHundredAndEightyOne`

```typescript
const value: models.OneHundredAndEightyOne = {
  requestedTeamName: "<value>",
};
```

### `models.OneHundredAndEightyTwo`

```typescript
const value: models.OneHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  originAccountName: "<value>",
  destinationAccountName: "<value>",
  destinationAccountId: "<id>",
};
```

### `models.OneHundredAndEightyThree`

```typescript
const value: models.OneHundredAndEightyThree = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.OneHundredAndEightyFour`

```typescript
const value: models.OneHundredAndEightyFour = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

### `models.OneHundredAndEightyFive`

```typescript
const value: models.OneHundredAndEightyFive = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

### `models.OneHundredAndEightySix`

```typescript
const value: models.OneHundredAndEightySix = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 305.41,
  },
};
```

### `models.OneHundredAndEightySeven`

```typescript
const value: models.OneHundredAndEightySeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 1313.3,
  },
};
```

### `models.OneHundredAndEightyEight`

```typescript
const value: models.OneHundredAndEightyEight = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

### `models.OneHundredAndEightyNine`

```typescript
const value: models.OneHundredAndEightyNine = {
  project: {
    name: "<value>",
    role: "PROJECT_DEVELOPER",
    invitedUserName: "<value>",
  },
};
```

### `models.OneHundredAndNinety`

```typescript
const value: models.OneHundredAndNinety = {
  projectName: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndNinetyOne`

```typescript
const value: models.OneHundredAndNinetyOne = {
  projectName: "<value>",
  srcImages: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.OneHundredAndNinetyTwo`

```typescript
const value: models.OneHundredAndNinetyTwo = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

### `models.OneHundredAndNinetyThree`

```typescript
const value: models.OneHundredAndNinetyThree = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

### `models.OneHundredAndNinetyFour`

```typescript
const value: models.OneHundredAndNinetyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
  ],
};
```

### `models.OneHundredAndNinetyFive`

```typescript
const value: models.OneHundredAndNinetyFive = {
  action: "disable",
};
```

### `models.OneHundredAndNinetySix`

```typescript
const value: models.OneHundredAndNinetySix = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

### `models.OneHundredAndNinetySeven`

```typescript
const value: models.OneHundredAndNinetySeven = {
  id: "<id>",
  prev: {
    name: "<value>",
    slug: "<value>",
    fallbackEnvironment: "<value>",
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

### `models.TwoHundred`

```typescript
const value: models.TwoHundred = {
  projectId: "<id>",
  projectName: "<value>",
};
```

### `models.TwoHundredAndOne`

```typescript
const value: models.TwoHundredAndOne = {
  tier: "pro",
};
```

### `models.TwoHundredAndTwo`

```typescript
const value: models.TwoHundredAndTwo = {
  oldName: "<value>",
  newName: "<value>",
};
```

### `models.TwoHundredAndThree`

```typescript
const value: models.TwoHundredAndThree = {
  appName: "<value>",
  scopes: [
    "profile",
  ],
};
```

### `models.TwoHundredAndFour`

```typescript
const value: models.TwoHundredAndFour = {
  appName: "<value>",
  nextScopes: [
    "email",
  ],
};
```

### `models.TwoHundredAndFive`

```typescript
const value: models.TwoHundredAndFive = {
  appName: "<value>",
};
```

### `models.TwoHundredAndSix`

```typescript
const value: models.TwoHundredAndSix = {
  appName: "<value>",
};
```

### `models.TwoHundredAndSeven`

```typescript
const value: models.TwoHundredAndSeven = {
  appName: "<value>",
};
```

### `models.TwoHundredAndEight`

```typescript
const value: models.TwoHundredAndEight = {
  appName: "<value>",
};
```

### `models.TwoHundredAndNine`

```typescript
const value: models.TwoHundredAndNine = {
  appName: "<value>",
};
```

### `models.TwoHundredAndTen`

```typescript
const value: models.TwoHundredAndTen = {
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

### `models.TwoHundredAndEleven`

```typescript
const value: models.TwoHundredAndEleven = {
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

### `models.TwoHundredAndTwelve`

```typescript
const value: models.TwoHundredAndTwelve = {
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

### `models.TwoHundredAndThirteen`

```typescript
const value: models.TwoHundredAndThirteen = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 497.61,
  scope: "<value>",
  authMethod: "passkey",
};
```


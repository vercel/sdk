# GetProjectsResponseBody


## Supported Types

### `models.GetProjectsResponseBody1[]`

```typescript
const value: models.GetProjectsResponseBody1[] = [
  {
    accountId: "<id>",
    alias: [
      {
        deployment: {
          createdAt: 4315.2,
          createdIn: "<value>",
          creator: {
            email: "Mikel_Bechtelar@yahoo.com",
            uid: "<id>",
            username: "Annalise_DuBuque",
          },
          deploymentHostname: "<value>",
          id: "<id>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: true,
          readyState: "BUILDING",
          type: "LAMBDAS",
          url: "https://outstanding-festival.biz",
        },
        domain: "supportive-tomb.name",
        environment: "production",
        target: "STAGING",
      },
    ],
    deploymentExpiration: {},
    directoryListing: false,
    id: "<id>",
    latestDeployments: [
      {
        createdAt: 9565.98,
        createdIn: "<value>",
        creator: {
          email: "Camryn.Nader@hotmail.com",
          uid: "<id>",
          username: "Jessy_Grant",
        },
        deploymentHostname: "<value>",
        id: "<id>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: false,
        readyState: "BLOCKED",
        type: "LAMBDAS",
        url: "https://tattered-dandelion.com/",
      },
    ],
    name: "<value>",
    nodeVersion: "12.x",
    resourceConfig: {
      functionDefaultRegions: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    rollingRelease: {
      canaryResponseHeader: false,
      gate: {
        action: "rollback",
        checks: [],
        dryRun: false,
        enabled: false,
        failureThreshold: 3,
        windowSize: 5,
      },
      stages: [
        {
          duration: 600,
          linearShift: false,
          requireApproval: false,
          targetPercentage: 25,
        },
      ],
      target: "production",
    },
    serverlessFunctionRegion: "<value>",
    targets: {
      "key": {
        createdAt: 2031.24,
        createdIn: "<value>",
        creator: null,
        deploymentHostname: "<value>",
        id: "<id>",
        name: "<value>",
        plan: "enterprise",
        previewCommentsEnabled: false,
        private: false,
        readyState: "INITIALIZING",
        type: "LAMBDAS",
        url: "https://understated-retention.name",
      },
    },
  },
];
```

### `models.GetProjectsResponseBody2`

```typescript
const value: models.GetProjectsResponseBody2 = {
  pagination: {
    count: 20,
    next: "JBSWY3DPEHPK3PXP",
  },
  projects: [
    {
      accountId: "<id>",
      alias: [
        {
          deployment: {
            createdAt: 2521.56,
            createdIn: "<value>",
            creator: {
              email: "Augusta_Thompson@gmail.com",
              uid: "<id>",
              username: "Guadalupe_Satterfield",
            },
            deploymentHostname: "<value>",
            id: "<id>",
            name: "<value>",
            plan: "pro",
            previewCommentsEnabled: false,
            private: false,
            readyState: "QUEUED",
            type: "LAMBDAS",
            url: "https://stingy-outlaw.biz",
          },
          domain: "dutiful-video.com",
          environment: "production",
          target: "STAGING",
        },
      ],
      deploymentExpiration: {},
      directoryListing: true,
      id: "<id>",
      latestDeployments: [
        {
          createdAt: 3100.36,
          createdIn: "<value>",
          creator: {
            email: "Amara9@yahoo.com",
            uid: "<id>",
            username: "Hal.Wisoky",
          },
          deploymentHostname: "<value>",
          id: "<id>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "INITIALIZING",
          type: "LAMBDAS",
          url: "https://free-synergy.com/",
        },
      ],
      name: "<value>",
      nodeVersion: "16.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
          "<value 2>",
        ],
      },
      rollingRelease: {
        canaryResponseHeader: false,
        gate: {
          action: "rollback",
          checks: [],
          dryRun: false,
          enabled: false,
          failureThreshold: 3,
          windowSize: 5,
        },
        stages: [
          {
            duration: 600,
            linearShift: false,
            requireApproval: false,
            targetPercentage: 25,
          },
        ],
        target: "production",
      },
      serverlessFunctionRegion: "<value>",
      targets: {
        "key": {
          createdAt: 5771.7,
          createdIn: "<value>",
          creator: {
            email: "Macey78@yahoo.com",
            uid: "<id>",
            username: "Luisa.Pacocha",
          },
          deploymentHostname: "<value>",
          id: "<id>",
          name: "<value>",
          plan: "hobby",
          previewCommentsEnabled: false,
          private: false,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://minor-expense.name/",
        },
      },
    },
  ],
};
```

### `models.GetProjectsResponseBody3`

```typescript
const value: models.GetProjectsResponseBody3 = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  projects: [],
};
```


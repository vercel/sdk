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
          id: "<id>",
          createdAt: 4315.2,
          createdIn: "<value>",
          creator: {
            email: "Mikel_Bechtelar@yahoo.com",
            uid: "<id>",
            username: "Annalise_DuBuque",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: true,
          readyState: "BUILDING",
          type: "LAMBDAS",
          url: "https://outstanding-festival.biz",
          userId: "<id>",
        },
        domain: "supportive-tomb.name",
        environment: "production",
        target: "STAGING",
      },
    ],
    directoryListing: false,
    deploymentExpiration: {},
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 9565.98,
        createdIn: "<value>",
        creator: {
          email: "Camryn.Nader@hotmail.com",
          uid: "<id>",
          username: "Jessy_Grant",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: false,
        readyState: "BLOCKED",
        type: "LAMBDAS",
        url: "https://tattered-dandelion.com/",
        userId: "<id>",
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
      target: "production",
      stages: [
        {
          targetPercentage: 25,
          requireApproval: false,
          duration: 600,
          linearShift: false,
        },
      ],
      canaryResponseHeader: false,
    },
    serverlessFunctionRegion: "<value>",
    targets: {
      "key": {
        id: "<id>",
        createdAt: 2031.24,
        createdIn: "<value>",
        creator: null,
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "enterprise",
        previewCommentsEnabled: false,
        private: false,
        readyState: "INITIALIZING",
        type: "LAMBDAS",
        url: "https://understated-retention.name",
        userId: "<id>",
      },
    },
  },
];
```

### `models.GetProjectsResponseBody2`

```typescript
const value: models.GetProjectsResponseBody2 = {
  projects: [],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

### `models.GetProjectsResponseBody3`

```typescript
const value: models.GetProjectsResponseBody3 = {
  projects: [
    {
      accountId: "<id>",
      alias: [],
      crons: {
        enabledAt: 8858.87,
        disabledAt: 1432.7,
        updatedAt: 4029.67,
        deploymentId: null,
        definitions: [],
      },
      deploymentExpiration: {},
      directoryListing: false,
      id: "<id>",
      latestDeployments: [
        {
          id: "<id>",
          createdAt: 6432.1,
          createdIn: "<value>",
          creator: {
            email: "Annetta_Swift23@gmail.com",
            uid: "<id>",
            username: "Earnestine_OReilly",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "ERROR",
          type: "LAMBDAS",
          url: "https://normal-statue.info",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "22.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
          "<value 2>",
        ],
      },
      rollingRelease: {
        target: "production",
        stages: [
          {
            targetPercentage: 25,
            requireApproval: false,
            duration: 600,
            linearShift: false,
          },
        ],
        canaryResponseHeader: false,
      },
      defaultResourceConfig: {
        functionDefaultRegions: [],
      },
      targets: {
        "key": {
          id: "<id>",
          createdAt: 2108.09,
          createdIn: "<value>",
          creator: {
            email: "Fritz.Streich@hotmail.com",
            uid: "<id>",
            username: "Ashly82",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: true,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://frank-gloom.name/",
          userId: "<id>",
        },
      },
    },
  ],
  pagination: {
    count: 20,
    next: "JBSWY3DPEHPK3PXP",
  },
};
```


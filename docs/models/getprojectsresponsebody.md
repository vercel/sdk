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
          createdAt: 6834.37,
          createdIn: "<value>",
          creator: {
            email: "Abigale.Renner@hotmail.com",
            uid: "<id>",
            username: "Ellis.Stoltenberg",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          id: "<id>",
          plan: "<value>",
          private: true,
          readyState: "<value>",
          type: "<value>",
          url: "https://unaware-trick.org/",
          userId: "<id>",
        },
        domain: "ordinary-tray.org",
        environment: "preview",
        target: "PREVIEW",
      },
    ],
    directoryListing: false,
    deploymentExpiration: {},
    id: "<id>",
    name: "<value>",
    nodeVersion: "22.x",
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
      crons: {
        enabledAt: 8563.1,
        disabledAt: 3810.36,
        updatedAt: 6364.7,
        deploymentId: "<id>",
        definitions: [],
      },
      deploymentExpiration: {},
      directoryListing: true,
      id: "<id>",
      name: "<value>",
      nodeVersion: "10.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
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
    },
  ],
  pagination: {
    count: 20,
    next: "JBSWY3DPEHPK3PXP",
  },
};
```


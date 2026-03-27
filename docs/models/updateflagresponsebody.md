# UpdateFlagResponseBody


## Supported Types

### `models.UpdateFlagResponseBody1`

```typescript
const value: models.UpdateFlagResponseBody1 = {
  variants: [],
  id: "<id>",
  environments: {},
  kind: "json",
  revision: 9662.69,
  seed: 4558.32,
  state: "archived",
  slug: "<value>",
  createdAt: 5171.38,
  updatedAt: 5365.64,
  createdBy: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  typeName: "flag",
};
```

### `models.Flag`

```typescript
const value: models.Flag = {
  variants: [],
  id: "<id>",
  environments: {
    "key": {
      pausedOutcome: {
        type: "variant",
        variantId: "<id>",
      },
      fallthrough: {
        type: "variant",
        variantId: "<id>",
      },
      active: true,
      rules: [],
    },
  },
  kind: "string",
  revision: 2186.56,
  seed: 8125.13,
  state: "archived",
  slug: "<value>",
  createdAt: 8307.94,
  updatedAt: 2132.63,
  createdBy: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  typeName: "flag",
};
```


# ListTeamFlagsResponseBody

## Example Usage

```typescript
import { ListTeamFlagsResponseBody } from "@vercel/sdk/models/listteamflagsop.js";

let value: ListTeamFlagsResponseBody = {
  data: [
    {
      variants: [
        {
          value: true,
          id: "<id>",
        },
      ],
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
      kind: "boolean",
      revision: 3263.96,
      seed: 432.41,
      state: "active",
      slug: "<value>",
      createdAt: 9407.97,
      updatedAt: 9157.74,
      createdBy: "<value>",
      ownerId: "<id>",
      projectId: "<id>",
      typeName: "flag",
    },
  ],
  pagination: {
    next: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.Flag](../models/flag.md)[]                                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [models.ListTeamFlagsPagination](../models/listteamflagspagination.md) | :heavy_check_mark:                                                     | N/A                                                                    |
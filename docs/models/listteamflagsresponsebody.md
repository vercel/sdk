# ListTeamFlagsResponseBody

## Example Usage

```typescript
import { ListTeamFlagsResponseBody } from "@vercel/sdk/models/listteamflagsop.js";

let value: ListTeamFlagsResponseBody = {
  data: [
    {
      createdAt: 6105.99,
      createdBy: "<value>",
      environments: {
        "key": {
          active: false,
          fallthrough: {
            base: {
              attribute: "<value>",
              kind: "<value>",
              type: "entity",
            },
            defaultVariantId: "<id>",
            rollFromVariantId: "<id>",
            rollToVariantId: "<id>",
            slots: [],
            startTimestamp: 1190.68,
            type: "rollout",
          },
          pausedOutcome: {
            type: "variant",
            variantId: "<id>",
          },
          rules: [
            {
              conditions: [
                {
                  cmp: "contains",
                  lhs: {
                    attribute: "<value>",
                    kind: "<value>",
                    type: "entity",
                  },
                },
              ],
              id: "<id>",
              outcome: {
                base: {
                  attribute: "<value>",
                  kind: "<value>",
                  type: "entity",
                },
                defaultVariantId: "<id>",
                rollFromVariantId: "<id>",
                rollToVariantId: "<id>",
                slots: [],
                startTimestamp: 2235.64,
                type: "rollout",
              },
            },
          ],
        },
      },
      id: "<id>",
      kind: "number",
      ownerId: "<id>",
      projectId: "<id>",
      revision: 3263.96,
      seed: 432.41,
      slug: "<value>",
      state: "active",
      typeName: "flag",
      updatedAt: 9407.97,
      variants: [
        {
          id: "<id>",
          value: 2250.11,
        },
      ],
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
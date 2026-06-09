# ListTeamFlagsV2ResponseBody

## Example Usage

```typescript
import { ListTeamFlagsV2ResponseBody } from "@vercel/sdk/models/listteamflagsv2op.js";

let value: ListTeamFlagsV2ResponseBody = {
  pagination: {
    next: "<value>",
  },
  data: [
    {
      variants: [
        {},
      ],
      id: "<id>",
      environments: {
        "key": {
          pausedOutcome: {
            type: "variant",
            variantId: "<id>",
          },
          fallthrough: {
            type: "split",
            base: {
              type: "entity",
              kind: "<value>",
              attribute: "<value>",
            },
            weights: {
              "key": 167.7,
            },
            defaultVariantId: "<id>",
          },
          active: true,
          rules: [
            {
              id: "<id>",
              outcome: {
                type: "rollout",
                base: {
                  type: "entity",
                  kind: "<value>",
                  attribute: "<value>",
                },
                defaultVariantId: "<id>",
                startTimestamp: 5347.28,
                rollFromVariantId: "<id>",
                rollToVariantId: "<id>",
                slots: [],
              },
              conditions: [],
            },
          ],
        },
      },
      kind: "number",
      revision: 6873.48,
      seed: 3007.26,
      state: "active",
      slug: "<value>",
      createdAt: 9091.11,
      updatedAt: 390.67,
      createdBy: "<value>",
      ownerId: "<id>",
      projectId: "<id>",
      typeName: "flag",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `pagination`                                                               | [models.ListTeamFlagsV2Pagination](../models/listteamflagsv2pagination.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | *models.ListTeamFlagsV2Data*[]                                             | :heavy_check_mark:                                                         | N/A                                                                        |
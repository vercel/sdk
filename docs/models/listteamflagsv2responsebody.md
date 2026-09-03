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
            type: "rollout",
            base: {
              type: "entity",
              kind: "<value>",
              attribute: "<value>",
            },
            defaultVariantId: "<id>",
            startTimestamp: 6873.48,
            rollFromVariantId: "<id>",
            rollToVariantId: "<id>",
            slots: [],
          },
          active: true,
          rules: [
            {
              id: "<id>",
              outcome: {
                type: "experiment",
              },
              conditions: [
                {
                  lhs: {
                    type: "segment",
                  },
                  cmp: "containsAnyOf",
                },
              ],
            },
          ],
        },
      },
      kind: "boolean",
      revision: 2207.59,
      seed: 6040.34,
      state: "active",
      slug: "<value>",
      createdAt: 2092.69,
      updatedAt: 2009.9,
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
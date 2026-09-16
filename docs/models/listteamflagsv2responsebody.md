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
      createdAt: 5840.18,
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
      kind: "boolean",
      ownerId: "<id>",
      projectId: "<id>",
      revision: 2207.59,
      seed: 6040.34,
      slug: "<value>",
      state: "active",
      typeName: "flag",
      updatedAt: 2092.69,
      variants: [],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `pagination`                                                               | [models.ListTeamFlagsV2Pagination](../models/listteamflagsv2pagination.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | *models.ListTeamFlagsV2Data*[]                                             | :heavy_check_mark:                                                         | N/A                                                                        |
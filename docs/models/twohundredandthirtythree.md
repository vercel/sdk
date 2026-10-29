# TwoHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyThree } from "@vercel/sdk/models/onehundredandninety.js";

let value: TwoHundredAndThirtyThree = {
  enabled: true,
  enforcedTeamIds: [
    "<value 1>",
  ],
  organizationId: "<id>",
  previousEnabled: true,
  trigger: "organization_deleted",
  unenforcedTeamIds: [],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `enabled`                              | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `enforcedTeamIds`                      | *string*[]                             | :heavy_check_mark:                     | N/A                                    |
| `organizationId`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `previousEnabled`                      | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `trigger`                              | [models.Trigger](../models/trigger.md) | :heavy_check_mark:                     | N/A                                    |
| `unenforcedTeamIds`                    | *string*[]                             | :heavy_check_mark:                     | N/A                                    |
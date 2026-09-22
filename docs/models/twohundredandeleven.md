# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/sourceimages.js";

let value: TwoHundredAndEleven = {
  enabled: true,
  enforcedTeamIds: [],
  organizationId: "<id>",
  previousEnabled: true,
  trigger: "team_attached",
  unenforcedTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
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
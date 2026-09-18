# TwoHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEight } from "@vercel/sdk/models/usereventpayload172newownerfeatureblocksvcrblockreason.js";

let value: TwoHundredAndEight = {
  enabled: true,
  enforcedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  organizationId: "<id>",
  previousEnabled: true,
  trigger: "directory_sync_updated",
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
# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: TwoHundredAndThirtyTwo = {
  enabled: false,
  enforcedTeamIds: [
    "<value 1>",
    "<value 2>",
  ],
  organizationId: "<id>",
  previousEnabled: false,
  trigger: "saml_updated",
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
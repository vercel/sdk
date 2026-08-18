# OneHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFive } from "@vercel/sdk/models/edgemiddlewareinvocations.js";

let value: OneHundredAndSixtyFive = {
  integration: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    configurationId: "<id>",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `integration`                                                | [models.PayloadIntegration](../models/payloadintegration.md) | :heavy_check_mark:                                           | N/A                                                          |
| `originTeamId`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `originTeamName`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/payloadspeedinsightsfree.js";

let value: OneHundredAndEightyTwo = {
  integration: {
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    slug: "<value>",
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
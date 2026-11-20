# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/newprojects.js";

let value: TwoHundredAndTwelve = {
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
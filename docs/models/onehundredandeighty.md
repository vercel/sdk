# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/usereventpayload172newownerfeatureblocksvcrblockreason.js";

let value: OneHundredAndEighty = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  commands: [
    {
      command: "<value>",
    },
  ],
  readonly: false,
  requestKind: "raw_commands",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `configurationId`                              | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `errorCode`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `integrationId`                                | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `integrationProductSlug`                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `integrationSlug`                              | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `resourceId`                                   | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `commands`                                     | [models.Commands](../models/commands.md)[]     | :heavy_check_mark:                             | N/A                                            |
| `errorIndex`                                   | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `readonly`                                     | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `requestKind`                                  | [models.RequestKind](../models/requestkind.md) | :heavy_check_mark:                             | N/A                                            |
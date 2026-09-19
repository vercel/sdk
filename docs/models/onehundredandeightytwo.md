# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload174newownerfeatureblocksspeedinsightsfreeblockreason.js";

let value: OneHundredAndEightyTwo = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  commands: [],
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
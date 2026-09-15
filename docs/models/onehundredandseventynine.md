# OneHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyNine } from "@vercel/sdk/models/usereventpayload171gituserid.js";

let value: OneHundredAndSeventyNine = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "raw_commands",
  readonly: false,
  commands: [
    {
      command: "<value>",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `resourceId`                                   | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `integrationId`                                | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `integrationSlug`                              | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `integrationProductSlug`                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `configurationId`                              | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `errorCode`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `requestKind`                                  | [models.RequestKind](../models/requestkind.md) | :heavy_check_mark:                             | N/A                                            |
| `readonly`                                     | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `commands`                                     | [models.Commands](../models/commands.md)[]     | :heavy_check_mark:                             | N/A                                            |
| `errorIndex`                                   | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
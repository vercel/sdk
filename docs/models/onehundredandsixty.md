# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/payloaddismissals.js";

let value: OneHundredAndSixty = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "raw_commands",
  readonly: false,
  commands: [],
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
| `error`                                        | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `requestKind`                                  | [models.RequestKind](../models/requestkind.md) | :heavy_check_mark:                             | N/A                                            |
| `readonly`                                     | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `commands`                                     | *string*[]                                     | :heavy_check_mark:                             | N/A                                            |
| `failedIndex`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
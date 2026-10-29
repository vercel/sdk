# Credentials

## Example Usage

```typescript
import { Credentials } from "@vercel/sdk/models/listaigatewaybyokcredentialsop.js";

let value: Credentials = {
  active: true,
  createdAt: 2210.11,
  credential: null,
  credentialId: "<id>",
  deleted: true,
  lastFourChars: "<value>",
  modelMappings: [],
  name: "<value>",
  ownerId: "<id>",
  providerSlug: "<value>",
  updatedAt: 920.89,
  zeroDataRetention: false,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `active`                                             | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `createdAt`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `credential`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `credentialId`                                       | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `deleted`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `lastFourChars`                                      | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `modelMappings`                                      | [models.ModelMappings](../models/modelmappings.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `ownerId`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `providerSlug`                                       | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `updatedAt`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `zeroDataRetention`                                  | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
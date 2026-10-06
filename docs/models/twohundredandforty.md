# TwoHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndForty } from "@vercel/sdk/models/twohundredandtwentyeight.js";

let value: TwoHundredAndForty = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `headerName`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `justification`                                | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `kind`                                         | [models.PayloadKind](../models/payloadkind.md) | :heavy_minus_sign:                             | N/A                                            |
| `previousStatus`                               | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `url`                                          | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
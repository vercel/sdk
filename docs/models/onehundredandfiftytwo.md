# OneHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyTwo } from "@vercel/sdk/models/edgemiddlewareinvocations.js";

let value: OneHundredAndFiftyTwo = {
  projectId: "<id>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `url`                                          | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `headerName`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `previousStatus`                               | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `justification`                                | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `kind`                                         | [models.PayloadKind](../models/payloadkind.md) | :heavy_minus_sign:                             | N/A                                            |
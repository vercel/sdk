# GetDomainTransferResponseBody1

## Example Usage

```typescript
import { GetDomainTransferResponseBody1 } from "@vercel/sdk/models/getdomaintransferop.js";

let value: GetDomainTransferResponseBody1 = {
  reason: "<value>",
  status: "<value>",
  transferable: true,
  transferPolicy: "charge-and-renew",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `reason`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `status`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `transferable`                                       | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `transferPolicy`                                     | [models.TransferPolicy](../models/transferpolicy.md) | :heavy_check_mark:                                   | N/A                                                  |
# AcceptProjectTransferRequestResponseBody1

## Example Usage

```typescript
import { AcceptProjectTransferRequestResponseBody1 } from "@vercel/sdk/models/acceptprojecttransferrequestop.js";

let value: AcceptProjectTransferRequestResponseBody1 = {
  partnerCalls: [],
  resourceTransferErrors: [
    {},
  ],
  transferredStoreIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `partnerCalls`                                                         | [models.PartnerCalls](../models/partnercalls.md)[]                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceTransferErrors`                                               | [models.ResourceTransferErrors](../models/resourcetransfererrors.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `transferredStoreIds`                                                  | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
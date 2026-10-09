# AcceptProjectTransferRequestResponseBody

The project has been transferred successfully.

## Example Usage

```typescript
import { AcceptProjectTransferRequestResponseBody } from "@vercel/sdk/models/acceptprojecttransferrequestop.js";

let value: AcceptProjectTransferRequestResponseBody = {
  partnerCalls: [],
  projectName: "<value>",
  resourceTransferErrors: [
    {},
  ],
  transferredStoreIds: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `partnerCalls`                                                         | [models.PartnerCalls](../models/partnercalls.md)[]                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceTransferErrors`                                               | [models.ResourceTransferErrors](../models/resourcetransfererrors.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `transferredStoreIds`                                                  | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
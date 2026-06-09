# PartnerCalls

## Example Usage

```typescript
import { PartnerCalls } from "@vercel/sdk/models/acceptprojecttransferrequestop.js";

let value: PartnerCalls = {
  installationId: "<id>",
  resourceIds: [
    "<value 1>",
    "<value 2>",
  ],
  result: {
    status: "errored",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `installationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `resourceIds`                                                                                                        | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [models.AcceptProjectTransferRequestResponseBodyResult](../models/acceptprojecttransferrequestresponsebodyresult.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
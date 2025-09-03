# AcceptProjectTransferRequestRequestBody

## Example Usage

```typescript
import { AcceptProjectTransferRequestRequestBody } from "@vercel/sdk/models/acceptprojecttransferrequestop.js";

let value: AcceptProjectTransferRequestRequestBody = {
  newProjectName: "a-project-name",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `newProjectName`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | The desired name for the project                                         | a-project-name                                                           |
| `paidFeatures`                                                           | [models.PaidFeatures](../models/paidfeatures.md)                         | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `acceptedPolicies`                                                       | Record<string, [models.AcceptedPolicies](../models/acceptedpolicies.md)> | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
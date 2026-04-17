# GetDeploymentsManualProvisioning

## Example Usage

```typescript
import { GetDeploymentsManualProvisioning } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsManualProvisioning = {
  state: "COMPLETE",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `state`                                                                              | [models.GetDeploymentsDeploymentsState](../models/getdeploymentsdeploymentsstate.md) | :heavy_check_mark:                                                                   | Current provisioning state                                                           |
| `completedAt`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp when manual provisioning completed                                         |
# Passport

## Example Usage

```typescript
import { Passport } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: Passport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload243DeploymentType](../models/usereventpayload243deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
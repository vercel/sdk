# UserEventPayload231Passport

## Example Usage

```typescript
import { UserEventPayload231Passport } from "@vercel/sdk/models/trigger.js";

let value: UserEventPayload231Passport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload231DeploymentType](../models/usereventpayload231deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
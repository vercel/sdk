# UserEventPayload220Passport

## Example Usage

```typescript
import { UserEventPayload220Passport } from "@vercel/sdk/models/siftroute.js";

let value: UserEventPayload220Passport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload220DeploymentType](../models/usereventpayload220deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
# UserEventPayloadPassport

## Example Usage

```typescript
import { UserEventPayloadPassport } from "@vercel/sdk/models/twohundredandtwenty.js";

let value: UserEventPayloadPassport = {
  connectorId: "<id>",
  deploymentType: "all",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload240DeploymentType](../models/usereventpayload240deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
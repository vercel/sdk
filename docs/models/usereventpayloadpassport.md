# UserEventPayloadPassport

## Example Usage

```typescript
import { UserEventPayloadPassport } from "@vercel/sdk/models/usereventpayload256next.js";

let value: UserEventPayloadPassport = {
  connectorId: "<id>",
  deploymentType: "all",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload257DeploymentType](../models/usereventpayload257deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
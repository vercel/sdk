# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deploymentType`                                                                                           | [models.UserEventPayload278PreviousDeploymentType](../models/usereventpayload278previousdeploymenttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
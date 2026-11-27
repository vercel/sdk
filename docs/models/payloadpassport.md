# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deploymentType`                                                                                           | [models.UserEventPayload285PreviousDeploymentType](../models/usereventpayload285previousdeploymenttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/twohundredandfortyfive.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deploymentType`                                                                                           | [models.UserEventPayload277PreviousDeploymentType](../models/usereventpayload277previousdeploymenttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
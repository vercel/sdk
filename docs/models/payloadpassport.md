# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/usereventpayload260next.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deploymentType`                                                                                           | [models.UserEventPayload281PreviousDeploymentType](../models/usereventpayload281previousdeploymenttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
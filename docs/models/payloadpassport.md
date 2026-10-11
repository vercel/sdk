# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deploymentType`                                                                                           | [models.UserEventPayload250PreviousDeploymentType](../models/usereventpayload250previousdeploymenttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
# UserEventPayloadPassport

## Example Usage

```typescript
import { UserEventPayloadPassport } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: UserEventPayloadPassport = {
  connectorId: "<id>",
  deploymentType: "all",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload238DeploymentType](../models/usereventpayload238deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
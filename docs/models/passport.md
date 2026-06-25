# Passport

## Example Usage

```typescript
import { Passport } from "@vercel/sdk/models/usereventpayloadgituserid.js";

let value: Passport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload174DeploymentType](../models/usereventpayload174deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
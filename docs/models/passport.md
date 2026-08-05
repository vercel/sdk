# Passport

## Example Usage

```typescript
import { Passport } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: Passport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload208DeploymentType](../models/usereventpayload208deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
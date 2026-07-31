# UserEventPayload204Passport

## Example Usage

```typescript
import { UserEventPayload204Passport } from "@vercel/sdk/models/querytype.js";

let value: UserEventPayload204Passport = {
  connectorId: "<id>",
  deploymentType: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectorId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentType`                                                                           | [models.UserEventPayload204DeploymentType](../models/usereventpayload204deploymenttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
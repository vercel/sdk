# UserEventPayloadPassport

## Example Usage

```typescript
import { UserEventPayloadPassport } from "@vercel/sdk/models/teams.js";

let value: UserEventPayloadPassport = {
  connectorId: "<id>",
  deploymentType: "all",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `connectorId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `deploymentType`                                                                     | [models.UserEventPayloadDeploymentType](../models/usereventpayloaddeploymenttype.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
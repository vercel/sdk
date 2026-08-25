# ConnectTriggerDestination

Destinations that incoming triggers should be forwarded to. Limited to 3 entries. Set the initial destination with `triggerDestination` during creation. Replace the complete set with `PATCH /v1/connect/connectors/{connector}/trigger-destinations`.

## Example Usage

```typescript
import { ConnectTriggerDestination } from "@vercel/sdk/models/connecttriggerdestination.js";

let value: ConnectTriggerDestination = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Vercel project that receives matching trigger requests.                                                                                                |
| `customEnvironmentId`                                                                                                                                  | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Stable custom-environment ID to route this destination to. Mutually exclusive with `branch`; omitted destinations keep the legacy production behavior. |
| `branch`                                                                                                                                               | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Git branch used to select a preview deployment.                                                                                                        |
| `path`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Route path that receives the forwarded trigger request.                                                                                                |
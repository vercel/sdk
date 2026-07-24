# TriggerDestinations

Destinations that incoming triggers should be forwarded to. Limited to `MAX_CONNEX_TRIGGER_DESTINATIONS` entries.

## Example Usage

```typescript
import { TriggerDestinations } from "@vercel/sdk/models/createconnectorop.js";

let value: TriggerDestinations = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `customEnvironmentId`                                                                                                                                  | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Stable custom-environment ID to route this destination to. Mutually exclusive with `branch`; omitted destinations keep the legacy production behavior. |
| `branch`                                                                                                                                               | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `path`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
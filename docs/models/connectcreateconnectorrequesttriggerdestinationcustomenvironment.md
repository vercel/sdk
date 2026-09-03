# ConnectCreateConnectorRequestTriggerDestinationCustomEnvironment

## Example Usage

```typescript
import { ConnectCreateConnectorRequestTriggerDestinationCustomEnvironment } from "@vercel/sdk/models/connectcreateconnectorrequest.js";

let value: ConnectCreateConnectorRequestTriggerDestinationCustomEnvironment = {
  customEnvironmentId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Project that receives triggers. During connector creation, omit it to use the top-level projectId. |
| `customEnvironmentId`                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Stable custom environment ID that belongs to the destination project.                              |
| `path`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Route path on the linked project that receives forwarded trigger requests.                         |
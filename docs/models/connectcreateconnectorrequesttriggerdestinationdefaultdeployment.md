# ConnectCreateConnectorRequestTriggerDestinationDefaultDeployment

## Example Usage

```typescript
import { ConnectCreateConnectorRequestTriggerDestinationDefaultDeployment } from "@vercel/sdk/models/connectcreateconnectorrequest.js";

let value: ConnectCreateConnectorRequestTriggerDestinationDefaultDeployment =
  {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Project that receives triggers. During connector creation, omit it to use the top-level projectId. |
| `path`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Route path on the linked project that receives forwarded trigger requests.                         |
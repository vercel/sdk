# TriggerDestinationBranch

## Example Usage

```typescript
import { TriggerDestinationBranch } from "@vercel/sdk/models/connectcreateconnectorrequest.js";

let value: TriggerDestinationBranch = {
  branch: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Project that receives triggers. During connector creation, omit it to use the top-level projectId. |
| `branch`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | Git branch used to select a preview deployment.                                                    |
| `path`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Route path on the linked project that receives forwarded trigger requests.                         |
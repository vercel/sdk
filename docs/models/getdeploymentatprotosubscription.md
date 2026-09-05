# GetDeploymentAtprotoSubscription

## Example Usage

```typescript
import { GetDeploymentAtprotoSubscription } from "@vercel/sdk/models/getdeploymentmissingdeployments1.js";

let value: GetDeploymentAtprotoSubscription = {
  collections: [],
  path: "/usr/lib",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `collections`                                                                | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `dids`                                                                       | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `kinds`                                                                      | [models.GetDeploymentAtprotoKinds](../models/getdeploymentatprotokinds.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `path`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
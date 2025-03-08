# UpdateCustomEnvironmentRequestBody

## Example Usage

```typescript
import { UpdateCustomEnvironmentRequestBody } from "@vercel/sdk/models/updatecustomenvironmentop.js";

let value: UpdateCustomEnvironmentRequestBody = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The slug of the custom environment.                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | Description of the custom environment. This is optional.                                         |
| `branchMatcher`                                                                                  | [models.UpdateCustomEnvironmentBranchMatcher](../models/updatecustomenvironmentbranchmatcher.md) | :heavy_minus_sign:                                                                               | How we want to determine a matching branch. This is optional.                                    |
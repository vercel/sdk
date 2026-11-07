# Source3

## Example Usage

```typescript
import { Source3 } from "@vercel/sdk/models/createprojectcheckop.js";

let value: Source3 = {
  kind: "<value>",
  externalCheckName: "<value>",
  provider: "github",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Imports Git provider check results, such as GitHub check runs or commit statuses, as Deployment Checks. |
| `externalCheckName`                                                                                     | *string*                                                                                                | :heavy_check_mark:                                                                                      | The Git provider check name or context to match, for example a GitHub Actions job name.                 |
| `provider`                                                                                              | [models.SourceProvider](../models/sourceprovider.md)                                                    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
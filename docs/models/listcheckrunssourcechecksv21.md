# ListCheckRunsSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListCheckRunsSourceChecksV21 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSourceChecksV21 = {
  subKind: "vercel-ci",
  origin: "config",
  invocationId: "<id>",
  jobDefinitionId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `subKind`                                                                                                  | *"vercel-ci"*                                                                                              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `origin`                                                                                                   | [models.ListCheckRunsSourceChecksV2ResponseOrigin](../models/listcheckrunssourcechecksv2responseorigin.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `invocationId`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `jobDefinitionId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
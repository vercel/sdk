# ListCheckRunsSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListCheckRunsSourceChecksV22 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSourceChecksV22 = {
  origin: "platform",
  subKind: "vercel-ci-sentinel",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `origin`                                                                     | *"platform"*                                                                 | :heavy_check_mark:                                                           | N/A                                                                          |
| `subKind`                                                                    | [models.ListCheckRunsSourceSubKind](../models/listcheckrunssourcesubkind.md) | :heavy_check_mark:                                                           | N/A                                                                          |
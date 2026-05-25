# ListCheckRunsSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListCheckRunsSourceChecksV22 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSourceChecksV22 = {
  subKind: "vercel-ci-sentinel",
  origin: "platform",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `subKind`                                                                  | *"vercel-ci-sentinel"*                                                     | :heavy_check_mark:                                                         | N/A                                                                        |
| `origin`                                                                   | [models.ListCheckRunsSourceOrigin](../models/listcheckrunssourceorigin.md) | :heavy_check_mark:                                                         | N/A                                                                        |
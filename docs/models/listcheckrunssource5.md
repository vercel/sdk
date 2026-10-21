# ListCheckRunsSource5

Project-defined CI requirement; its selection is frozen on each check run.

## Example Usage

```typescript
import { ListCheckRunsSource5 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSource5 = {
  origin: "api",
  selection: {
    kind: "invocation",
  },
  subKind: "vercel-ci-check",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `origin`                                                                                                           | [models.ListCheckRunsSourceChecksV2Response200Origin](../models/listcheckrunssourcechecksv2response200origin.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `selection`                                                                                                        | *models.ListCheckRunsSourceSelection*                                                                              | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subKind`                                                                                                          | [models.ListCheckRunsSourceChecksV2Response200SubKind](../models/listcheckrunssourcechecksv2response200subkind.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
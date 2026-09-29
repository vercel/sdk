# Source5

Project-defined CI requirement; its selection is frozen on each check run.

## Example Usage

```typescript
import { Source5 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: Source5 = {
  origin: "api",
  selection: {
    job: "Forward Intranet Manager",
    kind: "task",
    task: "<value>",
  },
  subKind: "vercel-ci-check",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `origin`                                           | [models.SourceOrigin](../models/sourceorigin.md)   | :heavy_check_mark:                                 | N/A                                                |
| `selection`                                        | *models.Selection*                                 | :heavy_check_mark:                                 | N/A                                                |
| `subKind`                                          | [models.SourceSubKind](../models/sourcesubkind.md) | :heavy_check_mark:                                 | N/A                                                |
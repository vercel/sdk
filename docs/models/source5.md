# Source5

Project-defined CI requirement; its selection is frozen on each check run.

## Example Usage

```typescript
import { Source5 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: Source5 = {
  origin: "api",
  selection: {
    job: "Principal Data Planner",
    kind: "job",
  },
  subKind: "vercel-ci-check",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `origin`                                                                                                     | [models.GetDeploymentCheckRunSourceChecksV2Origin](../models/getdeploymentcheckrunsourcechecksv2origin.md)   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `selection`                                                                                                  | [models.SourceSelection](../models/sourceselection.md)                                                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subKind`                                                                                                    | [models.GetDeploymentCheckRunSourceChecksV2SubKind](../models/getdeploymentcheckrunsourcechecksv2subkind.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
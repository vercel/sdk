# ListDeploymentCheckRunsSource5

Project-defined CI requirement; its selection is frozen on each check run.

## Example Usage

```typescript
import { ListDeploymentCheckRunsSource5 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSource5 = {
  origin: "api",
  selection: {
    job: "Regional Response Administrator",
    kind: "job",
  },
  subKind: "vercel-ci-check",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `origin`                                                                                                         | [models.ListDeploymentCheckRunsSourceChecksV2Origin](../models/listdeploymentcheckrunssourcechecksv2origin.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `selection`                                                                                                      | [models.ListDeploymentCheckRunsSourceSelection](../models/listdeploymentcheckrunssourceselection.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subKind`                                                                                                        | [models.ListDeploymentCheckRunsSourceChecksV2SubKind](../models/listdeploymentcheckrunssourcechecksv2subkind.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
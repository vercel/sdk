# ListDeploymentCheckRunsSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListDeploymentCheckRunsSourceChecksV22 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSourceChecksV22 = {
  origin: "platform",
  subKind: "vercel-ci-sentinel",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `origin`                                                                                                                         | *"platform"*                                                                                                                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `subKind`                                                                                                                        | [models.ListDeploymentCheckRunsSourceChecksV2ResponseSubKind](../models/listdeploymentcheckrunssourcechecksv2responsesubkind.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
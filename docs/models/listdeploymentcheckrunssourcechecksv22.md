# ListDeploymentCheckRunsSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListDeploymentCheckRunsSourceChecksV22 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSourceChecksV22 = {
  subKind: "vercel-ci-sentinel",
  origin: "platform",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `subKind`                                                                                                                      | *"vercel-ci-sentinel"*                                                                                                         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `origin`                                                                                                                       | [models.ListDeploymentCheckRunsSourceChecksV2ResponseOrigin](../models/listdeploymentcheckrunssourcechecksv2responseorigin.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
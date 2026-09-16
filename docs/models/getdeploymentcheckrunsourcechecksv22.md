# GetDeploymentCheckRunSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { GetDeploymentCheckRunSourceChecksV22 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSourceChecksV22 = {
  origin: "platform",
  subKind: "vercel-ci-sentinel",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `origin`                                                                                                                     | *"platform"*                                                                                                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `subKind`                                                                                                                    | [models.GetDeploymentCheckRunSourceChecksV2ResponseSubKind](../models/getdeploymentcheckrunsourcechecksv2responsesubkind.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
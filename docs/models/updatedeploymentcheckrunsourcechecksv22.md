# UpdateDeploymentCheckRunSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSourceChecksV22 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSourceChecksV22 = {
  origin: "platform",
  subKind: "vercel-ci-sentinel",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `origin`                                                                                                                                 | *"platform"*                                                                                                                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `subKind`                                                                                                                                | [models.UpdateDeploymentCheckRunSourceChecksV2Response200SubKind](../models/updatedeploymentcheckrunsourcechecksv2response200subkind.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
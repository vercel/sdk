# ResponseBodyOrigin

Reference back to the entity on the platform that initiated the deployment.

## Example Usage

```typescript
import { ResponseBodyOrigin } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyOrigin = {
  type: "id",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [models.GetDeploymentResponseBodyDeploymentsResponse200Type](../models/getdeploymentresponsebodydeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                             | Whether the value is an opaque identifier or a URL.                                                                            |
| `value`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The identifier or URL pointing to the originating entity.                                                                      |